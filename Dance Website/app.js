const express = require("express");
const path = require("path");
const app = express();
const port = 800;

// Express body-parser is an npm module used to process data sent in an HTTP request body
// const bodyparser = require("body-parser"); // It hasn't been used in the code

const mongoose = require('mongoose');
// Connecting local/off Databse
// mongoose.connect('mongodb://127.0.0.1/contactDance', {useNewUrlParser: true});

// Connecting online Database
const DB = 'mongodb+srv://vishi:vishi@cluster0.7guezse.mongodb.net/contactDance?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {
    console.log(`Connection successful`);
}).catch((err) => console.log(`No connection`));

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
});

// DEFINE MONGOOSE SCHEMA
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
var Contact = mongoose.model('Contact', contactSchema);

// SAVING DATA INTO THE DATABASE
app.post('/contact', (req, res) => {
    console.log(req.body); // 'req.body' is the object of received data

    var myData = new Contact(req.body); // 'Contact' is the model
    myData.save().then(() => {
        res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("Item was not saved to the database");
    });
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});