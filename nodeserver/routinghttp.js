const http = require("node:http");
const fs = require("node:fs");

// nammale html page dynamic content aanenkil nammal string replacement vechittanu cheyyya that is
const server = http.createServer((req, res) => {
  //req.url:will give the query string that is the url path
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("about page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "ashiq",
        lastName: "rahman",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("server run on port 4000");
});
