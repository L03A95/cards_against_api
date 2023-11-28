// REST Express
const express = require('express')
const route = require('./routes/main')

const app = express()
const port = 3001

// Socket.io
const http = require('http');
const socketIO = require('socket.io');
const configureSocketEvents = require('./socketio');

const server = http.createServer(app);
const io = socketIO(server);

configureSocketEvents(io);
//

app.use('/', route)

app.listen(port, () => {
    console.log('se ha iniciado el servidor en el puerto ' + port)
})