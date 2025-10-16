import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const EMAILJS_API_KEY = Deno.env.get('EMAILJS_API_KEY');
const EMAILJS_SERVICE_ID = "service_xv05zbo";
const EMAILJS_TEMPLATE_ID = "template_c8nhsmn";

// Rate limiting: 5 requests per IP per 15 minutes
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

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

const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    // New window or expired window
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
};

const cleanupRateLimits = () => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
};

// Cleanup expired rate limits every 5 minutes
setInterval(cleanupRateLimits, 5 * 60 * 1000);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP or email
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown';
    
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Muitas solicitações. Por favor, aguarde alguns minutos antes de tentar novamente.' 
        }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    if (!EMAILJS_API_KEY) {
      console.error('EMAILJS_API_KEY not configured');
      throw new Error('Email service not configured');
    }

    const contactData: ContactEmailRequest = await req.json();
    
    // Input validation
    if (!contactData.name || contactData.name.trim().length < 2 || contactData.name.length > 100) {
      throw new Error('Nome inválido');
    }
    if (!contactData.email || !contactData.email.includes('@') || contactData.email.length > 255) {
      throw new Error('Email inválido');
    }
    if (!contactData.message || contactData.message.trim().length < 10 || contactData.message.length > 2000) {
      throw new Error('Mensagem inválida');
    }
    
    console.log('Processing contact email for:', contactData.email.substring(0, 3) + '***');

    // Send email via EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_API_KEY,
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
