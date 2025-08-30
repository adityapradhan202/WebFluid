// strings in js
// just like other languaes, strings are immutable here

const myStr = "Aditya";
// length of a string can be checked using .length method
console.log(myStr.length);
// in python we use fstring
// here we use string templating

console.log(`My name is ${myStr}`);

// string can be created as primitives
// or  as objects using the String constructor - read mdn docs

// String concatenation
const mySurname = "Pradhan";
const fullName = myStr + " " + mySurname;
console.log(`Fullname: ${fullName}`);

// Character access in strings (Two methods)
// First method - treat it like arrays
console.log(mySurname[0]); // Gives P
// The second way is to use charAt() method
const charAtOne = myStr.charAt(1);
console.log(charAtOne);

// Gives true of myStr comes alphabetically first
if(myStr < mySurname){
    console.log(true);
}

let fruit = "apple";
fruit[0] = "p"; // that won't change the string
console.log(fruit);

console.log();
// Iterating over the string
for(let i = 0; i < fruit.length; i++){
    console.log(fruit.charAt(i));
}