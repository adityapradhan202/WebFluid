// functions are considered first class citizens, because of the following reasons

// Because functiotion can be assigned to a variable
const greet = function(){
    console.log("Hi! Good morning!");
}

greet();

// Because function can be passed as argument to another function
function greatDay(greet){
    greet();
    console.log("Have a great day!");
}

console.log();
greatDay(greet);

// Because a functon can return a function
function makeSquare(){
    return function(n){
        return n * n;
    }
}

const square = makeSquare();
let result = square(5);
console.log("result: " + result);

// Because we can create data structures of functions
const arr = [];
arr.push(function(x,y){return x * y});
arr.push(function(x,y){return x / y}); 

console.log(arr);  // observe the output - it says anonymous function
let ans = arr[0](4,5);
console.log("Product of 4 and 5: " + ans);

let divAns = arr[1](4,5);
console.log("divAns: " + divAns);


// Because we can set function as an attribute in an object data type
obj = {
    name:"Aditya",
    uni:"VITB",
    usn:"23bai11221",
    details:function() {
        // use this keyword to get name of this object
        console.log("Name: " + this.name);
        console.log("University: " + this.uni);
        console.log("University Serial Number: " + this.usn);
        // Note:
        // Traditional function and function expression have this keyword
        // Arrow functionms doesn't have this keyword
    }
}


obj.details();