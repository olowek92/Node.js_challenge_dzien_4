const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  response.end(`<h1>Hello,World from back-end!</h1>`);
});

server.listen(4000, () => {
  console.log("Hello, World from back-end!");
});
