// src/controllers/usuariosController.js

/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllUsuarios
 * .getUsuarioById
 * .createUsuario
 * .updateUsuario
 * .deleteUsuario
 */

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require('../db/db_commonJS.js');

const getAllUsuarios = async (req, res) => {
  try {
      const sql = 'SELECT * FROM usuarios';
      const { rows } = await db.query(sql);
      res.json(rows);
  } catch (err) {
      console.error('Error en getAllUsuarios:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getUsuarioById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM usuarios WHERE username = $1';
      const { rows } = await db.query(sql, [id]);
      res.json(rows[0]);
  } catch (err) {
      console.error('Error en getUsuarioById:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createUsuario = async (req, res) => {
  try {
      const { username, email, password, apto_menores } = req.body;
      const sql = 'INSERT INTO usuarios (username, email, password, apto_menores) VALUES ($1, $2, $3, $4) RETURNING *';
      const { rows } = await db.query(sql, [username, email, password, apto_menores]);
      res.json({ message: 'Usuario creado', consulta: rows[0] });
  } catch (err) {
      console.error('Error en createUsuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateUsuario = async (req, res) => {
  try {
      const { id } = req.params;
      const { username, email, password, apto_menores } = req.body;
      const sql = 'UPDATE usuarios SET username = $1, email = $2, password = $3, apto_menores = $4 WHERE username = $5';
      await db.query(sql, [username, email, password, apto_menores, id]);
      res.json({ message: 'Usuario actualizado' });
  } catch (err) {
      console.error('Error en updateUsuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteUsuario = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM usuarios WHERE username = $1';
      await db.query(sql, [id]);
      res.json({ message: 'Usuario borrado con éxito' });
  } catch (err) {
      console.error('Error en deleteUsuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};
//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};

//8- Pasamos a configurar db.js

