// src/controllers/movieController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

//1- Importamos el módulo propio db.
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
import db from '../db/db_ES6.js';


const getAllMovies = async (req, res) => {
  try {
      const sql = 'SELECT * FROM peliculas';
      const results = await db.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
  }
};

const getMovieById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM peliculas WHERE idpeliculas = ?';
      const result = await db.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
  }
};

const createMovie = async (req, res) => {
  try {
      const { ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO peliculas (ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores) VALUES (?, ?, ?, ?, ?, ?)';
      const result = await db.run(sql, [ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Película creada', idpeliculas: result.lastID });
  } catch (err) {
      console.log(err);
  }
};

const updateMovie = async (req, res) => {
  try {
      const { id } = req.params;
      const {ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE peliculas SET ruta_img_peliculas = ?, titulo = ?, descripcion = ?, link = ?, categoria = ?, apto_menores = ? WHERE idpeliculas = ?';
      await db.run(sql, [ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Película actualizada' });
  } catch (err) {
      console.log(err);
  }
};

const deleteMovie = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM peliculas WHERE idpeliculas = ?';
      await db.run(sql, [id]);
      res.json({ message: 'Película borrada con éxito' });
  } catch (err) {
      console.log(err);
  }
};

//7- Exportamos los módulos que serán utilizados en moviesRouter.js
export default {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};

//8- Pasamos a configurar db.js

