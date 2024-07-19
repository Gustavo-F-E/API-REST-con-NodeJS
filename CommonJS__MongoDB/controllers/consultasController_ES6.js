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
import db from '../db/db_ES6.js';
/*
//2- Método para obtener todas las consultas
const getAllConsultas = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM consultas';

    // Utilizamos .query para enviar la consulra a la bbdd
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //si sucede algun error
        if (err) {console.log(err);return;} 
        //enviamos el resultado en formato json
        res.json(results);
    });
};

//3- Método para obtener consultas con consultas parametrizadas
const getConsultaById = (req, res) => {
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    // en la req viaja /consultass/1, la expresion {id} estrae el nro 1 de la ruta
    // y la almacena dentro de la variable id
    const { id } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM consultas WHERE id = ?';

    // Los marcadores de posición se utilizan para evitar la inyección de SQL, 
    // ya que los valores se escapan automáticamente.

    // Interactuamos con la bbdd, pasamos la consulta anterior
    db.query(sql, [id], (err, result) => {
        //en caso de error
        if (err) {console.log(err);return;} 
        //enviamos en formato json
        res.json(result);
    });
};

//4- Método para crear una película
const createConsulta = (req, res) => {
    // Desestructuramos la request
    const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO consultas (nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema) VALUES (?, ?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Consulta creada', id: result.insertId });
    });
};

//5- Método para modificar una película (COMPLETAR)
const updateConsulta = (req, res)=>{
    // Desestructuramos la peticion
    // const id = req.params.id
    const {id} = req.params;
    const {nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema} = req.body;
    // const title = req.body.title;

    //Consulta SQL con marcadores de posicion
    const sql = 'UPDATE consultas SET nombre_y_apellido = ?, tipo_consulta = ?, URL_captura_problema = ?, descripcion_problema = ? WHERE id = ?';

    //Pasamos la consulta
    db.query(sql, [nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema, id],(err, result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Consulta actualizada"});
    })
}

//6- Método para borrar una película(COMPLETAR)
const deleteConsulta = (req, res)=>{
    // Desestructuramos la consulta
    const {id} = req.params;

    // Consulta sql para borrar una peli
    const sql = 'DELETE FROM consultas WHERE id = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[id],(err,result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Consulta borrada con éxito"});
    });
};
*/



/*
/ / / / Controlador si la base de datos es con sqlite:
/ / / /
*/
/*
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
*/
/*
/ / / / Controlador si la base de datos es con postgreSQL:
/ / / /
*/
/*
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
export default {
  getAllConsultas,
  getConsultaById,
  createConsulta,
  updateConsulta,
  deleteConsulta
};
*/
/*
/ / / / Controlador si la base de datos es con mongoDB:
/ / / /
*/
// controllers/consultasController_ES6.js
import Consulta from '../db/models_mongoDB.js';

const getAllConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.find();
    res.json(consultas);
  } catch (err) {
    console.error('Error en getAllConsultas:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
/*
//const getConsultaById = async (req, res) => {
//  try {
//    const { id } = req.params;
//    const consulta = await Consulta.findById(id);
//    res.json(consulta);
//  } catch (err) {
//    console.error('Error en getConsultaById:', err);
//    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
*/
  async function getConsultaById(req, res, next) {
    let consulta
    try {
      consulta = await Consulta.findById(req.params.id)
      if (consulta == null) {
        return res.status(404).json({ message: `No se pudo encontrar la Consulta ${id}` })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.subscriber = subscriber
    next()
  }

/*
const createConsulta = async (req, res) => {
  try {
    const { id, nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
    const nuevaConsulta = new Consulta({ nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema });
    const consultaGuardada = await nuevaConsulta.save();
    res.json({ message: 'Consulta creada', consulta: consultaGuardada });
  } catch (err) {
    console.error('Error en createConsulta:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
*/
const createConsulta = async (req, res) => {
    const nuevaConsulta = new Consulta({
    id: req.body.id,
    nombre_y_apellido: req.body.nombre_y_apellido,
    tipo_consulta: req.body.tipo_consulta,
    URL_captura_problema: req.body.URL_captura_problema,
    descripcion_problema: req.body.descripcion_problema
    })
    try {
      const newConsulta = await nuevaConsulta.save();
      res.status(201).json(newConsulta)
    } catch (err) {
      console.error('Error en createConsulta:', err);
      res.status(400).json({ message: err.message });
    }
};

const updateConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema } = req.body;
    const consultaActualizada = await Consulta.findByIdAndUpdate(id, { nombre_y_apellido, tipo_consulta, URL_captura_problema, descripcion_problema }, { new: true });
    res.json({ message: 'Consulta actualizada', consulta: consultaActualizada });
  } catch (err) {
    console.error('Error en updateConsulta:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    await Consulta.findByIdAndDelete(id);
    res.json({ message: 'Consulta borrada con éxito' });
  } catch (err) {
    console.error('Error en deleteConsulta:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default {
  getAllConsultas,
  getConsultaById,
  createConsulta,
  updateConsulta,
  deleteConsulta,
};

//8- Pasamos a configurar db.js

