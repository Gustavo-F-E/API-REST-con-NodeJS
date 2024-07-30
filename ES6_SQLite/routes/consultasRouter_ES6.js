// src/routes/consultasRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
import express from 'express';

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el controlador
import consultasController from '../controllers/consultasController_ES6.js';

/* 4- En el controlador programaremos el módulo junto a métodos GET, POST, PUT, DELETE
Dejaremos sólo la declaración de las rutas, con sus métodos 
 y el llamado al controlador con el método específico para cada opción */

// Ruta de listado en general
router.get('/', consultasController.getAllConsultas);
//Ruta para la consulta por id
router.get('/:id', consultasController.getConsultaById);
//Ruta para crear una consulta
router.post('/', consultasController.createConsulta);
//Ruta para actualizar una consulta
router.put('/:id', consultasController.updateConsulta);
//Ruta para actualizar parcialmente una consulta
router.patch('/:id', consultasController.patchConsulta);
//Ruta para borrar una consulta
router.delete('/:id', consultasController.deleteConsulta);

//5- Exportamos el módulo
export default router;

//6- Pasamos a configurar el controlador

