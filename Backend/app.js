const express = require('express');
const app = express();
const login = require('./src/V1/routes/index.js');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connection = require('./src/config/dataAcces');

/**
 * Middlewares:
 */
//Se asigna para ver el trafico en consola.
app.use(cors())

app.use(logger("dev"));

app.use(cookieParser())


/**
 * Se aigna para poder ver datos desde el metodo POST del cliente
 */
app.use(express.urlencoded({extended: true}));



/**
 * Rutas tomadas desde la carpeta routes
 */
app.get('/login',(req,res)=>{
    connection.query('SELECT * FROM login',(err,data)=>{
        res.redirect('http://localhost:3000/admin')
    })
})


module.exports = app;