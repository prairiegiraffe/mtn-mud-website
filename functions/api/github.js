// Cloudflare Pages Function - GitHub API Proxy
// Securely proxies requests to GitHub API without exposing token to client

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  try {
    // Verify session token
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    const sessionToken = authHeader.substring(7);
    try {
      const sessionData = JSON.parse(atob(sessionToken));
      if (sessionData.exp < Date.now()) {
        return new Response(JSON.stringify({ error: 'Session expired' }), {
          status: 401,
          headers: corsHeaders,
        });
      }
      // Verify partial hash matches
      const expectedPartial = env.ADMIN_PASSWORD_HASH.substring(0, 16);
      if (sessionData.hash !== expectedPartial) {
        return new Response(JSON.stringify({ error: 'Invalid session' }), {
          status: 401,
          headers: corsHeaders,
        });
      }
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Parse request
    const { action, path, content, sha, message } = await request.json();

    const owner = env.GITHUB_OWNER;
    const repo = env.GITHUB_REPO;
    const token = env.GITHUB_TOKEN;

    if (!owner || !repo || !token) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const baseUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

    // Handle different actions
    switch (action) {
      case 'list': {
        const response = await fetch(`${baseUrl}/${path}`, {
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'MTN-Mud-Admin',
          },
        });
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: corsHeaders,
        });
      }

      case 'get': {
        const response = await fetch(`${baseUrl}/${path}`, {
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'MTN-Mud-Admin',
          },
        });
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: corsHeaders,
        });
      }

      case 'save': {
        const body = {
          message: message || 'Update via admin',
          content: btoa(content),
          branch: 'main',
        };
        if (sha) {
          body.sha = sha;
        }

        const response = await fetch(`${baseUrl}/${path}`, {
          method: 'PUT',
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
            'User-Agent': 'MTN-Mud-Admin',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: corsHeaders,
        });
      }

      case 'delete': {
        const response = await fetch(`${baseUrl}/${path}`, {
          method: 'DELETE',
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
            'User-Agent': 'MTN-Mud-Admin',
          },
          body: JSON.stringify({
            message: message || 'Delete via admin',
            sha,
            branch: 'main',
          }),
        });

        if (response.status === 200 || response.status === 204) {
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: corsHeaders,
          });
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: corsHeaders,
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Unknown action' }), {
          status: 400,
          headers: corsHeaders,
        });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error: ' + err.message }), {
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
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
