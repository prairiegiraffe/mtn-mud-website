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

    // Parse multipart form data
    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const zip = formData.get('zip') as string;
    const position = formData.get('position') as string;
    const location = formData.get('location') as string;
    const startDate = formData.get('startDate') as string;
    const yearsExperience = formData.get('yearsExperience') as string;
    const previousRoles = formData.get('previousRoles') as string;
    const certifications = formData.get('certifications') as string;
    const education = formData.get('education') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const comments = formData.get('comments') as string;
    const resumeFile = formData.get('resume') as File | null;

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

    // Handle resume upload if provided
    let resumeFileKey: string | null = null;
    let resumeFileName: string | null = null;

    if (resumeFile && resumeFile.size > 0) {
      // Validate file type
      if (resumeFile.type !== 'application/pdf') {
        return new Response(JSON.stringify({ error: 'Resume must be a PDF file' }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024;
      if (resumeFile.size > maxSize) {
        return new Response(JSON.stringify({ error: 'Resume file too large (max 10MB)' }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      // Upload to R2 if storage is configured
      if (env.STORAGE) {
        const timestamp = Date.now();
        const safeName = resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        resumeFileKey = `resumes/${timestamp}-${id}-${safeName}`;
        resumeFileName = resumeFile.name;

        const arrayBuffer = await resumeFile.arrayBuffer();
        await env.STORAGE.put(resumeFileKey, arrayBuffer, {
          httpMetadata: {
            contentType: 'application/pdf',
          },
          customMetadata: {
            contentDisposition: `inline; filename="${resumeFile.name}"`,
            originalFilename: resumeFile.name,
            submissionId: id,
          },
        });
      }
    }

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
      INSERT INTO submissions (id, type, name, email, phone, job_id, job_title, message, resume_file_key, status, created_at)
      VALUES (?, 'application', ?, ?, ?, ?, ?, ?, ?, 'new', datetime('now'))
    `
    )
      .bind(id, fullName, email, phone || null, jobId, jobTitle, applicationData, resumeFileKey)
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
                resumeFileName: resumeFileName || undefined,
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
