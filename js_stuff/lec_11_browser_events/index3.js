// Topic - event.preventDefault
// This methods prevents the default event that takes place on a particular tag

const bodyTag = document.getElementById("bd");
let aTag = document.getElementById("link");
let countClick = 0;

let countP = document.createElement("p");
bodyTag.appendChild(countP);

function aTagClick(event){
    event.preventDefault();
    aTag.textContent = "Clicked";
    countClick++;
    countP.textContent = `Count: ${countClick}`;
}

// event listener
aTag.addEventListener('click', aTagClick);

// Bonus info
// event.target returns the target on which event is happening
// event.target.textContent returns the text content of the target

// Homework: How we can use DOMcontent loaded to dynamically add script