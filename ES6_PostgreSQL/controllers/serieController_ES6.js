// src/controllers/serieController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllseries
 * .getserieById
 * .createserie
 * .updateserie
 * .deleteserie
 */

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
import db from '../db/db_ES6.js';

const getAllSeries = async (req, res) => {
  try {
      const sql = 'SELECT * FROM series';
      const { rows } = await db.query(sql);
      res.json(rows);
  } catch (err) {
      console.error('Error en getAllSeries:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getSerieById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM series WHERE idseries = $1';
      const { rows } = await db.query(sql, [id]);
      res.json(rows[0]);
  } catch (err) {
      console.error('Error en getSerieById:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createSerie = async (req, res) => {
  try {
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO series (ruta_img_series, titulo, descripcion, link, categoria, apto_menores) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const { rows } = await db.query(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Serie creada', consulta: rows[0] });
  } catch (err) {
      console.error('Error en createSerie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateSerie = async (req, res) => {
  try {
      const { id } = req.params;
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE series SET ruta_img_series = $1, titulo = $2, descripcion = $3, link = $4, categoria = $5, apto_menores = $6 WHERE idseries = $7';
      await db.query(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Serie actualizada' });
  } catch (err) {
      console.error('Error en updateSerie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteSerie = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM series WHERE idseries = $1';
      await db.query(sql, [id]);
      res.json({ message: 'Serie borrada con éxito' });
  } catch (err) {
      console.error('Error en deleteSerie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};
//7- Exportamos los módulos que serán utilizados en seriesRouter.js
export default {
    getAllSeries,
    getSerieById,
    createSerie,
    updateSerie,
    deleteSerie
};

//8- Pasamos a configurar db.js

