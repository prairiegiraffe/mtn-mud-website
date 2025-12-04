// Cloudflare Pages Function - Admin Authentication
// Environment variables needed:
// - ADMIN_PASSWORD_HASH: SHA-256 hash of admin password
// - GITHUB_TOKEN: GitHub Personal Access Token
// - GITHUB_OWNER: GitHub username
// - GITHUB_REPO: Repository name

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const { password } = await request.json();

    if (!password) {
      return new Response(JSON.stringify({ error: 'Password required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Hash the provided password
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    // Compare with stored hash
    if (hash !== env.ADMIN_PASSWORD_HASH) {
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Generate a session token (valid for 24 hours)
    const sessionData = {
      exp: Date.now() + 24 * 60 * 60 * 1000,
      hash: hash.substring(0, 16), // Partial hash for verification
    };
    const sessionToken = btoa(JSON.stringify(sessionData));

    return new Response(
      JSON.stringify({
        success: true,
        token: sessionToken,
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
