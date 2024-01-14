// class pizaShop {
//   constructor() {
//     this.orderNumber = 0;
//   }

//   order() {
//     this.orderNumber++;
//   }
//   displayOrdernumber() {
//     console.log(`current order number: ${this.orderNumber}`);
//   }
// }

// module.exports = pizaShop;

// namukk ee classine event driven architecture aakii maatttanam
//athaayath events module vechitt
//athin vendi nammal inheritance method vechitan cheyunnath ..that is in js we can inherit propery of one class to another class'

//nammak custer event emittere create cheyan pattum
const eventEmitter = require("node:events");

class pizaShop extends eventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    //event name, pinna namukk eshtalla argguement
    this.emit("order", size, topping);
  }
  displayOrdernumber() {
    console.log(`current order number: ${this.orderNumber}`);
  }
}

module.exports = pizaShop;
