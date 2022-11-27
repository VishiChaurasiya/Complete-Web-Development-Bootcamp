// Node server which will handle socket io connections


// '8000' is port
const io = require('socket.io')(8000, {cors: {origin: '*'}}); 
const users = {}; // Creating an object

// 'io.on()' listens every connection requests from all the clients/users
// It creates a connection between the server and the newly joined user
io.on('connection', socket => {

    // If any new user joins, let other users connected to the server know!
    // 'socket.on()' processes each connection individually and listens each custom events
    // 'new-user-joined' is an custom event
    // Receiving an event from the socket.io of any particular client
    socket.on('new-user-joined', name => { 
        users[socket.id] = name;
        // console.log('New User', name);
        // console.log(users);

        // Broadcasts/emits to everyone except the one who sent/initiated the custom event to 'socket.on()'
        socket.broadcast.emit('user-joined', name); // Sending an event to socket.io of all clients except one
    });

    // If someone sends a message, broadcast it to other people
    socket.on('send', message => {
        socket.broadcast.emit('receive', {name: users[socket.id], message: message});
    });

    // If someone leaves the chat, let others know
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });

});