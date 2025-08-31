// Hoisting means -> Putting the declaration to the top of the current scope
// Hoisting happens only with normal function definitions and var keywrods
// That we means we can use them even if these are declared later

sayHello();
console.log(integer); // gives undefined because only declaration is passd to the top
// But for function the whole logic is a declaration
function sayHello(){
    console.log("Hello!");
}

var integer = 3;

// Dont use var - not recommended
// No hoisted stuff - function expression, arrow function, let and const keyword

// Hosting is not possible even in the classes


class SampleClass{
}

const newObj = new SampleClass(); // this wont give  error because class is already defined, otherwise it would have thrown error