// console.log("This is JavaScript Tutorial 53");


// let name1 = "Harry";
// let name2 = "Rohan";
// let name3 = "Vishi";
// console.log(name1 + " is good boy");
// console.log(name2 + " is good boy");
// console.log(name3 + " is good boy");


// greet(name1);
// greet(name2);
// greet(name3);
// function greet(name) {
//     console.log(name + " is a good boy");
// }


// let greetText = "Good Morning!";
// greet1(name1, greetText);
// greet1(name2, "Hi!");
// greet1(name3, greetText);
// function greet1(name, greetText) { // Defining Parameters
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy");
// }


// greet2(name1);
// greet2(name2, "Hi!");
// let returnVal = greet2(name3, greetText); // Returns Nothing i.e undefined
// console.log(returnVal);
// Takes Something, Returns Nothing Function
// function greet2(name, greetText = "Greetings from JavaScript!") { // Default Arguments
    // console.log(greetText + " " + name);
    // console.log(name + " is a good boy");
// }


function sum(a, b, c) {
    let d = a + b + c;
    return d;
    console.log("Unreachable Code"); // Unreachable Code
}
let returnSum = sum(1, 2, 3);
console.log(returnSum);


function local(name, greetText) { // Defining Parameters
    // Variable defined inside a function called Local Variable
    let name1 = 100; 
    let name2 = "Hello World!";
    let name3 = null;
    let name4 = undefined;
}




// Variables created using var keyword are function scoped variable
// Variables with var keywords can be defined multiple times with NO ERROR unlike Variables with let and const keywords

// var t = 10;
// console.log(t);
// function demo() {
//     var t = 100;
//     console.log(t);
// }
// demo();
// console.log(t);
// {
//     var t = 1000;
// }
// console.log(t);