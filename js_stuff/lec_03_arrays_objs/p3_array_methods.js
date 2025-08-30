// There are so many built in methods in array
// methods are:
// push -> insert at rightmost side
// pop -> remove last item
// shift -> remove at leftmost side
// unshift -> insert at leftmost side
// slice
// spice -> insert, replace, remove at any place (Important and very useful)
// map
// filter
// reduce
// indexOf, find

let arr = ["Butter Chicken", 0.5, "half"];
arr.push("spicy");
arr.pop() // pops and returns as well
arr.push("extra spicy");
console.log(arr);

console.log();
arr.shift();
arr.unshift("Chicken Afghani");
console.log(arr);

// slice means takes a out a part out of our array
// shallow copy happens here
let myArr = [5, 55, 6, 7, 90];
let sliceArr = myArr.slice(0,2); // returns a new array(that array is a copy of segment of myArr)
sliceArr[0] = 10; // so this wont change the original one
console.log(sliceArr);

// use of splice method - replace, remove, insert at any point
console.log();
let pLanguages = ["c", "cpp", "java", "python", "javascript", "kotlin"];
// It says from index 0, remove 2 elements, and insert "Swift" and "Flutter"
pLanguages.splice(0,2,"Swift","Flutter");
console.log(pLanguages);

// Removing Swift to add react
pLanguages.splice(0, 1, "React");
console.log(pLanguages);

// Suppose we want to just insert at the start
pLanguages.splice(0,0,"Swift");
console.log(pLanguages);

// Suppose I want to just delete one element
pLanguages.splice(2,1); // deletes only one from 2nd index
console.log(pLanguages);