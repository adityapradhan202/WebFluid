// In css, the highest priority is given to the inline css, out of all the ways of applying css
// We can change that, using dom
// the .style attribute of an element returns a js object containing all the css properties

// So we can get and set some css property
let fdiv = document.getElementById("fdiv");
fdiv.style.borderColor = "blue";

// With the prev method we can set single css value
// But with cssText method on .style we can set multiple css values
let sdiv = document.getElementById("sdiv");
sdiv.style.cssText = "background-color:yellow; width:14rem";

// To set attributes like class and id we use setAttribute method on elements
// .setAttribute('string', 'value')
let lastDiv = document.getElementById("tdiv");
// set id
lastDiv.setAttribute('class', 'last-div');
console.log("Attributes of the last div after adding class to it:");
console.log(lastDiv);

