// Understanding innerText and textContent
let pid = document.getElementById("pid");

// Observe the output carefully on the console tab of the browser

// innerText returns whatever is visible on the browser
console.log("Output of innerText:");
console.log(pid.innerText);

// textContent returns everything(that is the actual content), no mater what is visible, not visible, or hidden
console.log("Output of textContent:");
console.log(pid.textContent);