import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterSignupRequest {
  email: string;
  name: string;
  source?: string;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes per IP

  const current = rateLimitStore.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
};

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Input sanitization
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';
    
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': '900' // 15 minutes
          } 
        }
      );
    }

    // Parse and validate request body
    const { email, name, source = 'website' }: NewsletterSignupRequest = await req.json();

    // Input validation
    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: 'Email and name are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    const sanitizedName = sanitizeInput(name);
    const sanitizedSource = sanitizeInput(source);

    // Get Mailchimp API key from environment
    const apiKey = Deno.env.get('MAILCHIMP_API_KEY');
    if (!apiKey) {
      console.error('MAILCHIMP_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Service configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Extract data center from API key
    const datacenter = apiKey.split('-')[1];
    const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members`;

    // Prepare member data
    const memberData = {
      email_address: sanitizedEmail,
      status: 'subscribed',
      merge_fields: {
        FNAME: sanitizedName,
        SOURCE: sanitizedSource,
      },
      tags: [sanitizedSource],
    };

    console.log('Adding subscriber to Mailchimp:', { email: sanitizedEmail, name: sanitizedName, source: sanitizedSource });

    // Make request to Mailchimp API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`anystring:${apiKey}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Successfully added subscriber:', data);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Successfully subscribed to newsletter!',
          memberId: data.id 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    } else {
      // Handle Mailchimp API errors
      if (data.title === 'Member Exists') {
        console.log('Member already exists:', sanitizedEmail);
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'You are already subscribed to our newsletter!' 
          }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      console.error('Mailchimp API error:', data);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to subscribe to newsletter. Please try again.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

  } catch (error) {
    console.error('Error in newsletter signup:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
};

serve(handler);