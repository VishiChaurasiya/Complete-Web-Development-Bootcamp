// Creates a connection with the socket.io of server
// 'io()' is defined in the 'socket.io/socket.io.js' and included from server through HTML
const socket = io('http://localhost:8000'); 

// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

// Audio that will play on receiving messages
var audio = new Audio('ting.mp3');

// Function which will append event info to the container
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position == 'left') {
        audio.play();
    }
}

// If the form gets submitted, send server the message
form.addEventListener('submit', (e) => { // 'submit' is an event triggered when form is submitted
    e.preventDefault(); // Prevents reloading of web page
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message); // Sending/emitting an event to socket.io of server
    messageInput.value = '';
});

// Ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

// If a new user joins, receive his/her name from the server
socket.on('user-joined', name => { // Receiving/listening an event from socket.io of server
    append(`${name} joined the chat`, 'left');
});

// If server sends a message, receive it
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

// If a user leaves the chat, append the info to the container
socket.on('left', name => {
    append(`${name} left the chat`, 'left');
});