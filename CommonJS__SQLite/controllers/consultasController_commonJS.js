// controllers/consultasController.js

/**
 * El controlador es el que tendrá los cambios más constantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllConsultas
 * .getConsultaById
 * .createConsulta
 * .updateConsulta
 * .deleteConsulta
 */

/*1- constamos el módulo propio db.
El objeto db posee los métodos para conectar con la base de datos. 
Es la conexión a la base de datos.*/
const db_SQLite = require('../db/db_commonJS.js');

const getAllConsultas = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const sql = 'SELECT * FROM consultas';
      const results = await dbInstance.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getConsultaById = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'SELECT * FROM consultas WHERE idconsultas = ?';
      const result = await dbInstance.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createConsulta = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
      const sql = 'INSERT INTO consultas (nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema) VALUES (?, ?, ?, ?)';
      const result = await dbInstance.run(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema]);
      res.json({ message: 'Consulta creada', idconsultas: result.lastID });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateConsulta = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
      const sql = 'UPDATE consultas SET nombre_y_apellido = ?, tipo_consulta = ?, URL_captura_problema = ?, descripcion_problema = ? WHERE idconsultas = ?';
      await dbInstance.run(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema, id]);
      res.json({ message: 'Consulta actualizada' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteConsulta = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'DELETE FROM consultas WHERE idconsultas = ?';
      await dbInstance.run(sql, [id]);
      res.json({ message: 'Consulta borrada con éxito' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
module.exports = {
  getAllConsultas,
  getConsultaById,
  createConsulta,
  updateConsulta,
  deleteConsulta
};

//8- Pasamos a configurar db.js