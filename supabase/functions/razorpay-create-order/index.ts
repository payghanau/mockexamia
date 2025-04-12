
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

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
    // Get request data
    const { examId, userId } = await req.json();
    
    if (!examId) {
      throw new Error('Exam ID is required');
    }
    
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get exam details
    const { data: examData, error: examError } = await supabase
      .from('exams')
      .select('*')
      .eq('id', examId)
      .single();
    
    if (examError || !examData) {
      throw new Error('Exam not found');
    }

    // Create Razorpay order
    const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID') || '';
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET') || '';

    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error('Razorpay credentials not configured');
    }

    // Basic auth for Razorpay API
    const auth = btoa(`${razorpayKeyId}:${razorpayKeySecret}`);

    // Create order
    const orderResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: examData.fee * 100, // amount in paisa
        currency: 'INR',
        receipt: `exam_${examId}_${userId}_${Date.now()}`,
        notes: {
          examId: examId,
          userId: userId,
          examTitle: examData.title
        }
      }),
    });

    const orderData = await orderResponse.json();
    
    if (!orderResponse.ok) {
      throw new Error(orderData.error?.description || 'Failed to create Razorpay order');
    }

    // Store payment record in database
    const { data: paymentData, error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: userId,
        exam_id: examId,
        amount: examData.fee,
        status: 'pending',
        order_id: orderData.id
      })
      .select();
    
    if (paymentError) {
      throw new Error('Failed to store payment record');
    }

    return new Response(
      JSON.stringify({
        success: true,
        order: orderData,
        payment: paymentData[0]
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
