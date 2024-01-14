//without worker thread or cluseter module slow aayirikum nammal home page and slow page route switch cheyumpo
//slowpage route block cheyum  home routine kaaranm nammal slowpage routin delay koduthath kond

// const http = require("node:http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home page");
//   } else if (req.url === "/slow-page") {
//     let j = 0;
//     for (let i = 0; i < 6000000000; i++) {
//       j++;
//     }
//     //stimulate the long running cpu work
//     res.writeHead(200, { "Content-Type": "text/plain" });

//     res.end(`slow page ${j}`);
//   }
// });

// server.listen(8000, () => console.log("server running in 8000"));

// addidng worker thread module

const http = require("node:http");
const { Worker } = require("node:worker_threads");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    //first we create worker function
    //now we add path to worker as arguemetn
    const worker = new Worker("./workerThread.js");

    // we are listenig the value of message from workerThread file in this file
    //we are using message event
    worker.on("message", (j) => {
      //stimulate the long running cpu work
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end(`slow page ${j}`);
    });
  }
});

server.listen(8000, () => console.log("server running in 8000"));
