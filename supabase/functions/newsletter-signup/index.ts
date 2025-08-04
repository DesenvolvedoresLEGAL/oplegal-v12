import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterSignupRequest {
  email: string;
  name: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { email, name, source = 'website' }: NewsletterSignupRequest = await req.json();

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: 'Email and name are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const mailchimpApiKey = Deno.env.get('MAILCHIMP_API_KEY');
    if (!mailchimpApiKey) {
      console.error('MAILCHIMP_API_KEY not found');
      return new Response(
        JSON.stringify({ error: 'Newsletter service not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Extract datacenter from API key (last part after the dash)
    const datacenter = mailchimpApiKey.split('-')[1];
    const listId = '2a9c9aef43'; // Replace with your actual Mailchimp list ID

    const mailchimpUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const memberData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
      },
      tags: [source],
    };

    console.log('Attempting to add subscriber to Mailchimp:', { email, name, source });

    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`anystring:${mailchimpApiKey}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberData),
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log('Successfully added subscriber to Mailchimp:', responseData);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Successfully subscribed to newsletter',
          id: responseData.id 
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    } else {
      // Handle Mailchimp errors
      console.error('Mailchimp API error:', responseData);
      
      // If user is already subscribed, treat as success
      if (responseData.title === 'Member Exists') {
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Already subscribed to newsletter' 
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          }
        );
      }

      return new Response(
        JSON.stringify({ 
          error: 'Failed to subscribe to newsletter',
          details: responseData.detail || responseData.title 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }
  } catch (error) {
    console.error('Error in newsletter-signup function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);