// Basics of functions

// function is defined using the 'function keyword'
function sayHello(){
    console.log("Hello my friend!");
}

// We can pass a parameter in function (Parameters are placeholders)
function printTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// To use a function, make a function call
// sayHello();
printTable(9); // 9 is called argument (actual value passed in play of parameter)
console.log();

// function returning a value
function averageThree(a, b, c){
    let sum = a + b + c;
    return sum / 3; // as soon as the function encounters return, it is terminated
}

let result = averageThree(8, 9, 8.2);
console.log(result);

// javascript doesn't have keyword params
// however it does have default params
function  myFunc(defVal = 0.2){
    console.log(defVal);
}

console.log();
myFunc();
myFunc(6.7); // updating the default value