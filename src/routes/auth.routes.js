const express = require('express');
const router = express.Router(); // Creación de un router de Express para manejar las rutas de autenticación

const authController = require('../controllers/auth.controller'); // Importamos el controlador de autenticación

// Definimos la ruta para iniciar sesión
router.post('/auth/login', authController.login);

module.exports = router; // Exportamos el router para su uso en la aplicación
