const express = require('express');
const router = express.Router();

//controllers
var userController = require('../controllers/user.controller');

//middlewares
var verifySignUp = require('../middlewares/verifySignUp');

//define the routes
router.post('/save', [verifySignUp.checkDuplicateEmail], userController.saveUser);
router.get('/list', userController.listUser);
router.get('/:id', userController.getUserById);

module.exports = router;