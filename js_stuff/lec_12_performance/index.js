// Comparing code with 'performance' of js
// performance.now() gives the current time stamp
// For example: Using this we can compare the execution time of two functions

// code-1
const t1 = performance.now();
for(let i = 0; i < 100; i++){
    let para = document.createElement("p");
    para.textContent = "This is Para " + (i);
    document.body.appendChild(para);
}

const t2 = performance.now();
console.log("Total time for code-1: " + (t2 - t1));

// code-2
const t3 = performance.now();
let myDiv = document.createElement("div");
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'This is para' + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("Total time for code-2: " + (t4 - t3));

// Observe the output on browser's console tab
// The second code is much faster than the first one

// To understand this we need to understand the concept of reflow and repaint
// Reflow: Process of calculating position/dimensions of element
// Repaint: Process of displaying context/element pixel by pixel

// In code 1 and code 2 we have almost same number of Reflows
// But repaint of code 2 is lesser than that of code 1
// In code 1 we are displaying again and again by appending para to body
// In code 2 we are appending it to the div container, and eventually we append the div to the body tag
// Coclusion: This significantly reduces the total number of reflows and repaint in code 2

// Best practice:
// Best practice is to create a fragment object
// Fragment is a lightweight document
// When we add something to the fragment, there are no reflows and repaints
// But then we need to add this the actual document, and that counts as reflows ana repaints
// This will save use from a lot of reflows and repaints

const t5 = performance.now();

// create fragment
let fragment = document.createDocumentFragment();
for(let i=1; i<100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para " + i + "abc";
    fragment.appendChild(para);
}
document.body.appendChild(fragment); // add fragment to the actual document
const t6 = performance.now();

console.log("Total time for fragment's code: " + (t6 - t5));