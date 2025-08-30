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
