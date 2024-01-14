// const fs = require("node:fs");

// console.log("first");
// fs.readFile("./file.txt", "utf8", (err, data) => {
//   console.log("file content");
// });

// console.log("last");

//output :first
// last
// file content

//in this output we can see that readfile is asynchronous
//libuv is the file which help the nodejs to achieve this

// example 2 for libuv library
//using crypto module

const crypto = require("node:crypto");
//similar to fs libuv use some of the libuv thread pool to do the task
//pbkdf2 stands for "password based key derivation funtion2"
//this is one of the popular method to has password before storing them

// synchrounous way
// const start = Date.now();

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log("HAsh time: ", Date.now() - start);

//asynchronous way
// experiment 4
// const start = Date.now();
// const MAX_CALLS = 5;
// // nammal evide loop vechaaan check chyyunne ethra tyme run cheyyanm enn

// for (i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     //time start an end time subtract chyunne
//     console.log("HAsh time: ", Date.now() - start);
//   });
// }

//note:libuv thread pool has for thread
//HAsh time:  2953
// HAsh time:  2971
// HAsh time:  3006
// HAsh time:  3010
// 4 thread output eakathersham same aanu
// HAsh time:  2965
// HAsh time:  2997
// HAsh time:  3016
// HAsh time:  3019
// HAsh time:  4399
// 5 time llooop cheytha namukk kaana 5th one aadhyathe 4ne kaattum time edukunund

// experiment 5

//namuk thread pool size increase cheyyam
const start = Date.now();
//setting th threadpoo; size manually
process.env.UV_THREADPOOL_SIZE = 5;
const MAX_CALLS = 5;

// nammal evide loop vechaaan check chyyunne ethra tyme run cheyyanm enn

for (i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    //time start an end time subtract chyunne
    console.log("HAsh time: ", Date.now() - start);
  });
}

// note:"nammale cpu core kaattum kooduthal thread pool size koduthal time will increase for the execution of the task"
