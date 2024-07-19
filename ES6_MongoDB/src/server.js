import express from 'express';
import mongoose from 'mongoose';
import consultasRoutes from '../routes/consultasRouter_ES6.js';
import movieRoutes from '../routes/moviesRouter_ES6.js';
import serieRoutes from '../routes/seriesRouter_ES6.js';
import usuariosRoutes from '../routes/usuariosRouter_ES6.js';

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/veoveo', { useNewUrlParser: true, useUnifiedTopology: true });

//const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mi_basedatos';

/*mongoose.connect('mongodb://localhost:27017/veoveo')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error en la conexión a MongoDB:', err));
*/
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectados a MongoDB'));

// Routes
app.use('/consultas', consultasRoutes.router);
//app.use('/movies', movieRoutes.router);
//app.use('/series', serieRoutes.router);
//app.use('/usuario', usuariosRoutes.router);

// Server start
const PORT = 3000;

//7- Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
  console.log(`Ctrl+click para dirigirse a la página web: http://localhost:${PORT}/`);
  console.log(`Ctrl+c para salir de la terminal de NodeJS`);
});

//8- Pasamos a configurar el router

