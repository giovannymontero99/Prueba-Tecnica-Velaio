const bcrypt = require("bcryptjs");
const connection = require("../config/dataAcces");
const valueEmail = async(config)=>{
    const {email,password} = config;
    let isTheSame = null;
    connection.query('SELECT `clave`FROM login WHERE `correo` = ?', [email], (err,data)=>{
        let hash = data[0].clave;
        bcrypt.compare(password,hash,(err,result)=>{
            isTheSame = result;
        })
    })
    return isTheSame;
}

module.exports = valueEmail;