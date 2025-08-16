import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const zapierApiKey = Deno.env.get('ZAPIER_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WebhookPayload {
  webhookUrl: string;
  data: {
    title?: string;
    content?: string;
    keywords?: string[];
    seoScore?: number;
    status?: string;
    url?: string;
    metadata?: Record<string, any>;
    timestamp?: string;
    source?: string;
  };
  triggerType: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { webhookUrl, data, triggerType }: WebhookPayload = await req.json();

    if (!webhookUrl) {
      return new Response(
        JSON.stringify({ error: 'Webhook URL is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate Zapier webhook URL format
    if (!webhookUrl.includes('hooks.zapier.com')) {
      return new Response(
        JSON.stringify({ error: 'Invalid Zapier webhook URL' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Prepare webhook payload
    const webhookPayload = {
      ...data,
      timestamp: data.timestamp || new Date().toISOString(),
      source: data.source || 'HowAIConnects SEO Dashboard',
      triggerType,
      processedBy: 'Supabase Edge Function',
    };

    console.log('Triggering Zapier webhook:', {
      url: webhookUrl,
      triggerType,
      dataKeys: Object.keys(webhookPayload),
    });

    // Trigger the Zapier webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'HowAIConnects-SEO-Dashboard/1.0',
        ...(zapierApiKey && { 'Authorization': `Bearer ${zapierApiKey}` }),
      },
      body: JSON.stringify(webhookPayload),
    });

    let responseData;
    let success = false;

    if (response.ok) {
      try {
        responseData = await response.text();
        success = true;
        console.log('Webhook triggered successfully:', {
          status: response.status,
          responseLength: responseData.length,
        });
      } catch (error) {
        console.log('Webhook triggered successfully (no response body)');
        success = true;
        responseData = 'Webhook triggered successfully';
      }
    } else {
      console.error('Webhook failed:', {
        status: response.status,
        statusText: response.statusText,
      });
      responseData = `HTTP ${response.status}: ${response.statusText}`;
    }

    // Log webhook activity for monitoring
    const activityLog = {
      timestamp: new Date().toISOString(),
      webhookUrl: webhookUrl.replace(/\/[^\/]+$/, '/***'), // Mask webhook ID for security
      triggerType,
      success,
      statusCode: response.status,
      dataSize: JSON.stringify(webhookPayload).length,
    };

    console.log('Webhook activity logged:', activityLog);

    return new Response(
      JSON.stringify({
        success,
        message: success ? 'Webhook triggered successfully' : 'Webhook failed',
        zapierResponse: responseData,
        statusCode: response.status,
        timestamp: new Date().toISOString(),
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: success ? 200 : response.status,
      }
    );
  } catch (error) {
    console.error('Error in zapier-webhook function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        success: false,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});