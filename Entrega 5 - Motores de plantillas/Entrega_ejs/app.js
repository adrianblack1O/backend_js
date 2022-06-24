//Entrega 5

const express = require('express')
const router = require('./routes.js')
const app = express();

app.set('view engine', 'handlebars');

app.use('/', express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}))
//MDW
app.use(express.json()); //parser json
app.use('/api', router); //middleware
//EJS
app.set('view engine', 'ejs');
//SERVER
app.listen(8080, () => console.log('Servidor ejecutandose en el puerto 8080.'));