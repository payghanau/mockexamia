
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";
import * as crypto from "https://deno.land/std@0.168.0/crypto/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get verification data
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      userId,
      examId 
    } = await req.json();
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      throw new Error('Missing required payment verification parameters');
    }

    // Verify signature
    const razorpaySecret = Deno.env.get('RAZORPAY_KEY_SECRET') || '';
    
    if (!razorpaySecret) {
      throw new Error('Razorpay credentials not configured');
    }

    // Create signature verification text
    const text = razorpay_order_id + '|' + razorpay_payment_id;
    
    // Encode as UTF-8
    const textEncoder = new TextEncoder();
    const data = textEncoder.encode(text);
    const key = textEncoder.encode(razorpaySecret);
    
    // Create HMAC
    const hmacKey = await crypto.subtle.importKey(
      "raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", hmacKey, data);
    
    // Convert to hex
    const signatureHex = Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    // Compare signatures
    if (signatureHex !== razorpay_signature) {
      throw new Error('Payment signature verification failed');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Update payment record
    const { error: paymentError } = await supabase
      .from('payments')
      .update({
        status: 'completed',
        payment_id: razorpay_payment_id
      })
      .eq('order_id', razorpay_order_id);
    
    if (paymentError) {
      throw new Error('Failed to update payment record');
    }

    // Update user-exam record if available
    if (userId && examId) {
      const { error: userExamError } = await supabase
        .from('user_exams')
        .update({
          payment_status: 'completed',
          payment_id: razorpay_payment_id
        })
        .eq('user_id', userId)
        .eq('exam_id', examId)
        .is('payment_status', 'pending');
      
      if (userExamError) {
        console.error('Failed to update user exam record:', userExamError);
      }
    }

    // Create or update analytics data
    const today = new Date().toISOString().split('T')[0];
    
    // Get today's analytics record or create one
    const { data: analyticsData, error: analyticsError } = await supabase
      .from('analytics')
      .select('*')
      .eq('date', today);
    
    if (analyticsError) {
      console.error('Failed to get analytics data:', analyticsError);
    } else {
      // Get exam fee
      const { data: examData } = await supabase
        .from('exams')
        .select('fee')
        .eq('id', examId)
        .single();
      
      const examFee = examData?.fee || 0;
      
      if (analyticsData && analyticsData.length > 0) {
        // Update existing record
        await supabase
          .from('analytics')
          .update({
            total_sales: analyticsData[0].total_sales + examFee
          })
          .eq('id', analyticsData[0].id);
      } else {
        // Create new record
        await supabase
          .from('analytics')
          .insert({
            date: today,
            total_sales: examFee
          });
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Payment verified successfully'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  }
});
