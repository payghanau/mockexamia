
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createHmac } from "https://deno.land/std@0.177.0/crypto/mod.ts";

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
    // Get request body
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Authorization header is required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify the user is authenticated
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Find the payment record in Supabase
    const { data: paymentData, error: paymentError } = await supabase
      .from('payments')
      .select('*')
      .eq('order_id', razorpay_order_id)
      .eq('user_id', user.id)
      .single();
    
    if (paymentError || !paymentData) {
      return new Response(
        JSON.stringify({ error: 'Payment record not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify signature
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET');
    if (!razorpayKeySecret) {
      return new Response(
        JSON.stringify({ error: 'Razorpay configuration is missing' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const hmac = createHmac("sha256", razorpayKeySecret);
    hmac.update(payload);
    const generatedSignature = hmac.hexDigest();
    
    const isSignatureValid = generatedSignature === razorpay_signature;
    
    if (!isSignatureValid) {
      // Update payment status to failed
      await supabase
        .from('payments')
        .update({ 
          status: 'failed',
          payment_id: razorpay_payment_id
        })
        .eq('id', paymentData.id);
        
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid signature' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update payment status to completed
    const { error: updateError } = await supabase
      .from('payments')
      .update({ 
        status: 'completed',
        payment_id: razorpay_payment_id
      })
      .eq('id', paymentData.id);
      
    if (updateError) {
      console.error('Payment update failed:', updateError);
      return new Response(
        JSON.stringify({ error: 'Failed to update payment status' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update user_exam payment status
    const { data: userExam, error: userExamFetchError } = await supabase
      .from('user_exams')
      .select('*')
      .eq('exam_id', paymentData.exam_id)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (!userExamFetchError && userExam) {
      await supabase
        .from('user_exams')
        .update({ 
          payment_status: 'completed',
          payment_id: razorpay_payment_id
        })
        .eq('id', userExam.id);
    }

    return new Response(
      JSON.stringify({
        success: true,
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
