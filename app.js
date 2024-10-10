const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET" && req.url === "/practice") {
    res.end("Practice is done!");
  } else if (req.method === "GET" && req.url === "/") {
    res.end("Welcome to Re:Coded's Backend Bootcamp!");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
