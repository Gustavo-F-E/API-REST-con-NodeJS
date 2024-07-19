// src/server_ES6.js
/**
 * Punto principal de acceso al servidor
 */

//1- Importamos express
//Atencion: para cambiar de commonJS a ES6, se debe cambiar el package.json colocando en algún lugar ' "type": "module", '
import express from 'express';
import cors from 'cors';

//2- Instanciamos express
const app = express();
app.use(cors());

//3- Importamos las rutas
import consultasRoutes  from '../routes/consultasRouter_ES6.js';
import movieRoutes  from '../routes/moviesRouter_ES6.js';
import serieRoutes  from '../routes/seriesRouter_ES6.js';
import usuariosRoutes  from '../routes/usuariosRouter_ES6.js';

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

