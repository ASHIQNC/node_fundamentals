// const http = require("node:http");

// //creating server
// //req object wiill giveee us the detail about incoming req object and res object used to send back response
// const server = http.createServer((req, res) => {
//   console.log(req);
//   //set staus code
//   //second arguement is content type
//   res.writeHead(200, { "content-Type": "text/plain" });

//   // evide namukk enthaan response vendath enn kodukuka
//   //browserin nammal req chyyumpo(localhost:4000) namukk hello world browseril kaaana
//   res.end("hello world");
// });

// server.listen(4000, () => {
//   console.log("server run on port 4000");
// });

//mehtod :2
// response with json data

// const http = require("node:http");

// //creating server
// //req object wiill giveee us the detail about incoming req object and res object used to send back response
// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstname: "ashiq",
//     lastname: "rahman",
//   };
//   res.writeHead(200, { "content-Type": "application/json" });

//   //  nammalk egane direct aayit object pass chyyan pattula work aakula
//   //nakumm jsonlott convertcheyyan
//   res.end(JSON.stringify(superHero.firstname));
// });

// server.listen(4000, () => {
//   console.log("server run on port 4000");
// });

// method3
// html as response

const http = require("node:http");
const fs = require("node:fs");

//creating server
//req object wiill giveee us the detail about incoming req object and res object used to send back response
const server = http.createServer((req, res) => {
  //set staus code
  //second arguement is content type
  //   html content read cheyyanamenkil content type :text/html egene koduthaal mathy
  res.writeHead(200, { "content-Type": "text/html" });

  //   //ani namukk html akath ninn data read aakanm.readchyyan vendi we are using fs
  //   const html = fs.readFileSync("./index.html", "utf-8");
  //   res.end(html);
  // valiya html file okke verumpo slow aakum so we are using stream here
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(4000, () => {
  console.log("server run on port 4000");
});
