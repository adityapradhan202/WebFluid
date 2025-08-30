// Some string methods

// toLowerCase and toUpperCase method
const str1 = "This is String ONE";
const str1Lower = str1.toLowerCase();
const str1Upper = str1.toUpperCase();
console.log(str1Lower);
console.log(str1Upper);

// replace and replaceAll method
let repString = str1Lower.replace("i", "ba"); // it will change the first occurence
console.log(repString);

let repAllString = str1Upper.replaceAll("I", "XX");
console.log(repAllString);

// indexOf method
console.log(`Index of xx: ${repAllString.indexOf("XX")}`);
// similarly we have lastIndexOf
console.log(`Last index of xx: ${repAllString.lastIndexOf("XX")}`);

// split method splits the strins and puts into an array
// This is how we can multiline strings, use backticks
const paragraph = `Name: Aditya Pradhan
University: VIT
Academic Year: 3rd
Passing Year 2027
Branch: CSE
Branch Specialization: Artificial Intelligence and Machine Learnning
`
const paraArray = paragraph.split(" ");
console.log(paraArray[1]);

// the substring method returns a substring
// it takes in 2 params, the starting and the ending, the end is exlcusive
const subPara = paragraph.substring(start=0, end=35);
console.log(subPara);

// Read other methods from mdn docs
