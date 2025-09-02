// DOM means document object model
// When javascript parses the whole html code into an object, then that object is called document
// Everything comes inside the document
// It's a like a tree like structure with different nodes, the different tags inside the document object can be considered as different nodes
// BOM - Browser Object Model
// All the html content comes under DOM, other than that, the other things comes under BOM

// There are various methods on document object that we can use to select the html tags
let h1 = document.getElementById("heading");

// console.log(h1);
// It will give error
// document can only run on browser
// so use live server for html page

let paraClass = document.getElementsByClassName("para");
// paraClass will be a array of tags
console.log(paraClass);
console.log("Here is every single tag!")
for(tag of paraClass){
    console.log(tag.textContent);
}

// We can get all the tags even by tagname
let allPs = document.getElementsByTagName("p");
console.log(allPs);

// This is how we modify text of para
// We will explore in detail about the different ways to modify
let para4 = document.getElementById("para-4");
para4.textContent += " for sure";

// Now we can either use these methods
// Or we can use the query selector, which allows us to use the css selector to select stuff

// selects the first one
let para1 = document.querySelector("#para-1");
console.log("This is para1");
console.log(para1);

// selects all the tags
let listElements = document.querySelectorAll(".list-element");
console.log("Here are all the list elements");
console.log(listElements);


