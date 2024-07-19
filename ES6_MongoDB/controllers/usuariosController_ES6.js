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
//import db from '../db/db_ES6.js';
/*
//2- Método para obtener todas los usuarios
const getAllUsuarios = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM usuarios';
    console.log("esta es la db: " , db)
    // Utilizamos .query para enviar la consulra a la bbdd
    // Primer parametro la consulta, segundo una función callback
    db.query(sql, (err, results) => {
        //si sucede algun error
        if (err) {console.log(err);return;} 
        //enviamos el resultado en formato json
        res.json(results);
    });
};

//3- Método para obtener usuarios con consultas parametrizadas
const getUsuarioById = (req, res) => {
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    // en la req viaja /movies/1, la expresion {id} estrae el nro 1 de la ruta
    // y la almacena dentro de la variable id
    const { username } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM usuarios WHERE username = ?';

    // Los marcadores de posición se utilizan para evitar la inyección de SQL, 
    // ya que los valores se escapan automáticamente.

    // Interactuamos con la bbdd, pasamos la consulta anterior
    db.query(sql, [username], (err, result) => {
        //en caso de error
        if (err) {console.log(err);return;} 
        //enviamos en formato json
        res.json(result);
    });
};

//4- Método para crear una película
const createUsuario = (req, res) => {
    // Desestructuramos la request
    const { username, email, password, apto_menores } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO usuarios (username, email, password, apto_menores) VALUES (?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [username, email, password, apto_menores], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Usuario creado', usuariosId: result.insertId });
    });
};

//5- Método para modificar una película (COMPLETAR)
const updateUsuario = (req, res)=>{
    // Desestructuramos la peticion
    // const id = req.params.id
    const {username} = req.params;
    const {email, password, apto_menores} = req.body;
    // const title = req.body.title;

    //Consulta SQL con marcadores de posicion
    const sql = 'UPDATE usuarios SET email = ?, password = ?, apto_menores = ?, create_time = ?  WHERE username = ?';

    //Pasamos la consulta
    db.query(sql, [remail, password, create_time, apto_menores, username],(err, result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Usuario actualizado"});
    })
}

//6- Método para borrar una película(COMPLETAR)
const deleteUsuario = (req, res)=>{
    // Desestructuramos la consulta
    const {username} = req.params;

    // Consulta sql para borrar una peli
    const sql = 'DELETE FROM usuarios WHERE username = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[username],(err,result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Usuario borrado con éxito"});
    });
};
*/
/*
/ / / / Controlador si la base de datos es con sqlite:
/ / / /
*/
/*
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
*/
/*
/ / / / Controlador si la base de datos es con postgreSQL:
/ / / /
*/
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
export default {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};

//8- Pasamos a configurar db.js

