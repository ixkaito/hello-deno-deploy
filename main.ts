addEventListener('fetch', (event) => {
  const html = `<html>
    <head>
      <title>Hello, world! by KITERETZ inc. from Deno Deploy</title>
    </head>
    <body>
      Hello, world!<br>
      by <a href="https://kiteretz.com/about/">KITERETZ inc.</a>
    </body>
  </html>`;
  
  const response = new Response(html, {
    headers: { 'content-type': 'text/html; charset=UTF-8' },
  });
  
  event.respondWith(response);
});
