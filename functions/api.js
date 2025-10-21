export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;

  if (url.pathname.endsWith('/get')) {
    const data = await env.TABUNGAN_KV.get('data');
    return new Response(data || '[]', { headers: { 'Content-Type': 'application/json' } });
  }

  if (url.pathname.endsWith('/save')) {
    const body = await request.json();
    await env.TABUNGAN_KV.put('data', JSON.stringify(body));
    return new Response('OK', { status: 200 });
  }

  return new Response('Not found', { status: 404 });
}
