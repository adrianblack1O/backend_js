//Settings de la base;
const { mysql_opt, sqlite3_opt } = require('./options/databases.js');
const knexsqlite = require('knex')(sqlite3_opt);
const knexmysql = require('knex')(mysql_opt);

//Se crea una nueva tabla con la funcion createTable() del esquema Knex.js. Definimos el esquema para que 
//contenga tres columnas: id, nombre y precio.

//Creacion de tabla "productos" en la base ecommerce;
knexmysql.schema.createTable('productos', table => {
        table.increments('id')
        table.string('title')
        table.integer('price')
        table.string('thumbnail')
    })

    .then(() => console.log("Tabla productos creada con exito!"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexmysql.destroy();
    });

//Creacion de tabla "mensajes" en el file ecommerce.db3;
knexsqlite.schema.createTable('mensajes', table => {
        table.increments('id')
        table.string('nickname')
        table.string('mensaje')
    })

    .then(() => console.log("Tabla mensajes creada con exito!"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knexsqlite.destroy();
    });