const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//Arrays
const productos = []
const mensajes = []

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

httpServer.listen(3000, () => console.log('SERVER ON'));

io.on('connection', (socket) => {
    //Lista productos 
    socket.emit('list_produ', productos);
    //Ingresa productos
    socket.on('produ_item', produdata => {
        productos.push({ socketid : socket.id, producto : produdata })
        io.sockets.emit('list_produ', productos);
    })
    //Mensajes del chat
    socket.emit('chat', mensajes);
    //Mensajes del user
    socket.on('mensajes', msjdata => {
        mensajes.push({ socketid : socket.id, mensaje : msjdata })
        io.sockets.emit('chat', mensajes);
    })
});
