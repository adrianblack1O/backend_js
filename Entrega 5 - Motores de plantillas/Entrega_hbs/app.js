//Entrega 5

const express = require('express')
const router = require('./routes.js')
const exphbs = require('express-handlebars');
const app = express();

app.set('view engine', 'handlebars');

app.use('/', express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}))
//MDW
app.use(express.json()); //parser json
app.use('/api', router); //middleware
//HBS
app.engine('handlebars', exphbs.engine());
app.set('productos', '/views');

//SERVER
app.listen(8080, () => console.log('Servidor ejecutandose en el puerto 8080.'));