// Public Application Form API (Careers)
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
    const {
      fullName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      position,
      location,
      startDate,
      yearsExperience,
      previousRoles,
      certifications,
      education,
      coverLetter,
      comments,
    } = formData;

    // Validate required fields
    if (!fullName || !email || !position || !location) {
      return new Response(JSON.stringify({ error: 'Name, email, position, and location are required' }), {
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

    // Look up job title if position is a UUID (not "general-application")
    let jobId: string | null = null;
    let jobTitle: string | null = null;

    if (position && position !== 'general-application') {
      const job = await env.DB.prepare('SELECT id, title FROM jobs WHERE id = ?')
        .bind(position)
        .first<{ id: string; title: string }>();
      if (job) {
        jobId = job.id;
        jobTitle = job.title;
      } else {
        // Position might be a title string
        jobTitle = position;
      }
    } else {
      jobTitle = 'General Application';
    }

    // Store extended application data as JSON
    const applicationData = JSON.stringify({
      address,
      city,
      state,
      zip,
      preferredLocation: location,
      startDate,
      yearsExperience,
      previousRoles,
      certifications,
      education,
      coverLetter,
      comments,
    });

    // Insert submission
    await env.DB.prepare(
      `
      INSERT INTO submissions (id, type, name, email, phone, job_id, job_title, message, status, created_at)
      VALUES (?, 'application', ?, ?, ?, ?, ?, ?, 'new', datetime('now'))
    `
    )
      .bind(id, fullName, email, phone || null, jobId, jobTitle, applicationData)
      .run();

    // Send email notifications (non-blocking)
    if (env.AWS_ACCESS_KEY_ID && env.AWS_SECRET_ACCESS_KEY && env.AWS_SES_REGION && env.SES_FROM_EMAIL) {
      try {
        const recipients = await getNotificationRecipients(env.DB, 'application');

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
              subject: `New Job Application: ${fullName} - ${jobTitle}`,
              type: 'application',
              submission: {
                name: fullName,
                email,
                phone,
                job_title: jobTitle || undefined,
              },
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
        message: "Thank you for your application! We've received your submission and will review it carefully.",
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error('Application form error:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit application' }), {
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
