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

//1- Importamos el módulo propio db.
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
import db from '../db/db_ES6.js';

const getAllUsuarios = async (req, res) => {
  try {
      const sql = 'SELECT * FROM usuarios';
      const results = await db.all(sql);
      res.json(results);
  } catch (err) {
      console.log(err);
  }
};

const getUsuarioById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM usuarios WHERE username = ?';
      const result = await db.get(sql, [id]);
      res.json(result);
  } catch (err) {
      console.log(err);
  }
};

const createUsuario = async (req, res) => {
  try {
      const { username, email, password, apto_menores } = req.body;
      const sql = 'INSERT INTO usuarios (username, email, password, apto_menores) VALUES (?, ?, ?, ?)';
      const result = await db.run(sql, [username, email, password, apto_menores]);
      res.json({ message: 'Usuario creado'});
  } catch (err) {
      console.log(err);
  }
};

const updateUsuario = async (req, res) => {
  try {
      const { id } = req.params;
      const { username, email, password, apto_menores } = req.body;
      const sql = 'UPDATE usuarios SET username = ?, email = ?, password = ?, apto_menores = ? WHERE username = ?';
      await db.run(sql, [username, email, password, apto_menores, id]);
      res.json({ message: 'Usuario actualizado' });
  } catch (err) {
      console.log(err);
  }
};

const deleteUsuario = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM usuarios WHERE username = ?';
      await db.run(sql, [id]);
      res.json({ message: 'Usuario borrado con éxito' });
  } catch (err) {
      console.log(err);
  }
};

//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
export default {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};

//8- Pasamos a configurar db.js

