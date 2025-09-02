// Creating and and appending an element to some element

let divTag = document.getElementById("mydiv");

let pTag = document.createElement("p");
pTag.textContent = "My name is Aditya";
console.log("Appended child's content:");
console.log(pTag.textContent);
divTag.appendChild(pTag);
