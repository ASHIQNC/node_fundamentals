//experiment 1
// setTimeout(() => {
//   console.log("this is settimeout 1", 0);
// });

// setTimeout(() => {
//   console.log("this is settimeout 2", 0);
// });

// setTimeout(() => {
//   console.log("this is settimeout 3", 0);
// });

// //nammale microtask queue ethil use chyyunnunddd manasilaakan vendi
// process.nextTick(() => {
//   console.log("this is process.nextTick1");
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick2");
//   process.nextTick(() => {
//     console.log("this is inner process.nextTick");
//   });
// });

// process.nextTick(() => {
//   console.log("this is process.nextTick3");
// });

// Promise.resolve().then(() => console.log("this is promise.resolve1"));
// Promise.resolve().then(() => {
//   console.log("this is promise.resolve2");
//   process.nextTick(() => {
//     console.log("this is inner process.nextTick in the promise method");
//   });
// });
// Promise.resolve().then(() => console.log("this is promise.resolve3"));

//output

// this is process.nextTick1
// this is process.nextTick2
// this is process.nextTick3
// this is inner process.nextTick
// this is promise.resolve1
// this is promise.resolve2
// this is promise.resolve3
// this is inner process.nextTick in the promise method
// this is settimeout 1 0
// this is settimeout 2 0
// this is settimeout 3 0

//In the above experiment we can understand that
//callback in the microtask queue are executed before callbacks in the timer queue

//experiment 2

setTimeout(() => {
  console.log("this is settimeout 1", 0);
});

setTimeout(() => {
  console.log("this is settimeout 2", 0);
  process.nextTick(() => {
    console.log("this is process.nextTick inside set timeout");
  });
});

setTimeout(() => {
  console.log("this is settimeout 3", 0);
});

//nammale microtask queue ethil use chyyunnunddd manasilaakan vendi
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

//output
// this is process.nextTick1
// this is process.nextTick2
// this is process.nextTick3
// this is inner process.nextTick
// this is promise.resolve1
// this is promise.resolve2
// this is promise.resolve3
// this is inner process.nextTick in the promise method
// this is settimeout 1 0
// this is settimeout 2 0
// this is process.nextTick inside set timeout
// this is settimeout 3 0

//process.nexttick evide kandaalum athile task theernitte bakki ullaaa taskilekk pokullu
