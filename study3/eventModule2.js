const pizaShop = require("./pizzashop");
const drinkMachine = require("./drink-machine");

const PizaShop = new pizaShop();
const DrinkMachine = new drinkMachine();

PizaShop.on("order", (size, topping) => {
  console.log(`order recieved baking a ${size} piza with ${topping}`);
  DrinkMachine.serveDrink(size);
});
PizaShop.order("large", "mashroom");
PizaShop.displayOrdernumber();
