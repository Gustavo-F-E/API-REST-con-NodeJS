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

//1- Importamos el módulo propio db.
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
import db from '../db/db_ES6.js';

const getAllSeries = async (req, res) => {
  try {
      const sql = 'SELECT * FROM series';
      const results = await db.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
  }
};

const getSerieById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM series WHERE idseries = ?';
      const result = await db.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
  }
};

const createSerie = async (req, res) => {
  try {
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO series (ruta_img_series, titulo, descripcion, link, categoria, apto_menores) VALUES (?, ?, ?, ?, ?, ?)';
      const result = await db.run(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Serie creada', idseries: result.lastID });
  } catch (err) {
      console.log(err);
  }
};

const updateSerie = async (req, res) => {
  try {
      const { id } = req.params;
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE series SET ruta_img_series = ?, titulo = ?, descripcion = ?, link = ?, categoria = ?, apto_menores = ? WHERE idseries = ?';
      await db.run(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Serie actualizada' });
  } catch (err) {
      console.log(err);
  }
};

const deleteSerie = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM series WHERE idseries = ?';
      await db.run(sql, [id]);
      res.json({ message: 'Serie borrada con éxito' });
  } catch (err) {
      console.log(err);
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

