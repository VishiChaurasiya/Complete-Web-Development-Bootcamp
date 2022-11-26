// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.


// getting-started.js
const mongoose = require('mongoose');


// IMP use "127.0.0.1" instead of "localhost"
// 'vishiKart' is the Database name
mongoose.connect('mongodb://127.0.0.1/vishiKart', {useNewUrlParser: true}, {useUnifiedTopology: true});
// mongoose.connect('mongodb://127.0.0.1:27017/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// db.once('open', function() { // Callback function and Non-blocking I/O operation
//     // we're connected!
//     console.log("We are connected");
// });


// Creating Schema
// 'kittySchema' is the schema
const kittySchema = new mongoose.Schema({
    name: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speakMethod() {
    const greeting = "My name is " + this.name;
    console.log(greeting);
};


// Compiling final Schema or creating model
// Creating a collection of schema 'kittySchema'
// 'kitten' is the collection
// 'kittens' is the plural collection name given automatically inside the database to every collection
const Kitten = mongoose.model('kitten', kittySchema);


// Creating an object corresponding to model 'Kitten'
// Creating document/object corresponding to collection 'kitten'
// 'silence' is the document/object
const silence = new Kitten({ name: 'Silence' });
const silence1 = new Kitten({ name: 'Silence1' });
// console.log(silence.name);
// silence.speak();


// Saving/inserting the document/object 'silence' to the collection 'Kitten' into the database
// Executing document insertion query
silence.save(function (err, kitty) {
    if(err) return console.error(err);
    // kitty.speak();
});
silence1.save(function (err, kitty) {
    if(err) return console.error(err);
    // kitty.speak();
});


// Executing document searching query
// {name: "Silence"} is a filter object or data to be searched
Kitten.find({name: "Silence"}, function (err, kittens) {
    if(err) return console.error(err);
    console.log(kittens);
});
Kitten.find({name: "Silence1"}, function (err, kittens) {
    if(err) return console.error(err);
    console.log(kittens);
});
