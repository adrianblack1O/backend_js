import express from "express";

import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

import "dotenv/config";
import productRoutes from "./routes/productRouter.js";
import messageRouter from "./routes/messageRouter.js";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(productRoutes);
app.use(messageRouter);

/**
 *
 * @TODO: Crear una ruta para obtener todos los usuarios
 */

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

server.on("error", (err) => console.error(err));
