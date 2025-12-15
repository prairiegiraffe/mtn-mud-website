// File upload API endpoint for R2 storage
import type { APIRoute } from 'astro';
import { getTokenFromRequest, verifyToken, validateSession, canModify } from '~/lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const env = locals.runtime?.env;
    if (!env?.DB || !env?.JWT_SECRET || !env?.STORAGE) {
      return new Response(JSON.stringify({ success: false, error: 'Server not configured' }), {
        status: 500,
        headers,
      });
    }

    // Verify auth
    const token = getTokenFromRequest(request);
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers });
    }

    const payload = await verifyToken(token, env.JWT_SECRET);
    const sessionValid = await validateSession(env.DB, payload.jti);
    if (!sessionValid) {
      return new Response(JSON.stringify({ success: false, error: 'Session expired' }), { status: 401, headers });
    }

    if (!canModify(payload)) {
      return new Response(JSON.stringify({ success: false, error: 'Permission denied' }), { status: 403, headers });
    }

    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const productId = formData.get('productId') as string | null;

    if (!file) {
      return new Response(JSON.stringify({ success: false, error: 'No file provided' }), {
        status: 400,
        headers,
      });
    }

    // Validate file type (PDF only)
    if (file.type !== 'application/pdf') {
      return new Response(JSON.stringify({ success: false, error: 'Only PDF files are allowed' }), {
        status: 400,
        headers,
      });
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return new Response(JSON.stringify({ success: false, error: 'File too large (max 10MB)' }), {
        status: 400,
        headers,
      });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `datasheets/${timestamp}-${safeName}`;

    // Upload to R2
    const arrayBuffer = await file.arrayBuffer();
    await env.STORAGE.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: 'application/pdf',
      },
      customMetadata: {
        contentDisposition: `inline; filename="${file.name}"`,
        originalFilename: file.name,
      },
    });

    // Generate public URL (assuming R2 bucket has public access or using custom domain)
    // For now, we'll store the key and create an API endpoint to serve files
    const url = `/api/files/${key}`;

    // If productId provided, update the product
    if (productId) {
      await env.DB.prepare("UPDATE products SET pdf_url = ?, updated_at = datetime('now') WHERE id = ?")
        .bind(url, productId)
        .run();
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          key,
          url,
          filename: file.name,
          size: file.size,
        },
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Upload error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Upload failed',
        debug: { message: errorMessage },
      }),
      { status: 500, headers }
    );
  }
};
