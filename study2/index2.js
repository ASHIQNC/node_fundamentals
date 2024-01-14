// factorial
//5!=1*2*3*4*5

// const fact = (n) => {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// };

// const factorial = fact(5);
// console.log(factorial);

const math = require("./math");
console.log(math.add(1, 2));
console.log(math.sub(1, 3));

// destructuring

const { add, sub } = require("./math");

console.log("destructered add", add(1, 2));
console.log("destructered sub", sub(1, 3));
