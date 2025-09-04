// Write the first server

import express from "express";

const app = express();
const port = 5000;

// For GET request on the localhost:5000/ route
app.get("/", (req, res) => { 
    // req is for request
    // res is for response
    let hTag = "<h1>Hello World</h1>";
    // sending response
    res.send(hTag);
    console.log("Received a GET request for the home page!");
});


// Challenge part
app.get("/contact", (req, res) => {
    const phoneNumebr = "92130x22xx";
    res.send(`<p style="color:red; font-size:2rem;">Contact me on this number: ${phoneNumebr}</p>`);
    console.log("Received a GET request for the contact page!");
});

app.get("/about", (req, res) => {
    const myIntro ="<ol><li>Pursuing Btech in VIT</li><li>Hobby: Coding, Sketching</li><li>Favourite food: Butter Chicken</li></ol>";
    res.send(myIntro);
    console.log("Received a GET request for the about page!");
})



// app.listen is the function to run the server
// app.list takes in two parameters
// the port is the port through which our computer is gonna host the webapp
// and the secondly there's a callback function
app.listen(port, () => {
    console.log("Server is live!");
    console.log("Port number: " + port);
})