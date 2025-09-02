// We have studied that how we can access element
// Now we will will study that how we can change the content of an element
// There are four methods
// innerHTML
// outerHTML
// textContent
// innerText

// innerHTML is used to get or set the html stuff inside an element
let mypara = document.getElementById("mypara")
console.log("Output of innerHTML:");
console.log(mypara.innerHTML); 

// we did get, now set
console.log("Changing the innerHTML of para1:");
mypara.innerHTML = '<p id="pid">Hi</p>';
console.log(mypara.innerHTML)

console.log("Getting the p tag we just set:");
console.log(document.getElementById("pid"));


// let's use outer html
let paraOutherHTML = mypara.outerHTML;
console.log(paraOutherHTML); // returns the outer tag, with all it's content
// so outerHTML is used to get and set the entire parent paragraph, including it's child