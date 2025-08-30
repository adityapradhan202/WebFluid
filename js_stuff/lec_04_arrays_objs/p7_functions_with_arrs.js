// Using functions with arrays
// When we pass arrays and objects to functions, it's pass by reference
// Changinng these will also change the actual values
function getSum(arr){
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    return sum;
}

let numArr = [4, 5, 6, 7, 9];
let sum = getSum(numArr);
console.log(sum);

obj = {
    // item x price
    "sugar":67,
    "fruits":90,
    "additional flavors":45,
    "paper cups":20,
    "trays":670
}

function sumPrice(obj){
    let sum = 0;
    for(key in obj){
        sum += obj[key];
    }
    return sum;
}

let priceTotal = sumPrice(obj);
console.log(priceTotal);

// Let's try to change the original value using a function
let stringArr = ["books", "pen", "pencil"]; 
function changeSecond(n){
    n[2] = "Mechanical Pencil";  // changes the original array passsed
}

changeSecond(stringArr);
console.log();
console.log(stringArr);




