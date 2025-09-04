let btns = document.querySelectorAll(".btn");
let paraText = document.getElementById("exp");
let equalsTo = document.getElementById("answer");
let allClear = document.getElementById("clear");

paraText.textContent = "";

function appendEntered(event){
    paraText.textContent += event.target.textContent;
    console.log(paraText.textContent);
}

function evaluateExpression(){
    try{
        let result = eval(paraText.textContent);
        paraText.textContent = result;
    }
    catch(e){
        paraText.textContent = "invalid"
    }
}

function clearDisplay(){
    paraText.textContent = "";
}

for(let btn of btns){
    btn.addEventListener('click', appendEntered);
}

equalsTo.addEventListener('click', evaluateExpression);
allClear.addEventListener('click', clearDisplay);

