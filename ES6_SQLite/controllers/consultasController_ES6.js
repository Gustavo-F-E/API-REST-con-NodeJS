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

/*1- Importamos el módulo propio db.
El objeto db posee los métodos para conectar con la base de datos. 
Es la conexión a la base de datos.*/
import db from '../db/db_ES6.js';

const getAllConsultas = async (req, res) => {
    try {
        const sql = 'SELECT * FROM consultas';
        const results = await db.all(sql);
        res.json(results);
    } catch (err) {
        console.log(err);
    }
};

const getConsultaById = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'SELECT * FROM consultas WHERE idconsultas = ?';
        const result = await db.get(sql, [id]);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
};

const createConsulta = async (req, res) => {
    try {
        const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
        const sql = 'INSERT INTO consultas (nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema) VALUES (?, ?, ?, ?)';
        const result = await db.run(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema]);
        res.json({ message: 'Consulta creada', idconsultas: result.lastID });
    } catch (err) {
        console.log(err);
    }
};

const updateConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
        const sql = 'UPDATE consultas SET nombre_y_apellido = ?, tipo_consulta = ?, URL_captura_problema = ?, descripcion_problema = ? WHERE idconsultas = ?';
        await db.run(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema, id]);
        res.json({ message: 'Consulta actualizada' });
    } catch (err) {
        console.log(err);
    }
};

const patchConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const fieldsToUpdate = req.body;
        const fieldNames = Object.keys(fieldsToUpdate);

        if (fieldNames.length === 0) {
            return res.status(400).json({ message: "No fields to update" });
        }

        const fieldPlaceholders = fieldNames
            .map((field) => `${field} = ?`)
            .join(", ");
        const fieldValues = Object.values(fieldsToUpdate);

        const sql = `UPDATE consultas SET ${fieldPlaceholders} WHERE idconsultas = ?`;
        await db.run(sql, [...fieldValues, id]);

        res.json({ message: "Consulta actualizada" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al actualizar la consulta" });
    }
};

const deleteConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM consultas WHERE idconsultas = ?';
        await db.run(sql, [id]);
        res.json({ message: 'Consulta borrada con éxito' });
    } catch (err) {
        console.log(err);
    }
};
//7- Exportamos los módulos que serán utilizados en usuariosRouter.js
export default {
  getAllConsultas,
  getConsultaById,
  createConsulta,
  updateConsulta,
  patchConsulta,
  deleteConsulta
};

//8- Pasamos a configurar db.js