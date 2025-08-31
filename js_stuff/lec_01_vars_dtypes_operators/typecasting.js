// Typecasting in js
// There are two types of typecasting in js
// Automatic by js(Implicit)
// The one we do intentionaly (Explicit)

// Implicit type casting
let a = 8;
let b = a + "abc";
console.log(b, typeof(b));

// Explicit type
let myNumStr = "7.8"; // contains valid number
let num = Number(myNumStr);
console.log(num, typeof(num));

// We have parseInt, and parseFloat
let fNum = parseInt(num);
console.log(fNum, typeof(fNum));

// We have String class to convert numbers into String
let sString = String(fNum);
console.log(sString, typeof(sString));