const express = require('express');
const controller = require('../controller/accountsController');

const router = express.Router();

router.get('/login', controller.login);
router.post('/login', controller.loginPost);
router.get('/register', controller.register);
router.post('/register', controller.registerPost);

module.exports = router;