// Guess the number game

let nAttempts = 0;
const randNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const myRandom = randNum(1,101); // 101 is exclusive

while(true){

    nAttempts++;
    // window.prompt opens a modal or popup input box on the browser
    const userInput = window.prompt(`
        Attempt-${nAttempts}
        Guess the number (between 1-100):`);

    if (userInput > myRandom) {
        // alert shows an alert popup on browser, with some message
        alert("Too big, guess lower");
    }
    else if(userInput < myRandom){
        alert("Too small, guess bigger");
    }
    else{
        alert(`Found the answer! Number of attempts: ${nAttempts}`);
        break;
    }
}



// Explanation of generating random number:
// Math.random() gives a random float number within the range [0,1)
// Math.random() * (max - min) scales the range
// Math.random() * (max - min) + min shifts the starting point
// Math.floor(Math.random() * (max - min) + min) extracts floor value from the float number