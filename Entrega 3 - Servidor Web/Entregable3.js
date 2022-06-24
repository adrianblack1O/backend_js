//Entrega Nro. 3 - Servidor con Express.
const fs = require('fs')
const express = require('express')
const app = express()
const port = 8080
const json_file = JSON.parse(fs.readFileSync('productos.json'))

app.get('/productos', (req, res) => {
  res.send(json_file)
})

app.get('/productoRandom', (req, res) => {
  const rand_produ = Math.floor(Math.random() * json_file.length);
  res.send(json_file[rand_produ])
})

app.listen(port, () => {
  console.log(`Servidor Web escuchando en el puerto: ${port}`)
})