// node basically means node.js
// And it is a runtime environment, which allows us to write js code outside of the browser.
// That means with node.js we can use js to write server side code.

// Node modules are prewritten modules with different functionality.
// If we want to use these modules, we need to import these modules.
// Nodejs has so many native modules, such as filesystem
// Front end js, which is our browser, cant perform filesystem operations, but node js can

// For now for importing using the traditional import method in node js
// This loads entire module as single object
// And then we can use the method in it

// const fs = require('fs');
// let data = "Ore wa besto desu";
// // this takes a call back arrow function
// // call back means it will be triggered or called after the this method has been called
// fs.writeFile('message.txt', data, (err)=>{
//     // err is some error, if encountered
//     if(err) throw err;
//     console.log("The file has been saved");
// });

// fs.readFile('message.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })


// This is the default import method
import generateName from "sillyname";


console.log("Here are five silly names:")
for(let i=0; i<5; i++){
    let sillyName = generateName();
    console.log(sillyName)
}
