import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  product?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailjsApiKey = Deno.env.get('EMAILJS_API_KEY');
    
    if (!emailjsApiKey) {
      throw new Error('EMAILJS_API_KEY not configured');
    }

    const contactData: ContactEmailRequest = await req.json();
    
    console.log('Processing contact email for:', contactData.email);

    // Send email via EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_xv05zbo',
        template_id: 'template_c8nhsmn',
        user_id: emailjsApiKey,
        template_params: {
          from_name: contactData.name,
          from_email: contactData.email,
          phone: contactData.phone || 'Não informado',
          company: contactData.company || 'Não informado',
          product: contactData.product || 'Não especificado',
          message: contactData.message,
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('EmailJS API error:', errorText);
      throw new Error(`EmailJS API error: ${emailResponse.status}`);
    }

    console.log('Email sent successfully via EmailJS');

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to send email' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
