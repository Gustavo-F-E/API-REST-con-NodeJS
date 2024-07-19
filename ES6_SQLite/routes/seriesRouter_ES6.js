// src/routes/seriesRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
import express from "express";

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el controlador
import serieController from '../controllers/serieController_ES6.js';

/* 4- En el controlador programaremos el módulo junto a métodos GET, POST, PUT, DELETE
Dejaremos sólo la declaración de las rutas, con sus métodos 
 y el llamado al controlador con el método específico para cada opción */

// Ruta de listado en general
router.get('/', serieController.getAllSeries);
//Ruta para la consulta de series por id
router.get('/:id', serieController.getSerieById);
//Ruta para crear una serie
router.post('/', serieController.createSerie);
//Ruta para actualizar una serie
router.put('/:id', serieController.updateSerie);
//Ruta para borrar una serie
router.delete('/:id', serieController.deleteSerie);

//5- Exportamos el módulo
export default router;

//6- Pasamos a configurar el controlador

