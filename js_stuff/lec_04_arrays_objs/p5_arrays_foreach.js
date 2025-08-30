// for each loop in arrays

let arr = [4, 5, 6, 33, 1, 11, 45];
arr.forEach((value, index) =>{
        console.log("value: ", value, "index: ", index);
    }
);

// Function expression lets us treat an object as a first class object
// Use function expression when we need to pass it to another function
const checkPrime = function(num){
    if(num === 1){
        return false;
    }
    else if(num === 2){
        return true;
    }
    else{
        for(let j = 2; j * j <= num; j++){
            if(num % j === 0){
                return false;
            }
        }
        return true;
    }
}


let myArr = [3, 4, 55, 67, 99, 2, 10];
let results = [];
myArr.forEach((value) => {
    if(checkPrime(value)){
        results.push(1);
    }else{
        results.push(0);
    }
});

console.log("results:");
console.log(results);


