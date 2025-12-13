// AWS SES Email sending for form notifications

interface SESConfig {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
}

interface NotificationParams {
  from: string;
  to: string[];
  subject: string;
  type: 'contact' | 'application';
  submission: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message?: string;
    job_title?: string;
    resumeFileName?: string;
  };
}

/**
 * Send notification email for a new submission
 */
export async function sendSubmissionNotification(
  config: SESConfig,
  params: NotificationParams
): Promise<{ messageId: string } | null> {
  if (!config.accessKeyId || !config.secretAccessKey) {
    console.log('Email not configured, skipping notification');
    return null;
  }

  if (params.to.length === 0) {
    console.log('No recipients for notification');
    return null;
  }

  const html = buildNotificationEmail(params);
  const text = buildNotificationText(params);

  return sendEmail(config, {
    from: params.from,
    to: params.to,
    subject: params.subject,
    html,
    text,
  });
}

/**
 * Build HTML email for submission notification
 */
function buildNotificationEmail(params: NotificationParams): string {
  const { type, submission } = params;
  const isApplication = type === 'application';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a2e; color: #ff6600; padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
    .field-value { margin-top: 4px; }
    .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; }
    .badge-contact { background: #10b981; color: white; }
    .badge-application { background: #3b82f6; color: white; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>MTN MUD - New ${isApplication ? 'Job Application' : 'Contact Form'}</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Type</div>
        <div class="field-value">
          <span class="badge ${isApplication ? 'badge-application' : 'badge-contact'}">
            ${isApplication ? 'Job Application' : 'Contact Form'}
          </span>
        </div>
      </div>

      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${escapeHtml(submission.name)}</div>
      </div>

      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a></div>
      </div>

      ${
        submission.phone
          ? `
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${escapeHtml(submission.phone)}">${escapeHtml(submission.phone)}</a></div>
      </div>
      `
          : ''
      }

      ${
        submission.company
          ? `
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${escapeHtml(submission.company)}</div>
      </div>
      `
          : ''
      }

      ${
        isApplication && submission.job_title
          ? `
      <div class="field">
        <div class="field-label">Position</div>
        <div class="field-value">${escapeHtml(submission.job_title)}</div>
      </div>
      `
          : ''
      }

      ${
        submission.message
          ? `
      <div class="field">
        <div class="field-label">Message</div>
        <div class="field-value">${escapeHtml(submission.message).replace(/\n/g, '<br>')}</div>
      </div>
      `
          : ''
      }

      ${
        submission.resumeFileName
          ? `
      <div class="field">
        <div class="field-label">Resume</div>
        <div class="field-value">${escapeHtml(submission.resumeFileName)} (view in admin dashboard)</div>
      </div>
      `
          : ''
      }
    </div>
    <div class="footer">
      <p>View this submission in the <a href="https://mtnmud.com/admin/submissions">Admin Dashboard</a></p>
      <p>Submitted on ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
`;
}

/**
 * Build plain text email for submission notification
 */
function buildNotificationText(params: NotificationParams): string {
  const { type, submission } = params;
  const isApplication = type === 'application';
  const lines: string[] = [];

  lines.push(`MTN MUD - New ${isApplication ? 'Job Application' : 'Contact Form'}`);
  lines.push('');
  lines.push(`Name: ${submission.name}`);
  lines.push(`Email: ${submission.email}`);

  if (submission.phone) lines.push(`Phone: ${submission.phone}`);
  if (submission.company) lines.push(`Company: ${submission.company}`);
  if (isApplication && submission.job_title) lines.push(`Position: ${submission.job_title}`);

  if (submission.message) {
    lines.push('');
    lines.push('Message:');
    lines.push(submission.message);
  }

  if (submission.resumeFileName) {
    lines.push('');
    lines.push(`Resume: ${submission.resumeFileName} (view in admin dashboard)`);
  }

  lines.push('');
  lines.push(`Submitted: ${new Date().toLocaleString()}`);

  return lines.join('\n');
}

/**
 * Get users who should receive notification for a form type
 * Using 'unknown' type for db to avoid Cloudflare runtime type mismatches
 */
export async function getNotificationRecipients(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any,
  formType: 'contact' | 'application'
): Promise<string[]> {
  const column = formType === 'contact' ? 'notify_contact' : 'notify_applications';

  const result = await db.prepare(`SELECT email FROM admin_users WHERE ${column} = 1`).bind().all();

  return ((result.results || []) as { email: string }[]).map((r) => r.email);
}

/**
 * Send email via AWS SES
 */
async function sendEmail(
  config: SESConfig,
  params: { from: string; to: string[]; subject: string; html: string; text?: string }
): Promise<{ messageId: string }> {
  const { accessKeyId, secretAccessKey, region } = config;
  const { from, to, subject, html, text } = params;

  const endpoint = `https://email.${region}.amazonaws.com/`;
  const method = 'POST';

  // Build the request body
  const body = new URLSearchParams();
  body.append('Action', 'SendEmail');
  body.append('Source', from);
  body.append('Message.Subject.Data', subject);
  body.append('Message.Body.Html.Data', html);
  if (text) {
    body.append('Message.Body.Text.Data', text);
  }

  to.forEach((email, index) => {
    body.append(`Destination.ToAddresses.member.${index + 1}`, email);
  });

  body.append('Version', '2010-12-01');

  // Sign the request with AWS Signature v4
  const date = new Date();
  const amzDate = date.toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);

  const canonicalUri = '/';
  const canonicalQuerystring = '';
  const contentType = 'application/x-www-form-urlencoded';
  const bodyString = body.toString();

  const payloadHash = await sha256(bodyString);

  const canonicalHeaders = `content-type:${contentType}\nhost:email.${region}.amazonaws.com\nx-amz-date:${amzDate}\n`;
  const signedHeaders = 'content-type;host;x-amz-date';

  const canonicalRequest = `${method}\n${canonicalUri}\n${canonicalQuerystring}\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;

  const algorithm = 'AWS4-HMAC-SHA256';
  const credentialScope = `${dateStamp}/${region}/ses/aws4_request`;
  const stringToSign = `${algorithm}\n${amzDate}\n${credentialScope}\n${await sha256(canonicalRequest)}`;

  const signingKey = await getSignatureKey(secretAccessKey, dateStamp, region, 'ses');
  const signature = await hmacHex(signingKey, stringToSign);

  const authorizationHeader = `${algorithm} Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const response = await fetch(endpoint, {
    method,
    headers: {
      'Content-Type': contentType,
      'X-Amz-Date': amzDate,
      Authorization: authorizationHeader,
    },
    body: bodyString,
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`SES Error: ${responseText}`);
  }

  // Parse message ID from response
  const messageIdMatch = responseText.match(/<MessageId>([^<]+)<\/MessageId>/);
  const messageId = messageIdMatch ? messageIdMatch[1] : 'unknown';

  return { messageId };
}

// Helper functions for AWS Signature v4
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function hmac(key: ArrayBuffer | Uint8Array, message: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
}

async function hmacHex(key: ArrayBuffer | Uint8Array, message: string): Promise<string> {
  const result = await hmac(key, message);
  return Array.from(new Uint8Array(result))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function getSignatureKey(
  secretKey: string,
  dateStamp: string,
  region: string,
  service: string
): Promise<ArrayBuffer> {
  const kDate = await hmac(new TextEncoder().encode('AWS4' + secretKey), dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, service);
  return hmac(kService, 'aws4_request');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
