import math from "./math_EsModule.mjs";
console.log(math.add(5, 5));

console.log(math.subtract(5, 5));

// destructutring way

const { add, subtract } = math;
console.log(add(5, 5));

console.log(subtract(5, 5));
