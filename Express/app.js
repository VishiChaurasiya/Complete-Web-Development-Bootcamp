const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 800;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the view directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {"title": 'PubG is the best game', "content": con};
    res.status(200).render('index.pug', params);
});
app.post('/', (req, res) => {
    // console.log(req.body);
    let name = req. body.name;
    let age = req. body.age;
    let gender = req. body.gender;
    let address = req. body.address;
    let more = req. body.more;

    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);

    const params = {"message": 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`This application started successfully on port ${port}`);
});