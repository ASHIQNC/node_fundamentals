//events is class
const eventEmitter = require("node:events");

//so class use chyyan vendi
const emitter = new eventEmitter();

// nammal order chytha pizza namukk theranam that is enthinkilum response venam
//athin vendit aanu "On" method use aakunne
// this method accept 2 parameter that is event name "order-piza"
//second parameter is the listener:listener is a callback function which excuted when the correspondong event is excuted

// emitter.on("order-pizza", () => {
//   console.log("order recieved baking a piza");
// });

// the method accept event name as arguement
// evide nadakan pokunna event aanu nammal oru piza order cheyunnath
// emitter.emit("order-pizza");

// passing as an argument

emitter.on("order-pizza", (size, topping) => {
  console.log(`order recieved baking a ${size} piza with ${topping}`);
});

// namukk onnil kooduthal listner add cheyam
emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("serving drink");
  }
});
// note: ani namukk nammal order cheynna timil piza size and type venamenkil
//egne koduthaal namukk automatic aayitarguement pass akum
emitter.emit("order-pizza", "large", "mashroon");
