// // require("./add");
// //another way namukk module.exports vechitt add moduline vilikkaaam

// const add = require("./add");

// let sum = add(2, 3);
// console.log("sum of the number is", sum);

// // in this way we can use this module as many time as possible
// let sum2 = add(4, 6);
// console.log("sum2", sum2);
// console.log("hello from index.js");
// require("./batman");
// require("./superman");

// module caching
// const superhero = require("./superhero");

// console.log(superhero.getName());
// // outpput batman

// superhero.setName("superman");
// console.log(superhero.getName());
// // output superman

// const superhero = require("./superhero");
// //output evide vera superman aaakum kaaranam nammal already require chythind. appo nammale result already cach chythindakum
// //appo nammal onnude require chyumpo already cache chythonnd munne ulla value  thanne edukkum namukk output batman kittunnathin pakaram
// //nammal supermane set chytha value already cache chythond aa value thanne edukkum
// console.log(superhero.getName());

// note:nammulkk seperate aayi name venamenkil that is nammal veednum require chythappo  change veranamenkil
// nammal clasinte istance export chyuunthin pakaram classing export chyya ennit ath evide instance create chythit use chya
// that is the code as follows

//go to superhero.js change the export and export complete classess

const superHero = require("./superhero");
const batman = new superHero("batman");
console.log(batman.getName());
batman.setName("bruice");
console.log(batman.getName());

const superman = new superHero("superman");
console.log(superHero.getName());
