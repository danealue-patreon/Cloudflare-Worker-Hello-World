// hello-world.js (Cloudflare Worker)

addEventListener('fetch', event => {
  event.respondWith(
    new Response('Hello, World!', {
      headers: { 'Content-Type': 'text/plain' },
    })
  );
});
