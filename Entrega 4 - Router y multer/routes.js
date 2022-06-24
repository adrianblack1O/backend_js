const express = require('express')
const { Router } = express

const router = Router()

const productos = [];
const id = function () {
    if(productos.length == 0){
        return "1"
    }
    return productos.length+1
  };

router.get('/productos', (req, res) => {
    res.send(productos)
})

router.get('/productos/:id', (req, res) => {
    const find_produ = productos.find(producto => producto.id == req.params.id)
    if(find_produ){
    res.send(find_produ)
    } else {
        res.status(400).send({error: 'producto no encontrado'})
    }
});

router.post('/productos', (req, res) => {
    const producto = req.body;
    producto.id = id()
    productos.push(producto);
    res.sendStatus(201);
})

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