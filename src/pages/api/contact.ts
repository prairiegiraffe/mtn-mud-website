// Public Contact Form API
import type { APIRoute } from 'astro';
import { sendSubmissionNotification, getNotificationRecipients } from '~/lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const env = locals.runtime?.env;

    if (!env?.DB) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const formData = await request.json();
    const { name, email, phone, company, message, website } = formData;
    const turnstileToken = formData['cf-turnstile-response'];

    // Honeypot check - if filled, it's a bot
    if (website) {
      // Silently succeed to not tip off bots
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Thank you for your message. We will be in touch soon!',
        }),
        { status: 200, headers: corsHeaders }
      );
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: 'Security verification required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const turnstileSecret = env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      });

      const turnstileResult = (await turnstileResponse.json()) as { success: boolean };
      if (!turnstileResult.success) {
        return new Response(JSON.stringify({ error: 'Security verification failed. Please try again.' }), {
          status: 400,
          headers: corsHeaders,
        });
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Generate ID
    const id = crypto.randomUUID();

    // Insert submission
    await env.DB.prepare(
      `
      INSERT INTO submissions (id, type, name, email, phone, company, message, status, created_at)
      VALUES (?, 'contact', ?, ?, ?, ?, ?, 'new', datetime('now'))
    `
    )
      .bind(id, name, email, phone || null, company || null, message)
      .run();

    // Send email notifications (non-blocking)
    if (env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && env.AWS_SES_REGION && env.SES_FROM_EMAIL) {
      try {
        const recipients = await getNotificationRecipients(env.DB, 'contact');

        if (recipients.length > 0) {
          await sendSubmissionNotification(
            {
              accessKeyId: env.AWS_ACCESS_KEY_ID,
              secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
              region: env.AWS_SES_REGION,
            },
            {
              from: env.SES_FROM_EMAIL,
              to: recipients,
              subject: `New Contact Form: ${name}`,
              type: 'contact',
              submission: { name, email, phone, company, message },
            }
          );
        }
      } catch (emailError) {
        // Log but don't fail the request
        console.error('Email notification failed:', emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will be in touch soon!',
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};

// Handle CORS preflight
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
