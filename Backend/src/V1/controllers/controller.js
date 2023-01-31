const auth = require('../../helpers/auth');
const valueEmail = require('../../helpers/valueEmail');

const controller = {
    signUpController : (req,res)=>{
        auth( req.body );
        res.status(200);
        res.redirect('http://localhost:3000/');
    },
    loginController : (req,res)=>{
        if(valueEmail( req.body )){
            res.status(200);
            res.send({same: true})
        }else{
            res.status(200);
            res.send({same: false})
        }
    }
}   

module.exports = controller;