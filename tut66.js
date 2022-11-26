const http = require('http');
const fs = require('fs');

// const path = require('path');
// const fileContent = fs.readFileSync(path.resolve("Food Website", "index.html"));

const fileContent = fs.readFileSync('tut33.html');

const server = http.createServer((req, res) => {

    // This is not working and provided by Code With Harry
    // res.writeHead(200, {'Content-type':'type/html'}); 

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(fileContent);
});

// Default port i.e 80 not working so using different port
server.listen(800, '127.0.0.1', () => { 
    console.log("Listening on port 800");
});