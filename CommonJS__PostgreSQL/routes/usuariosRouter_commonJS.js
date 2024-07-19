// 1- Importamos el módulo
const express = require('express');

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio usuariosController (a realizarlo a futuro)
const usuariosController = require('../controllers/usuariosController_commonJS.js');

// 4- En usuariosController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al usuariosController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', usuariosController.getAllUsuarios);
//Ruta para la consulta de peliculas por id
router.get('/:id', usuariosController.getUsuarioById);
//Ruta para crear una pelicula
router.post('/', usuariosController.createUsuario);
//Ruta para actualizar una pelicula
router.put('/:id', usuariosController.updateUsuario);
//Ruta para borrar una pelicula
router.delete('/:id', usuariosController.deleteUsuario);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar usuariosController.js
