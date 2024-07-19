// src/controllers/serieController.js

/**
 * El controlador es el que tendrá los cambios más constantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllseries
 * .getserieById
 * .createserie
 * .updateserie
 * .deleteserie
 */

//1- constamos el módulo propio db.
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db_SQLite = require('../db/db_commonJS.js');

const getAllSeries = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const sql = 'SELECT * FROM series';
      const results = await dbInstance.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSerieById = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'SELECT * FROM series WHERE idseries = ?';
      const result = await dbInstance.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createSerie = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO series (ruta_img_series, titulo, descripcion, link, categoria, apto_menores) VALUES (?, ?, ?, ?, ?, ?)';
      const result = await dbInstance.run(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Serie creada', idseries: result.lastID });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateSerie = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE series SET ruta_img_series = ?, titulo = ?, descripcion = ?, link = ?, categoria = ?, apto_menores = ? WHERE idseries = ?';
      await dbInstance.run(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Serie actualizada' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteSerie = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'DELETE FROM series WHERE idseries = ?';
      await dbInstance.run(sql, [id]);
      res.json({ message: 'Serie borrada con éxito' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

//7- Exportamos los módulos que serán utilizados en seriesRouter.js
module.exports = {
    getAllSeries,
    getSerieById,
    createSerie,
    updateSerie,
    deleteSerie
};

//8- Pasamos a configurar db.js

