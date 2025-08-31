// We know var is only function and globally scoped
// It is not blocked scope
// But let and const are block scoped and function scoped
// End of the story, eazy peazy

// If let or const is defined inside a block or a function then it can be accessed withing that function or block only


console.log(a);
var a = 0;

// Important interview topic
// Temporal deadzone
console.log(marks);
console.log("Hello!")
console.log("Hi!");
const marks = 90;
console.log(marks);

// From line number 14-16, it is called a temporal deadzone, because it will give a reference errror
// Because marks is defined after the line 16, that is line 17