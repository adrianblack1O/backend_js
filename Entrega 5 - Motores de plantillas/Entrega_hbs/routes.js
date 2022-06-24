const express = require('express')
const { Router } = express

const router = Router()
const productos = [];

//Handlebars
router.get("/productos", (req, res) => {
        if(productos[0]){
            res.render('productos', productos);
        } else {
            res.send("No hay productos disponibles.")
        }
});

//Generador de id
const id = function () {
    if(productos.length == 0){
        return "1"
    }
    return productos.length+1
  };

//JSON Productos
router.get('/productosJSON', (req, res) => {
    res.send(productos)
})

//Encontrar Producto por id
router.get('/productos/:id', (req, res) => {
    const find_produ = productos.find(producto => producto.id == req.params.id)
    if(find_produ){
    res.send(find_produ)
    } else {
        res.status(400).send({error: 'producto no encontrado'})
    }
});

//Agregar Producto
router.post('/productos', (req, res) => {
    const producto = req.body;
    producto.id = id()
    producto.thumbnail = "https://source.unsplash.com/featured/300x20"+id()
    productos.push(producto);
    return res.redirect("/");
})

//Update Producto
router.put('/productos/:id', (req, res) => {
    const producto = req.body;
    const find_produ = productos.findIndex(producto => producto.id == req.params.id)
    if(find_produ != -1){
    productos[find_produ] = producto
    res.sendStatus(200);
    } else {
        res.status(400).send({error: 'producto no encontrado'}) 
    }
})

//Delete Producto
router.delete('/productos/:id', (req, res) => {
    const find_produ = productos.findIndex(producto => producto.id == req.params.id)
    if(find_produ != -1){
        productos.splice(find_produ, 1)
        res.sendStatus(200);
        } else {
            res.status(400).send({error: 'producto no encontrado'}) 
        }
})

module.exports = router;