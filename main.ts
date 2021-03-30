addEventListener('fetch', (event) => {
const response = new Response(`
  Hello, world!<br>
  by <a href="https://kiteretz.com/about/">KITERETZ inc.</a>
`, {
    headers: { 'content-type': 'text/plain' },
  });
  event.respondWith(response);
});
