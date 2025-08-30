// if block
age = 45;
if(age >= 18){
    console.log("You are eligible to drive!");
}

// if with else block
if(age >= 70){
    console.log("You are too old to drive!");
}
else{
    console.log("You can drive you are not that old!");
}

// if else if ladder
// remember that last else is optional

let favLanguage = "php";
if(favLanguage == "javascript"){
    console.log("Yes fav language is js");
}
else if(favLanguage == "python" || favLanguage == "java" || favLanguage == "swift" || favLanguage == "kotlin"){
    console.log(`Damn, ${favLanguage} is a very good programming language`);
}
else{
    console.log("You fav programming language is probably crap!")
}

// Three are six types of loops
// For loop
// Whilte loop
// do while loop
// for in loop, for of loop, for each loop -  we wil study in arrays
// javscript also has break and continue keyword same as other languages

console.log();
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// using the break keyword
console.log();
for(let j = 0; j < 6; j++){
    if(j == 4){
        console.log("Encountred 4");
        console.log("Breaking the loop");
        break;
    }
    console.log(j);
}

// while loop
console.log();
let k = 7;
while(true){
    if(k == 0){
        console.log("Reached 0");
        break;
    }
    if(k == 3){
        console.log("Skipping this iteration");
        k--;
        continue;
    }
    console.log(k);
    k--;
}


// do while loop
console.log();
let n = 0;
do{
    // first do then check the condition
    console.log("CPP is crap");
    n++;
}while(n < 5);