const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //implementando web socket
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server)



        this.paths = {

        }


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //path para manejo de eventos de sockets

        this.sockets()
    }

    sockets() {
        this.io.on('connection', socketController)
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {

        //this.app.use(this.paths.auth, require('../routes/auth'));


    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;