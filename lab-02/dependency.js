
const _ = require("lodash");

const numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);
console.log("First Element:", _.first(numbers));
console.log("Last Element:", _.last(numbers));
console.log("Reversed Array:", _.reverse([...numbers]));
