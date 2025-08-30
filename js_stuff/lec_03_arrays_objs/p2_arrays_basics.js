// Array is a sequential collection of items
// It's not necessary that these items would of the same type

// Two ways to create arrays
// 1. Using square brackets
// 2. Using Array constructor

// creating of array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// creating array using Array constructor
let brr = new Array('love', 1, 2, true);
console.log(brr);
console.log(typeof(brr));

// To access the elements we use index
let firstNum = arr[0];
console.log(`firstNum = ${firstNum}`);

// This is how array is being created
// Iterating over arrays
console.log("Elements of array:");
for(let i = 0; i < arr.length; i++){
    console.log(i);
}