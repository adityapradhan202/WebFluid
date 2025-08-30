// Important Note:
// Object, Arrays, and functions are not primitive types
// These are non primitive types, also called 'reference type' data types
// Memory of reference type is stored in heap
// The memory of pointer to these reference type is stored in stack memory
// Typeof all these dtypes will return 'object'

// Object in js
// Object is data stored in key value pairs

let obj = {
    // we can set it as name:"somename", name is not inside double inverted commas
    // but if the key is of two words and there is space between the words, then it will give error, so in that case we need to enclose it within double inverted commas
    "name":"Aditya",
    "full name":"Aditya Pradhan",
    "height":"5ft 9inch",
    // We can even add a function here
    greet: function(){
        console.log("Hello! How are you!");
    }
}

// Let's call this function
obj.greet();
console.log(`My name is ${obj["full name"]}`);
console.log(typeof(obj))


// Shallow copy concept
// Shallow copy means obj2 is pointing to the same stuff obj is pointing in the heap memory
let obj2 = obj;

// This is obvious, that we can access value using key, and modify stuff
console.log();
obj2["full name"] = "Pradhan Aditya";
// full name of the original obj will be changed
console.log(obj)

// We can add new key value pair
console.log("After adding 90:");
obj2["new"] = 90;
console.log(obj2)

// To delete a key value pair, use delete keyword
delete obj.new;
console.log("After deletion of new:");
console.log(obj);

