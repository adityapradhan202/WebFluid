// double slash for comments
// console.log() function for logging in the console (to pring in simple terms)

console.log("Wassup!")

// We can declare variable with three methods
// var, let, and const
// We generally don't use var
// Var is only function and globally scoped, not block scoped, because of which devs faced unexpected results and debugging challenges
// let, const are block scoped

// let allows us to declare variable dynamically
// const is just like let, but it is constant, we can't change it or reinitialize it like we can change let
// We cant redeclare let and const, we can redeclare var

let a = 9;
// suppose I want to change the value of a
a = 10;

console.log(`New value of a: ${a}`)

const myName = "Aditya";
// myName = "Adi"; This will give error

// Naming convention in js
// Obviously, we can't name variables and functions with reserved keyword
// The names can start from $, _, 
// Recommended: CamelCase and pascalCase

// let and const are block scoped
console.log();
let b = 100;
{   
    const c = 4;
    let b = 10;
    console.log(b)
    console.log(c);
}

console.log(b);

// Data types - Primitive and Non Primitive
// Primitive data types:
// Number
// Boolean
// String
// null
// undefined
// BigInt (value greater than (2^53-1)bytes)
// symbol

// number - integer or float
let intNum = 7;
let fltNum = 7.2;
console.log(`intNum: ${intNum}\nfltNum: ${fltNum}`);

// boolean - true or false
let tVal = true;
let fVal = false;
console.log(`tVal: ${tVal}\nfval: ${fVal}`);

// string data type
let myStr = "js";
console.log(`myStr: ${myStr}`);

// null - represent intentional absence of value
// undefined - represents absence of value (when something is not initialized, just declared)
let nullVal = null;
let undVal;
console.log(`nullVal: ${nullVal}\nundVal: ${undVal}`);

// we can use typeof to get the type of any variable
console.log(`Type of nullVal: ${typeof(nullVal)}`);
console.log(`Type of undVal: ${typeof(undVal)}`);
// type of null is actually an object
// type of an undefined variable is undefined

let phoneNumber = 9971898555555555551109222222222n; // append with n to create bigint
console.log(`Type of phoneNumber: ${typeof(phoneNumber)}`);

// Symbol is a primitive data type that is unique and immutable
// Even if we provide same description, it will be unique
const userId1 = Symbol("user-id");
const userId2 = Symbol("user-id");
console.log(userId1);
// Will study about it later

// Operators
// Arithmetic operators:
console.log("\nOutputs of arithmetic operators:")
console.log(1+2);
console.log(3-2);
console.log(5/4);
console.log(9%2);
console.log(10*8);
console.log(3**3);

// unary arithmetic operators ++, -- (post and pre)

// Relational or comparision operators
// >, <, >=, <=, ==(loose equality)
// === (strict equality)
// == checks if the content is same(type doesn't matter)
// === checks if content and type both are same
// != (loose not equals to)
// !==  (strict not equals to)

console.log("\nOutputs of relational operators:");
let x1 = "5";
let x2 = 5;
console.log(`x1 == x2 gives ${x1 == x2}`);
console.log(`x1 === x2 gives ${x1 === x2}`);
console.log(`x1 !== x2 gives ${x1 !== x2}`);

// Assignment operators -> =, +=, -=, etc 
// Logical operators:
// AND &&
// NOT !
// OR ||

// We know how logical and or works with booleans
// But what about non booleans?
// Logical and, and logical or see things as truthsy, or falsy, end of the story
// Values that are falsy: undefined, null, 0, false, "", '', NaN


console.log("\nOutput of logical opeartors:")
console.log(0 && true);
console.log("" || true);
// Shortcircuit
console.log(2 || false || false  || true); // result should be true
// But the result will be 2, because 2 || false is 2(truthsy value), after that it wont check
// That's one of the weird things that happen in js

// Ternary oprator
// syntax: (condition) ? value if condition true : value if condition is false
let age = 19;
let approval = (age >= 18) ? "Approved" : "Not allowed!";
console.log(`Approval: ${approval}`);