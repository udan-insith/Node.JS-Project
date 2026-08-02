const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
});
