let incB = document.getElementById("incB");
let decB = document.getElementById("decB");
let count = document.getElementById("count");

// event handlers
function increment(){
    let countNum = Number(count.textContent);
    countNum++;
    count.textContent = countNum;

}

function decrement() {
    let countNum = Number(count.textContent);
    if(countNum === 0){
        alert("Count cant be negative!");
        return;
    }
    countNum--;
    count.textContent = countNum;
}



// event listners
incB.addEventListener('click', increment);
decB.addEventListener('click', decrement);