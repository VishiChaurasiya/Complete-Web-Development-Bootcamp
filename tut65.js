// Synchronous or blocking 
// - line by line execution

const fs = require("fs");
let data = fs.readFileSync("read.txt", "utf-8"); // Synchronous function and no callback function
console.log(data);
console.log("This is a message from synchronous or blocking code \n\n");



// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

// const fs = require("fs");
fs.readFile("read.txt", "utf-8", (err, data) => { // Asynchronous function & calling callback function
    console.log(data);
});
console.log("This is a message from asynchronous or non-blocking code");