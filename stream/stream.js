// const fs = require("node:fs");

// //here first we are creating streams
// //the arguement of create read stream is its "path",options object as second arguement
// //below we are creating readable streams to read data in chunks from file.txt
// const readableStream = fs.createReadStream("./file2.txt", {
//   encoding: "utf-8",
//   highWaterMark: 3,
// });

// //now lets create writtable streams to write data in chunks to file2.txt

// const writtableStream = fs.createWriteStream("./file3.txt");

// // //stream is an extend to event emitter class
// // //so namukk streams work aakanenkil we need to emit the even emmitter class
// // //first arguemnt "event name",then callback function is the listener which automatically recieve a chunk of data

// // readableStream.on("data", (chunk) => {
// //   console.log(chunk);
// //   writtableStream.write(chunk);
// // });

// // // output:code  evolutions  ehtaaan nammale "chunk",oru chunk enn vechaa "84" bytes aaanu
// // //evide nammale data ullath 18 charactor ullu nammale read chyunna file akath so 18 byte ullu appo complete file content print aakum
// // //ani namukk 2 bytes or threee bytes egene enthenkilum print aakanmenkil we need to mention the byte in the readable section
// // //athayath nammale option object akath { highWaterMark:2} koduthal 2 byte aayt print aakum
// // //but nammale file akth full content thanne akum indaka

// // using pipes
// //--------------

// //simple aayitt egene cheyyam nammal eventemitter use chyunnathin pakaram
// readableStream.pipe(writtableStream);

const fs = require("node:fs");
//zlib module give compression functionality
//zlib allows us to create zibbed file
//it has  build in transform stream
const zlib = require("node:zlib");

const gzib = zlib.createGzip();

const readableStream = fs.createReadStream("./file2.txt", {
  encoding: "utf-8",
  highWaterMark: 3,
});
// namukk pip kond chaining cheyyan pattum
// zlib use chythal namukk oru zib file akum kitta
//nammal .pipe(gzib) return cheyyunnath oru transform stream aanu
//athine namuk writtable stream kodukka pipe vechitt
readableStream.pipe(gzib).pipe(fs.WriteStream("./file3.txt.gz"));

//now lets create writtable streams to write data in chunks to file2.txt

const writtableStream = fs.createWriteStream("./file3.txt");

// using pipes
//--------------

//simple aayitt egene cheyyam nammal eventemitter use chyunnathin pakaram
readableStream.pipe(writtableStream);
