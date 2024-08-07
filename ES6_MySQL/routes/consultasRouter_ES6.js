// 1- Importamos el módulo
import express from 'express';

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio consultasController (a realizarlo a futuro)
import consultasController from '../controllers/consultasController_ES6.js';

// 4- En consultasController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al consultasController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', consultasController.getAllConsultas);
//Ruta para la consulta de peliculas por id
router.get('/:id', consultasController.getConsultaById);
//Ruta para crear una pelicula
router.post('/', consultasController.createConsulta);
//Ruta para actualizar una pelicula
router.put('/:id', consultasController.updateConsulta);
//Ruta para borrar una pelicula
router.delete('/:id', consultasController.deleteConsulta);

//5- Exportamos el módulo
export default router;

//6- Pasamos a configurar consultasController.js

