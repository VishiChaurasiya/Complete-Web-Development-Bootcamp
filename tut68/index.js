console.log("This is index.js");

// mod is now "module.exports" and imported from "mod.js"
const mod = require("./mod"); // mod == module.exports

// console.log(typeof(mod));
console.log(mod.avg([5, 7])); 

// console.log(mod.name);