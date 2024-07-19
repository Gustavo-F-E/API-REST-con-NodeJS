// src/controllers/consultasController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllConsultas
 * .getConsultaById
 * .createConsulta
 * .updateConsulta
 * .deleteConsulta
 */

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require('../db/db_commonJS.js');

const getAllConsultas = async (req, res) => {
  try {
      const sql = 'SELECT * FROM consultas';
      const { rows } = await db.query(sql);
      res.json(rows);
  } catch (err) {
      console.error('Error en getAllConsultas:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getConsultaById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM consultas WHERE idconsultas = $1';
      const { rows } = await db.query(sql, [id]);
      res.json(rows[0]);
  } catch (err) {
      console.error('Error en getConsultaById:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createConsulta = async (req, res) => {
  try {
      const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
      const sql = 'INSERT INTO consultas (nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema) VALUES ($1, $2, $3, $4) RETURNING *';
      const { rows } = await db.query(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema]);
      res.json({ message: 'Consulta creada', consulta: rows[0] });
  } catch (err) {
      console.error('Error en createConsulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateConsulta = async (req, res) => {
  try {
      const { id } = req.params;
      const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
      const sql = 'UPDATE consultas SET nombre_y_apellido = $1, tipo_consulta = $2, URL_captura_problema = $3, descripcion_problema = $4 WHERE idconsultas = $5';
      await db.query(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema, id]);
      res.json({ message: 'Consulta actualizada' });
  } catch (err) {
      console.error('Error en updateConsulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteConsulta = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM consultas WHERE idconsultas = $1';
      await db.query(sql, [id]);
      res.json({ message: 'Consulta borrada con éxito' });
  } catch (err) {
      console.error('Error en deleteConsulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};


//7- Exportamos los módulos que serán utilizados en consultasRouter.js
module.exports = {
  getAllConsultas,
  getConsultaById,
  createConsulta,
  updateConsulta,
  deleteConsulta
};