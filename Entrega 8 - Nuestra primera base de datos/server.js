//Knex y archivos de configuracion.
const { mysql_opt, sqlite3_opt } = require('./options/databases.js');
const knex_mysql = require('knex')(mysql_opt);
const knex_sqlite = require('knex')(sqlite3_opt);

//Express, websocket.io y http.
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

httpServer.listen(3000, () => console.log('Ejecutandose en el puerto 3000.'));

//Abro el canal el websocket;
io.on('connection', (socket) => {
    //Listado de productos persistente en base mysql(tabla ecommerce);
    socket.on('produ_item', produdata => {
    
    //SELECT productos
        function list_produ(){
            knex_mysql
                .from("productos")
                .select("*")
                .then((rows) => {
                    io.sockets.emit('list_produ', rows);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).end()
                })
            }
        
    //INSERT del producto en mysql.        
        knex_mysql("productos")
            .insert(produdata)
            .then(() => {
                console.log("Producto guardado.");
                list_produ();
            })
            .catch(() => {
                console.log(err);
            })

    })

    //Listado de mensajes persistente en base sqlite3(archivo ecommerce.db3);
    socket.on('mensajes', msjdata => {

    //SELECT mensajes
        function list_msj(){
            knex_sqlite
                .from("mensajes")
                .select("*")
                .then((rows) => {
                    io.sockets.emit('chat', rows);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).end()
                })
            }
        
    //INSERT del mensaje en mysql.        
        knex_sqlite("mensajes")
            .insert(msjdata)
            .then(() => {
                console.log("Mensaje guardado. "+Date());
                list_msj();
            })
            .catch(() => {
                console.log(err);
            })

    })
});