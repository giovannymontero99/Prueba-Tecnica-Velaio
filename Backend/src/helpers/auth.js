const bcrypt = require("bcryptjs");
const connection = require("../config/dataAcces");

const auth = (confi)=>{
    const { name,LastName,email,password } = confi;
    bcrypt.hash(password,10,(err,passworHash)=>{
        connection.query('INSERT INTO login(`correo`,`clave`,`nombre`,`apellido`) VALUES (?,?,?,?)',[email,passworHash,name,LastName], err => console.log(err) )
    });
}

module.exports = auth;
