function sayName(name){
    console.log("Your name: " + name);
}

// It will run, without error
// But it will say name is undefined
sayName(); 

// We can set some default values of some function parameters
function displayTable(n=2){
    console.log(`\nTable of ${n}`);
    for(let j = 1; j < 11; j++){
        console.log(`${n} x ${j} = ${n * j}`);
    }
}

displayTable();
displayTable(n=5);

// We can even pass objects and arrays as default parameters in functions
function sampleFunc(value = {stack:"MERN", popular:true, libs:["js", "ejs", "node js", "mongodb", "react"]}){
    console.log("This is sample function");
    console.log(value);
}

sampleFunc();
console.log("Passing some array in place of value");
sampleFunc([0.2, 3.44, 5, 1]);

// Important interview question
// When we pass null in place of some default param, null is used
// But when we pass undefined, it doesnt use undefined, it uses the default value
function sampleFunc2(value=8){
    console.log(value);
}
console.log("Output of sampleFunc2:");
sampleFunc2(undefined);

// Default parameter can even be a function
function sqRoot(n){
    return Math.sqrt(n);
}

function sampleFunc3(n = 1, v = sqRoot(n)){
    console.log(n + v);
}
console.log("Output of sampleFunc3:");
sampleFunc3(n=16);