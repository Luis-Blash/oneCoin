const express = require('express')
const cors = require('cors')

const { dbConecction } = require('../db/config')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        // Path Routes
        this.path = {
            user: '/api/user'
        }

        // Database
        this.conecctionDB();

        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    async conecctionDB(){
        await dbConecction()
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