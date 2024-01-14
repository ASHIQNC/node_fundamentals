const http = require("node:http");
const fs = require("node:fs");

// nammale html page dynamic content aanenkil nammal string replacement vechittanu cheyyya that is
const server = http.createServer((req, res) => {
  let name = "ashiq";
  res.writeHead(200, { "content-Type": "text/html" });
  let html = fs.readFileSync("./index.html", "utf8");
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(4000, () => {
  console.log("server run on port 4000");
});
