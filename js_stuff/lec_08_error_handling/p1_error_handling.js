// Error handling in js
// Errors are two types: Compile time error, and runtime error

// Compile time errors are the errors that happen at the compile time
// And we can easily know that what can cause a compile time error (red line in vscode)
// Example: Syntax error

// let a ) --> This is syntax error

// Runtime errors are the error that happen at the runtime
// And we need to handle these error
// Otherwise these error will disrupt the normal flow of program
// Example of run time error
// console.log(x); --> Throws reference error
// We won't get error at the compile time
// But during the runtime the program will come to know that there is nothing like x -> reference error

let num = 6;
// Error handling
try{
    // Learning: zero division error wont happen here, it will return infinity
    // let ans = num / 0;
    // console.log("ans: " + ans);

    // print something that doesnt exist
    console.log(num1);
}
catch(e){
    console.log("Runtime error catched!");
    console.log("Catched error: " + e);
}
finally{
    console.log("This code always executes whether exception is catched or not!");
}
