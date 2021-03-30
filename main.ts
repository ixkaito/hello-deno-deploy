addEventListener('fetch', (event) => {
const response = new Response(`
<html>
<head>
  <title>Hello, world! by KITERETZ inc. from Deno Deploy</title>
</head>
<body>
  Hello, world!<br>
  by <a href="https://kiteretz.com/about/">KITERETZ inc.</a>
</body>
</html>
`, {
    headers: { 'content-type': 'text/plain' },
  });
  event.respondWith(response);
});
