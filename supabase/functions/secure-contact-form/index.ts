import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const { name, email, phone, message }: ContactFormData = await req.json()

    // Enhanced server-side validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, and message are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format with stricter regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate field lengths
    if (name.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Name must be less than 100 characters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (email.length > 254) {
      return new Response(
        JSON.stringify({ error: 'Email must be less than 254 characters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Message must be less than 5000 characters' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Check for suspicious patterns (basic spam detection)
    const suspiciousPatterns = [
      /\b(?:cialis|viagra|pharmacy|casino|poker|loan|mortgage|insurance)\b/i,
      /\b(?:click here|buy now|limited time|act now|urgent|winner)\b/i,
      /<script|javascript:|data:|vbscript:/i,
      /\$\$\$|\!\!\!|www\./g
    ]

    const textToCheck = `${name} ${email} ${message}`
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(textToCheck))

    if (hasSuspiciousContent) {
      console.log('Suspicious content detected:', { name, email, message: message.substring(0, 100) })
      return new Response(
        JSON.stringify({ error: 'Message content appears to be spam and was rejected' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Input sanitization (basic)
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 255),
      phone: phone ? phone.trim().slice(0, 20) : null,
      message: message.trim().slice(0, 2000)
    }

    console.log('Processing contact form submission:', { email: sanitizedData.email, name: sanitizedData.name })

    // Send to external webhook if configured
    const zapierWebhook = Deno.env.get('ZAPIER_API_KEY')
    if (zapierWebhook) {
      try {
        await fetch(zapierWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...sanitizedData,
            formType: 'contact',
            timestamp: new Date().toISOString()
          })
        })
        console.log('Successfully sent to Zapier webhook')
      } catch (error) {
        console.error('Failed to send to Zapier:', error)
      }
    }

    // Store in database (if you have a contact_submissions table)
    // const { error: dbError } = await supabase
    //   .from('contact_submissions')
    //   .insert(sanitizedData)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})