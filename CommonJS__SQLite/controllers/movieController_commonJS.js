// src/controllers/movieController.js

/**
 * El controlador es el que tendrá los cambios más constantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

//1- constamos el módulo propio db.
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db_SQLite = require('../db/db_commonJS.js');

const getAllMovies = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const sql = 'SELECT * FROM peliculas';
      const results = await dbInstance.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMovieById = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'SELECT * FROM peliculas WHERE idpeliculas = ?';
      const result = await dbInstance.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createMovie = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO peliculas (ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores) VALUES (?, ?, ?, ?, ?, ?)';
      const result = await dbInstance.run(sql, [ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Película creada', idpeliculas: result.lastID });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateMovie = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const { ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE peliculas SET ruta_img_peliculas = ?, titulo = ?, descripcion = ?, link = ?, categoria = ?, apto_menores = ? WHERE idpeliculas = ?';
      await dbInstance.run(sql, [ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Película actualizada' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteMovie = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'DELETE FROM peliculas WHERE idpeliculas = ?';
      await dbInstance.run(sql, [id]);
      res.json({ message: 'Película borrada con éxito' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

//7- Exportamos los módulos que serán utilizados en moviesRouter.js
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};

//8- Pasamos a configurar db.js

