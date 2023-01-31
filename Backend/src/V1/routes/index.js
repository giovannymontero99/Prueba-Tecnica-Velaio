const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.post('/login', controller.loginController )


router.post('/signup', controller.signUpController )



module.exports = router;