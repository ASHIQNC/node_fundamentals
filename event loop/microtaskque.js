//experiment 1
//in  nodejs all written synchronous javascript code takes priority over async code that the runtime would like to evantually excute
//evide first asynchrounous code print aakum
//that is 2 console.at this asynchrounous code event loopil push akum

//ath kayijitt event loopil ulla nexttick code print akum
//first nammale process.nexttick ella code aanu work cheyya

// console.log("console1");

// process.nextTick(() => {
//   console.log("process nexttick 1");
// });
// console.log("console2");

//output
// console1
// console2
// process nexttick 1

// experimetn 2
//microtask que akath ulla "process.nextTick" and "promise method"

// Promise.resolve().then(() => console.log("this is promis1"));
// process.nextTick(() => console.log("this is process.nexttick 1"));
// output:
// this is process.nexttick 1
// this is promis1

//microtak
//---------
//all the callback in the "nextTick queue" are excuted before callbacks in promise queue
//nextTick queue get priority amoung everything that is the resson why this codde is excuted

//experimetn 2.1

process.nextTick(() => {
  console.log("this is process.nextTick1");
});
process.nextTick(() => {
  console.log("this is process.nextTick2");
  process.nextTick(() => {
    console.log("this is inner process.nextTick");
  });
});

process.nextTick(() => {
  console.log("this is process.nextTick3");
});

Promise.resolve().then(() => console.log("this is promise.resolve1"));
Promise.resolve().then(() => {
  console.log("this is promise.resolve2");
  process.nextTick(() => {
    console.log("this is inner process.nextTick in the promise method");
  });
});
Promise.resolve().then(() => console.log("this is promise.resolve3"));

//output:
// this is process.nextTick1
// this is process.nextTick2
// this is process.nextTick3
// this is inner process.nextTick
// this is promise.resolve1
// this is promise.resolve2
// this is promise.resolve3
// this is inner process.nextTick in the promise method
