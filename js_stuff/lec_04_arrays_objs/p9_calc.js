const addTwo = (a, b) => { return Number(a) + Number(b) }
const diffTwo = (a, b) => { return Number(a) - Number(b) }
const divTwo = (a, b) => { return Number(a) / Number(b) }
const mulTwo = (a, b) => { return Number(a) * Number(b) }
const powTwo = (a, b) => { return Number(a) ** Number(b) }

function home(){
    console.log("Enter value in window prompt\n");
    console.log(`
        1 - addition
        2 - subtraction
        3 - division
        4 - multiplication
        5 - power
        6 - exit
    `);
}

function compute(func){
    const n1 = window.prompt("Enter first number:");
    const n2 = window.prompt("Enter second number:");
    let res = func(n1, n2);
    // console.log(`Result: ${res}`)
    alert(`Result: ${res}`);
}

while(true){
    home();
    userInp = window.prompt("Enter valid integer:");
    if(userInp == 1){
        compute(addTwo);
        continue;
    }
    else if(userInp == 2){
        compute(diffTwo);
        continue;
    }
    else if(userInp == 3){
        compute(divTwo);
        continue;
    }
    else if(userInp == 4){
        compute(mulTwo);
        continue;
    }
    else if(userInp == 5){
        compute(powTwo);
        continue;
    }
    else if(userInp == 6){
        console.log("Thanks for using the calculator");
        break;
    }else{
        console.log("Invalid input!");
        break;
    }
  

}