const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Importamos el controlador de usuarios

router.post('/users/...', userController.createUser);

module.exports = router;