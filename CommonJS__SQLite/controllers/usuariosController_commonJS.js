// src/controllers/usuariosController.js

/**
 * El controlador es el que tendrá los cambios más constantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllUsuarios
 * .getUsuarioById
 * .createUsuario
 * .updateUsuario
 * .deleteUsuario
 */

//1- constamos el módulo propio db.
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db_SQLite = require('../db/db_commonJS.js');

const getAllUsuarios = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const sql = 'SELECT * FROM usuarios';
      const results = await dbInstance.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUsuarioById = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'SELECT * FROM usuarios WHERE username = ?';
      const result = await dbInstance.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUsuario = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { username, email, password, apto_menores } = req.body;
      const sql = 'INSERT INTO usuarios (username, email, password, apto_menores) VALUES (?, ?, ?, ?)';
      const result = await dbInstance.run(sql, [username, email, password, apto_menores]);
      res.json({ message: 'Usuario creado', username: result.lastID });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUsuario = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const { username, email, password, apto_menores } = req.body;
      const sql = 'UPDATE usuarios SET username = ?, email = ?, password = ?, apto_menores = ? WHERE username = ?';
      await dbInstance.run(sql, [username, email, password, apto_menores, id]);
      res.json({ message: 'Usuario actualizado' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUsuario = async (req, res) => {
  try {
      const dbInstance = await db_SQLite();
      const { id } = req.params;
      const sql = 'DELETE FROM usuarios WHERE username = ?';
      await dbInstance.run(sql, [id]);
      res.json({ message: 'Usuario borrado con éxito' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
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

