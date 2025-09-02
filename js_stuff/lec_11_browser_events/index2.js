// Topic - Event object

function buttonClicked(event){
    const parent = document.getElementById("bd");
    const btn = document.getElementById("btn");
    const pTag = document.createElement("p");
    parent.removeChild(btn);
    parent.appendChild(pTag);
    // print event in the console
    console.log(event);
    console.log(`Event type: ${event.type}`);
}

// Note:
// In JavaScript event handling, the event object is automatically passed as the first argument to the event handler function by the browser,
// even if it’s not explicitly passed when attaching the event listener.

let btn = document.getElementById("btn");
const pTag = document.createElement("p");
pTag.setAttribute('id', 'pid');
pTag.textContent = "Hello!";

// eventListner
btn.addEventListener('click', buttonClicked);

