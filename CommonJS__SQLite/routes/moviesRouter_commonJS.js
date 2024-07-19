// src/routes/moviesRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- constamos el módulo
const express = require('express');

// 2- Instanciamos Router de express
const router = express.Router();

// 3- constamos el controlador
const movieController = require('../controllers/movieController_commonJS.js');

/* 4- En el controlador programaremos el módulo junto a métodos GET, POST, PUT, DELETE
Dejaremos sólo la declaración de las rutas, con sus métodos 
 y el llamado al controlador con el método específico para cada opción */

// Ruta de listado en general
router.get('/', movieController.getAllMovies);
//Ruta para la consulta de peliculas por id
router.get('/:id', movieController.getMovieById);
//Ruta para crear una pelicula
router.post('/', movieController.createMovie);
//Ruta para actualizar una pelicula
router.put('/:id', movieController.updateMovie);
//Ruta para borrar una pelicula
router.delete('/:id', movieController.deleteMovie);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar el controlador

