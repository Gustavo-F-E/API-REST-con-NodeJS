// 1- Importamos el módulo
import express from "express";

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio serieController (a realizarlo a futuro)
import serieController from '../controllers/serieController_ES6.js';

// 4- En serieController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al serieController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', serieController.getAllSeries);
//Ruta para la consulta de peliculas por id
router.get('/:id', serieController.getSerieById);
//Ruta para crear una pelicula
router.post('/', serieController.createSerie);
//Ruta para actualizar una pelicula
router.put('/:id', serieController.updateSerie);
//Ruta para borrar una pelicula
router.delete('/:id', serieController.deleteSerie);

//5- Exportamos el módulo
export default router;

//6- Pasamos a configurar serieController.js