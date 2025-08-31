// There is another built in object called the data

let curr = new Date(); // returns the current time
console.log("Current time: " + curr);

// We can pass value in this constructor to get new date objects
let newCurr = new Date("August 31 2025");
console.log(newCurr);

// We can use different get and set methods on this object
let d = newCurr.getDate();
console.log("d: " + d);
// We can set values as well
newCurr.setDate(30);
console.log(newCurr.getDate());

// Read docs if you want to know further, but for now this much is enough