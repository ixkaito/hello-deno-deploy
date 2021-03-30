addEventListener('fetch', (event) => {
  const html = `<!DOCTYPE html><html lang="en">
    <head>
      <title>Hello, world! | KITERETZ inc.</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
      <p><a href="https://kiteretz.com/about/">KITERETZ inc.</a></p>
    </body>
  </html>`;
  
  const response = new Response(html, {
    headers: { 'content-type': 'text/html; charset=UTF-8' },
  });
  
  event.respondWith(response);
});
