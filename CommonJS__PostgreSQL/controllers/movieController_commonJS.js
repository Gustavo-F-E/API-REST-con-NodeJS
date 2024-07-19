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

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require('../db/db_commonJS.js');

const getAllMovies = async (req, res) => {
  try {
      const sql = 'SELECT * FROM peliculas';
      const { rows } = await db.query(sql);
      res.json(rows);
  } catch (err) {
      console.error('Error en getAllMovies:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getMovieById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM peliculas WHERE idpeliculas = $1';
      const { rows } = await db.query(sql, [id]);
      res.json(rows[0]);
  } catch (err) {
      console.error('Error en getMovieById:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createMovie = async (req, res) => {
  try {
      const { ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO peliculas (ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const { rows } = await db.query(sql, [ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Película creada', consulta: rows[0] });
  } catch (err) {
      console.error('Error en createMovie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateMovie = async (req, res) => {
  try {
      const { id } = req.params;
      const { ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE peliculas SET ruta_img_peliculas = $1, titulo = $2, descripcion = $3, link = $4, categoria = $5, apto_menores = $6 WHERE idpeliculas = $7';
      await db.query(sql, [ruta_img_peliculas, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Película actualizada' });
  } catch (err) {
      console.error('Error en updateMovie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteMovie = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM peliculas WHERE idpeliculas = $1';
      await db.query(sql, [id]);
      res.json({ message: 'Película borrada con éxito' });
  } catch (err) {
      console.error('Error en deleteMovie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
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