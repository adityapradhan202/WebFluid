// The for in loop is recommended to use for javascript object

student = {
    "name":"Aditya Pradhan",
    "university":"vit bhopal university"
}

for(let key in student){
    console.log(key);
}

// The for of loop is used on iterables like arrays and strings
// Either we can use traditional loops, or we can use the for of loop here
let arr = [6, 7, 1, 21];
console.log();
for(let j of arr){
    console.log(j);
}

console.log();
let myStr = "python";
for(let k of myStr){
    console.log(k);
}

