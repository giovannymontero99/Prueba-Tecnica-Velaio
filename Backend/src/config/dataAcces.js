const mysql = require('mysql2');
const connectionConfig = require('./connectionConfig.js')

const connection = mysql.createConnection(connectionConfig)

connection.connect(err => err? console.log(err) : console.log('Conexion establecida'))

module.exports = connection;