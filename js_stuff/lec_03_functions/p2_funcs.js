// Some other methods to define functions
// We can define function using function expression:

const squareTwo = function(a, b){
    return a * b;
}
// call it
let res = squareTwo(5, 5);
console.log(`res: ${res}`);

// but what is the benifit of using function expression
// This sort of gives anonimity to the function
// We cant change the name of the normal functions we defined earlier
// But with function expressions we can

// Another type is arrow function
// Allows us to write shorter syntax for function expression
const powerNumber = (x, y) => x ** y;
let powerRes = powerNumber(2,3);
console.log(powerRes);

// or we can use a block for the definition
const productPlusOne = (n1, n2) => {
    return (n1 * n2) + 1;
}

console.log(productPlusOne(4, 6));

// Nowadays morre and more people arrow function
// It is recommended to use arrow function

