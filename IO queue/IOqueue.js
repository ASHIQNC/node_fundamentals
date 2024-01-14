//nammale evide "fs module vechitaan " I/O queue cheyunnath
//most of the async method from the build in module , queue the callback funtion in the i/O queue

// const fs = require("node:fs");
// fs.readFile(__filename, () => {
//   console.log("this is the fs file");
// });

// process.nextTick(() => console.log("this is the nextTick file"));
// Promise.resolve().then(() => {
//   console.log("this is the promisse file");
// });

//output :
// this is the nextTick file
// this is the promisse file
// this is the fs file

//experimetn number 2

// const fs = require("node:fs");

// setTimeout(() => console.log("this is the settimeout function"), 0);

// fs.readFile(__filename, () => {
//   console.log("this is readfile one");
// });

//output
// this is the settimeout function
// this is the fs file
//when running setTimeOut with delay of 0 ms and an i/o async method(fs module) the order of execution can never be guarenteed
//kaaranm 0 ms koduthalum ath automatical aayit 1 ms edukkum eth nammale cpu anusarich change aakum.

// experiment 3
//timer and i/o queue combined

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("readfile 1");
// });

// process.nextTick(() => console.log("this is the nexttick 1"));
// Promise.resolve().then(() => {
//   console.log("this is the promise method 1");
// });
// setTimeout(() => console.log("this is the setTimeOut1"), 0);

//output
// this is the nexttick 1
// this is the promise method 1
// this is the setTimeOut1
// readfile 1

// experimetn 4
//i/o polling

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("readfile 1");
// });

// process.nextTick(() => console.log("this is the nexttick 1"));
// Promise.resolve().then(() => {
//   console.log("this is the promise method 1");
// });
// setTimeout(() => console.log("this is the setTimeOut1"), 0);

// // eth check queue callbackil aanu poka
// setImmediate(() => {
//   console.log("this is setImmediate funtion");
// });

//output
// this is the nexttick 1
// this is the promise method 1
// this is the setTimeOut1
// this is setImmediate funtion
// readfile 1
//here the output is not what we expected
//that is "setImmediate" is logged before fs.readFile.that is because,
//nammale control i/o ethumpo nnammale  fs.readFile avde venam but evide event loop has poll to check whether,
//i/o operation are complete and queue up only the completed operation callback,which means when the control enters the i/o queue for the first time,
//it is still empty, the control will proceed to the polling part,were it has asked the read file whther it is completed,
//readfile says yes and athin shehsham "fs.readfile" ne i/o quque yill add aakum,
//but add aakunne munnne thannne excution is passed the i/o queue and callback moved to checkqueue
//appo check queue akath callback ullath kond ath excute aakum so ath kond aanu setImmediate adhyam verunnath

//experiment 5
//checkqueue:more examples

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("readfile 1");
//   setImmediate(() => {
//     console.log("this is setImmediate  funtion inside the readfile");
//   });
// });

// process.nextTick(() => console.log("this is the nexttick 1"));
// Promise.resolve().then(() => {
//   console.log("this is the promise method 1");
// });
// setTimeout(() => console.log("this is the setTimeOut1"), 0);

//output
// this is the nexttick 1
// this is the promise method 1
// this is the setTimeOut1
// readfile 1
// this is setImmediate  funtion inside the readfile

//note: in the above experiment the checkqueue(setTimeout()) are excuted after microtask queues callbacks,Timer queue callbacks and i/o queue callbacks are excuted

// experimetn 6

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("readfile 1");
//   setImmediate(() => {
//     console.log("this is setImmediate  funtion inside the readfile");
//   });
//   process.nextTick(() => console.log("this is the inner  nexttick 1"));
//   Promise.resolve().then(() => {
//     console.log("this is the inner promise method 1");
//   });
// });

// process.nextTick(() => console.log("this is the  nexttick 1"));
// Promise.resolve().then(() => {
//   console.log("this is the promise method 1");
// });
// setTimeout(() => console.log("this is the setTimeOut1"), 0);

// output
// this is the  nexttick 1
// this is the promise method 1
// this is the setTimeOut1
// readfile 1
// this is the inner  nexttick 1
// this is the inner promise method 1
// this is setImmediate  funtion inside the readfile

// experimetn 7

// setImmediate(() => console.log("this is the setImmdiate 1"));
// setImmediate(() => {
//   console.log("setImmediate 2");
//   process.nextTick(() => console.log("this is the  nexttick 1"));
//   Promise.resolve().then(() => {
//     console.log("this is the promise method 1");
//   });
// });
// setImmediate(() => {
//   console.log("this is the setImmediate 3");
// });

//output
//this is the setImmdiate 1
// setImmediate 2
// this is the  nexttick 1
// this is the promise method 1
// this is the setImmediate 3

//in this experiment we can confirm that microtask queue are excuted in between check queue callbacks

//experiment 8
// setTimeout(() => console.log("this si the setTimeout 1"), 0);

// setImmediate(() => {
//   console.log("this is thesetImmediate");
// });
//output
// this si the setTimeout 1
// this is thesetImmediate

//note:as we dicussed earlier In this experiment when running setTimeout  with the delay 0ms and setImmediate method ,the order of the excution can never be gguarenteed

// experiment 9
//close queue
