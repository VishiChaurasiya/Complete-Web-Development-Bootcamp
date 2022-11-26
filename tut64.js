const fs = require("fs");
let text = fs.readFileSync("read.txt", "utf-8");

text = text.replace("browser", "modified-file from read.txt");

console.log("The content of the file is ");
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("write.txt", text);