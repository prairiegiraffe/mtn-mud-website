// Public Job Application Form API
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

    // Handle multipart form data for file uploads
    const contentType = request.headers.get('content-type') || '';
    let formData: {
      name: string;
      email: string;
      phone?: string;
      job_id?: string;
      job_title?: string;
      message?: string;
      resume?: File;
    };

    if (contentType.includes('multipart/form-data')) {
      const data = await request.formData();
      formData = {
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string | undefined,
        job_id: data.get('job_id') as string | undefined,
        job_title: data.get('job_title') as string | undefined,
        message: data.get('message') as string | undefined,
        resume: data.get('resume') as File | undefined,
      };
    } else {
      formData = await request.json();
    }

    const { name, email, phone, job_id, job_title, message, resume } = formData;

    // Validate required fields
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
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

    // Handle resume upload to R2
    let resumeFileKey: string | null = null;
    let resumeFileName: string | null = null;

    if (resume && env.STORAGE) {
      try {
        // Validate file type
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ];

        if (!allowedTypes.includes(resume.type)) {
          return new Response(JSON.stringify({ error: 'Resume must be PDF or Word document' }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        // Validate file size (max 10MB)
        if (resume.size > 10 * 1024 * 1024) {
          return new Response(JSON.stringify({ error: 'Resume must be less than 10MB' }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        // Generate unique key
        const ext = resume.name.split('.').pop() || 'pdf';
        resumeFileKey = `resumes/${Date.now()}-${crypto.randomUUID()}.${ext}`;
        resumeFileName = resume.name;

        // Upload to R2
        const arrayBuffer = await resume.arrayBuffer();
        await env.STORAGE.put(resumeFileKey, arrayBuffer, {
          httpMetadata: {
            contentType: resume.type,
          },
          customMetadata: {
            originalName: resume.name,
          },
        });
      } catch (uploadError) {
        console.error('Resume upload failed:', uploadError);
        return new Response(JSON.stringify({ error: 'Failed to upload resume' }), {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    // Generate ID
    const id = crypto.randomUUID();

    // Insert submission
    await env.DB.prepare(
      `
      INSERT INTO submissions (id, type, name, email, phone, job_id, job_title, message, resume_file_key, resume_file_name, status, created_at)
      VALUES (?, 'application', ?, ?, ?, ?, ?, ?, ?, ?, 'new', datetime('now'))
    `
    )
      .bind(
        id,
        name,
        email,
        phone || null,
        job_id || null,
        job_title || null,
        message || null,
        resumeFileKey,
        resumeFileName
      )
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
              subject: `New Job Application: ${name} - ${job_title || 'General'}`,
              type: 'application',
              submission: {
                name,
                email,
                phone: phone || undefined,
                job_title: job_title || undefined,
                message: message || undefined,
                resumeFileName: resumeFileName || undefined,
              },
            }
          );
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your application. We will review it and be in touch soon!',
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
