// Here we will learn how to add an element at a particular position
// Open the corresponding html file on browser, and see the output.

let newP = document.createElement("p");
newP.className = "newPs"; // set class of new ptag
newP.textContent = "Flask";
// insertAdjacentElement() is used to insert at specific location

// Inserting before the beforebegin
let innerDiv = document.getElementById("inner-div");
innerDiv.insertAdjacentElement("beforebegin", newP);

// Inserting after the begin of inner-div
let newP2 = document.createElement("p");
newP2.textContent = "Gen-AI";
newP2.className = "newPs";
innerDiv.insertAdjacentElement("afterbegin", newP2);

// Inserting before the end of inner-div
let newP3 = document.createElement("p");
newP3.textContent = "Data Science";
newP3.className = "newPs";
innerDiv.insertAdjacentElement("beforeend", newP3);

// Inserting after the end of inner div
let newP4 = document.createElement("p");
newP4.textContent = "Data Analyst";
newP4.className = "newPs";
innerDiv.insertAdjacentElement("afterend", newP4);

// We can even remove something
// So we apply a method on the parent object, and that method takes the child as an argument to remove it, the name of the method is .removeChild
let outerDiv = document.getElementById("outer-div");
// outerDiv.removeChild(newP4);
// Uncomment the above line and see the output in browser