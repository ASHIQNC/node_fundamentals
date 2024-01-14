const http = require("node:http");

const server = http.createServer((req, res) => {
  //set staus code
  res.writeHead(200);

  //   evide namukk entheen response vendath enn
  res.end("hello world");
});
exports.server = server;
