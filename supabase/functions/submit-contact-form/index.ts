
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.34.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, user_id } = await req.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Initialize Supabase client with admin privileges
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Insert message into contact_messages table
    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
        status: "new",
        user_id: user_id || null
      });
    
    if (error) throw error;
    
    // Send confirmation email would be here in a real implementation
    console.log(`Contact form submission from ${name} (${email}): ${subject}`);

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Contact form submitted successfully" 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error("Error in submit-contact-form function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400 
      }
    );
  }
});
