const http = require("node:http");

//ee code run cheyyunnath nalla slow aakum nammale egane koduthal

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 60000; i++) {}
    //stimulate the long running cpu work
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("slow page");
  }
});

server.listen(8000, () => console.log("server running in 8000"));

//slitly modified using cluster module
//without cluster module ulla code aanu eth .nammal slowpage route and home page route path change cheyth kalicha we can,
//clearly see that the both page is slow even though nammal home page loade cheyyan delay onnum koduthillenkilum
//that is slow-page is basiclaly blockig the home page
//we can over come using the cluster module
//ethin kaaranm single threaded aayond aaanu
