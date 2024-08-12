const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: '*' });
const port = process.env.PORT || 3000;

io.on('connection', socket => {
    console.log("Logged " + socket.id);
    io.emit('connection', "New User Logged ID: " + socket.id);
});

server.listen(port, () => console.log('server running...'));