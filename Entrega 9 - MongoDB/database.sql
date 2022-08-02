
# mongod
# mongod --dbpath "miDataBase"


use Ecommerce
# creamos las tablas mensajes y productos
db.createCollection("mensajes")
db.createCollection("productos")

# 1 - Insertamos los productos
db.productos.insertMany([
{title: "Apple Watch Series 7",thumbnail: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635178709000",price: 4500,},
{title: "MacBook Pro 13",thumbnail: "https://www.apple.com/v/macbook-pro-13/m/images/overview/compare/compare_mbp_13__givmvd62t5ua_large_2x.png",price: 5000,   },
{title: "Smart TV 4K UHD Samsung 50",thumbnail: "https://images.fravega.com/f300/d7ca24bf5639a7db78c31aa9fa963be8.jpg.webp",price: 2000,   },
{title: "Silla Gaming Xtrike-Me GC-903 Rojo",thumbnail: "https://images.fravega.com/f300/93a17ff158df6931063cf42e242e30a6.jpg.webp",price: 2850,   },
{title: "Celular Samsung Galaxy A23 128GB Negro",thumbnail: "https://images.fravega.com/f300/f741c5dc03f09eebef57e56dcc86c8f9.jpg.webp",price: 200,   },
{title: "Smart TV 55” 4K Philips 55PUD7406/77",thumbnail: "https://images.fravega.com/f300/c453eec4f43bd55572ef32816f0dc7de.jpg.webp",price: 4100,   },
{title: "Notebook Dell 15,6” Ryzen 5 8GB 256GB SSD Inspiron 15 3515 24DV0+365",thumbnail: "https://images.fravega.com/f300/47602fd17f94e413a3ceb4d7367e1b33.jpg.webp",price: 3690,   },
{title: "Smartwatch Motorola Moto100 Black",thumbnail: "https://images.fravega.com/f300/d7330a9a648f72a23889d64a79b1c4ff.jpg.webp",price: 490,   },
{title: "Monitor Full HD Noblex 91MK22X7100 22”",thumbnail: "https://images.fravega.com/f300/5443601de4317b682422fb19db2624e3.jpg.webp",price: 650,   },
{title: "Mouse Gamer Havit HV MS749",thumbnail: "https://images.fravega.com/f300/ebb80c276dfac5f69bfa7ffc08d444bb.jpg.webp",price: 100,   },
])

# 1 - Insertamos los mensajes
db.mensajes.insertMany([
{email: "test@mail.com", message: "This is the first message", date: "7/1/2022, 1:28:05"},
{email: "jo.test@mail.com", message: "This is the second message", date: "18/7/2022 11:13:23",},
{email: "user@acme.com", message: "This is the best product for birds!", date: "7/18/2022, 2:17:40",},
{email: "seiya@cosmos.com", message: "Give me your strong Pegasus", date: "18/7/2022 11:20:47"},
{email: "jhondoe@website.com", message: "This is an example text message from Jhon Doe", date: "18/7/2022 11:29:43"},
{email: "janedoe@website.com", message: "This is an example text message from Jane Doe", date: "18/7/2022 11:30:39"},
{email: "nelsonmandela@website.com", message: "The greatest glory in living lies not in never falling, but in rising every time we fall", date: "18/7/2022 11:32:12"},
{email: "waltdisney@website.com", message: "The way to get started is to quit talking and begin doing", date: "18/7/2022 11:33:13"},
{email: "eleanorroosevelt@webmail.com", message: "If life were predictable it would cease to be life, and be without flavor", date: "18/7/2022 11:36:01"},
{email: "johnlennon@mail.com", message: "Life is what happens when you're busy making other plans.", date: "18/7/2022 11:37:39"},
])

# Listanos los mensajes y formateamos
db.mensajes.find().pretty()
# Listamos los productos y formateamos
db.productos.find().pretty()

# contamos la cantidades de documentos que tienen las colecciones 
db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

# CRUD 
# 5 (a) - Insertar un nuevo producto
db.productos.insertOne({title: "Notebook 14” iQual NQ5 Intel Core i5 4GB 500GB 1080p Windows 10",thumbnail: "https://images.fravega.com/f300/7e8226f791298e563819317e562a9d14.jpg.webp",price: 1245,   })
# 5 (b) - Realizar una consulta por nombre de producto específico
db.productos.find({title: "Notebook 14” iQual NQ5 Intel Core i5 4GB 500GB 1080p Windows 10"}).pretty()

# 5 (b -1) - Listar todos los productos que tengan un precio menor a 1000
db.productos.find({price: {$lt: 1000}}).pretty()

# 5 (b -2) - Listar todos los productos que tengan un precio entre 1000 a 3000
db.productos.find({price: {$gt: 1000, $lt: 3000}}).pretty()

# 5 (b -3) - Listar todos los productos que tengan un precio mayor a 3000
db.productos.find({ price: {$gt: 3000}}).pretty()

# 5 (b -4) - Mostrar el nombre del tercer producto mas barato
{db.productos.find({}, { title: 1}).sort({price: 1}).skip(2).limit(1).pretty()}

# 5 (c) Actualizar todos los productos agregando el campo stock con un valor de 100
db.productos.updateMany({}, {$set: {stock: 100}})

# 5 (d) Cambiar el stock a 0 a los productos con el precio mayor a 4000
db.productos.updateMany({price: {$gt: 4000}}, {$set: {stock: 0}})

# 5 (e) Borrar los productos con el precio menor a 1000
db.productos.deleteMany({price: {$lt: 1000}})

use Ecommerce

db.createUser({
user: "pepe",
pwd: "asd456",
roles: [{ role: "read", db: "Ecommerce"}]
})
