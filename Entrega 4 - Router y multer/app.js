//Entrega 4 - API RESTful

const express = require('express')
const router = require("./routes.js")

const app = express();

app.use('/', express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: true}))
app.use(express.json()); //parser json
app.use('/api', router); //middleware

app.listen(8080, () => console.log('Servidor ejecutandose en el puerto 8080.'));