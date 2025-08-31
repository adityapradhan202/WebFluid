// Object are dynamic in nature
// This means we can change the object at the run time

obj = {
    name:"brewdies",
    members:2500,
    serverType:"friends and chill"
}

// Suppose at the run time I add a new key value pair
obj["nBoosts"] = 6;

console.log(obj);

// Object cloning:
// It's a very famous interview question, to clone a object
// There are three ways to do that:
// 1. Using iteration
// 2. Using spread operation
// 3. Using Object.assign method

// 1. Using iteration
source = {
    accountNum:4556659,
    accountBal:1135,
    accountHolder:"Shaq O Neal",
    holderEthnicity:"American"
}

destination = {} // empty object
// Use a for in loop to copy
for(key in source){
    destination[key] = source[key];
}
// Now this is not shallow copy
// It's actual cloning
// If we change something in destination, source will be same as before
// They are not pointing to same object like it happens in shallow copying

destination["holderEthnicity"] = "British";

console.log("Source and destination respectively:");
console.log(source);
console.log(destination);


// 2. Using spread operator
destination2 = {...source}
console.log("Source and destination 2 respectively:");
console.log(source);
console.log(destination2);

// 3. Using  Object.assign method
destination3 = Object.assign({}, source); // we are assigning to {} empty object
console.log("destination 3:");
console.log(destination3);

// Using this method we can assign multiple sources to one destination
obj1 = {
    "a":4,
    "b":67
}

obj2 = {
    "c":8,
    "a":9 // dest will be updated with this new value
}

dest = Object.assign({}, obj1, obj2);
console.log("Object named dest:");
console.log(dest);

// Important
// Similarly array can be cloned using the spread operator
let arr = [4, 5 , 6];
let arr2 = [...arr];
console.log(arr === arr2); // it will give false, cuz in memory both are not poiting to the same obj