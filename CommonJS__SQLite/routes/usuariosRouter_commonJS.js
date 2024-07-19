// src/routes/usuariosRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- constamos el módulo
const express = require('express');

// 2- Instanciamos Router de express
const router = express.Router();

// 3- constamos el controlador
const usuariosController = require('../controllers/usuariosController_commonJS.js');

/* 4- En el controlador programaremos el módulo junto a métodos GET, POST, PUT, DELETE
Dejaremos sólo la declaración de las rutas, con sus métodos 
 y el llamado al controlador con el método específico para cada opción */

// Ruta de listado en general
router.get('/', usuariosController.getAllUsuarios);
//Ruta para la consulta de usuarios por id
router.get('/:id', usuariosController.getUsuarioById);
//Ruta para crear un usuario
router.post('/', usuariosController.createUsuario);
//Ruta para actualizar un usuario
router.put('/:id', usuariosController.updateUsuario);
//Ruta para borrar un usuario
router.delete('/:id', usuariosController.deleteUsuario);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar el controlador

