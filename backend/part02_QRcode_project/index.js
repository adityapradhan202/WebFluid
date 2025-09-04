/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'node:fs'; // node: prefix means core node js module

inquirer
    .prompt([
        {
            message:"Type in ur URL: ",
            name:"URL"
        },
    ])
    .then((answers) => {
        // answers is also an object, key value pairs
        const url = answers.URL;
        let qrImage = qr.image(url); // by default generates png
        qrImage.pipe(fs.createWriteStream('qr.png'));
        console.log("-> qrcode has been successfully generated");
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Some error occured!");
            console.log("Error: " + error);
        } else {
            // absurd error
            console.log("Some error occured!");
            console.log("Can't explain it!");
        }
    });