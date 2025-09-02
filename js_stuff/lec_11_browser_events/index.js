// Topic -Events, eventListener, and event target

// Anything that happens on the web, some sort of activity, like click or scroll is an event
// Event target is the location where event is happending, if we click a button, button is the event target
// Event listener is the location where we write what will happen when there will be an event at the event target

function showImage(){
    let delTag = document.getElementById("click-txt");
    const imageURL = 'https://media1.tenor.com/m/FvPAUXG93ooAAAAd/muskan-karia-i-bet.gif';

    let contentDiv = document.getElementById("content-div");
    let imgTag = document.createElement("img");
    contentDiv.removeChild(delTag);

    imgTag.setAttribute('src', imageURL);
    imgTag.setAttribute('id', 'img-display');
    contentDiv.appendChild(imgTag);
}


let contentDiv = document.getElementById("content-div");
let pTag = document.getElementById("click-txt");

pTag.addEventListener('click', showImage); // 'click' is event, showImage is the eventHandler
// As soon as the text is clicked, function showImage will be triggered

// We can remove the eventListner if we want
// pTag.removeEventListener('click', showImage);

// Imporant Note:
/*
Inside the removeEventListner we have mention the exact event and the eventHandler name if we want to remove it!
So writing function expression/arrow function inside the addEventListener is a bad idea!
*/