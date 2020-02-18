const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Message from back-end!");

  const userAgent = req.headers["user-agent"];

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.end(`<h1>${userAgent}</h1>`);
});

server.listen(3300, () => {
  console.log("Serwer uruchomiony na porcie 3300");
});
