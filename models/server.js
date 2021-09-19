const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // .use() es la palabra clave para decir es esto es un middleware
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`App corriendo en el puerto ${this.port}`)
    );
  }
}

module.exports = Server;
