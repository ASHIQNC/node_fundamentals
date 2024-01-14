const fs = require("node:fs");
// evide readble stream creaet chythu
const readableStream = fs.createReadStream(__filename);
// evide readable stream close cheythu
readableStream.close();

// close eventine emmit chythu
//to close event we  added callback funtion
//egene aanu we queue a callback funtion in the close queue,
//that is by adding method to close event
readableStream.on("close", () => {
  console.log("this si the readable stream from close event");
});

setImmediate(() => console.log("this is form setImmediate"));
setTimeout(() => console.log("this is from setTimeout"));
Promise.resolve().then(() => console.log("this is from promise"));
process.nextTick(() => console.log("this is from process.nextTick"));

//output
// this is from process.nextTick
// this is from promise
// this is from setTimeout
// this is form setImmediate
// this si the readable stream from close event\
//note:close queue callbacks are excuted after all other queues callbacks in a given iteration of the event loop
