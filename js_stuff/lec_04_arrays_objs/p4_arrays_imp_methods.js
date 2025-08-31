// Map function
// Map function applies a function to each and every element of an array and returns a new array
// Function can be a normal function, or a short arrow function

let strings = ["happy$", "$sad", "ang$ry"];
let cleanStrings = strings.map(
    // using arrow function inside the map
    (str) => { 
        return str.replace("$", "");
    }
);

console.log(cleanStrings);

// using a normal function using map
function makeUpper(str){
    return str.toUpperCase();
}

let uppStrings = cleanStrings.map(makeUpper); // just mention the function name
console.log(`\n${uppStrings}`);

// Applying filter
// Filter filters out the array based on a condition
let scores = [22, 34, 55, 66, 79, 80];
let evenScores = scores.filter(
    (num) => {
        if(num % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }
);

console.log("evenScores:");
console.log(evenScores);

// We can write this in shorter way
// just write return (condition)
let oddScores = scores.filter((num) => {return (num % 2 !== 0)});
console.log("oddScores:");
console.log(oddScores);

// Exercise - Filter out just string dtypes from an array having mix dtypes
let mixArr = ["ABC", "Mango", "JLPT", 5, 6, "Nihon"];
let justStr = mixArr.filter(
    (inp) => {
        if(typeof(inp) === 'string'){
            return true;
        }
        else{
            return false;
        }
    }
);

console.log("justStr:");
console.log(justStr);

// Reduce method in js
// We use it rarely, but still
let fNumbers = [4.5, 44.3, 1.13, 0.98, 1.35];
let ans = fNumbers.reduce(
    (acc, curr) => {
        return acc + curr;
    }
);

// here if we dont set anything accumulator becomes first element
// current becomes second element
// according to our code acc + curr will be retruned and stored in the acc
// after that curr will move to the third element and so on

console.log(ans);


// Method to sort array
fNumbers.sort();
console.log("Sorted fNumbers:", fNumbers);

let descNumbers = fNumbers.sort().reverse();
console.log("In descending order:", descNumbers);

// To get the index of a value we use indexOf method
let sampleArr = [4, 5, 6];
console.log("Index of 6:", sampleArr.indexOf(6));

// Find method in array
let res = sampleArr.find(
    (num) => {
        return num % 5 === 0
    }
);
console.log(res);