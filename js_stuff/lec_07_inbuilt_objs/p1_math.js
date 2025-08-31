// In js we have inbuilt math object which has so many ibuilt math functions
let randNum = Math.random();
let logRandNum = Math.log2(randNum);
console.log("randNum: " + randNum + " logRandNum: " + logRandNum);

// We also have min, max, sqrt
const arr = [45, 6, 7, 89];
let maxArr = Math.max(...arr);
// ... is spread operator, spreads the array into individual elements
// min and max both expect individual elements

console.log(...arr);
console.log(maxArr)
console.log(Math.sqrt(maxArr));

// We have floor and ceil method as well