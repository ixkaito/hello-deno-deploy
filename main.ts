addEventListener('fetch', (event) => {
  const html: string = `<html>
    <head>
      <title>Hello, world! by KITERETZ inc. from Deno Deploy</title>
    </head>
    <body>
      <h1>Hello, world!</h1>
      <p>by <a href="https://kiteretz.com/about/">KITERETZ inc.</a></p>
    </body>
  </html>`;
  
  const response = new Response(html, {
    headers: { 'content-type': 'text/html; charset=UTF-8' },
  });
  
  event.respondWith(response);
});
