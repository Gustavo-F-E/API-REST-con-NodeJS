// src/server_commonJS.js
/**
 * Punto principal de acceso al servidor
 */

//1- Importamos express
const express = require('express');
const cors = require('cors');
//Atencion: para cambiar de commonJS a ES6, se debe cambiar el package.json colocando en algún lugar ' "type": "module", '
//import express from 'express';

//2- Instanciamos express
const app = express();
app.use(cors());

//3- Importamos el módulo movieRoutes (se lo diseñará a futuro)
const consultasRoutes = require('../routes/consultasRouter_commonJS');
const movieRoutes = require('../routes/moviesRouter_commonJS');
const serieRoutes = require('../routes/seriesRouter_commonJS');
const usuariosRoutes = require('../routes/usuariosRouter_commonJS');

//4- Declaramos el puerto
const PORT = 3000; 

//5- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());

//6- Prefijo principal de las rutas y delegación de las sub-rutas
app.use('/consultas', consultasRoutes);
app.use('/movies', movieRoutes);
app.use('/series', serieRoutes);
app.use('/usuario', usuariosRoutes);

//7- Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
  console.log(`Ctrl+click para dirigirse a la página web: http://localhost:${PORT}/`);
  console.log(`Ctrl+c para salir de la terminal de NodeJS`);
});

//8- Pasamos a configurar el router

