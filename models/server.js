const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // Path Routes
        this.path = {
            user: '/api/user'
        }

        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares(){
        // cors
        this.app.use(cors());
        // JSON
        this.app.use(express.json());
        // Public
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.path.user, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => console.log(`port listening ${this.port}`))
    }
}

module.exports = Server;