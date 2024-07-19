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

//1- Importamos el módulo propio db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
//import db from '../db/db_ES6.js';
/*
//2- Método para obtener todas las series
const getAllSeries = (req, res) => {
    // Creamos una consulta
    const sql = 'SELECT * FROM series';
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

//3- Método para obtener series con consultas parametrizadas
const getSerieById = (req, res) => {
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    // en la req viaja /series/1, la expresion {id} estrae el nro 1 de la ruta
    // y la almacena dentro de la variable id
    const { id } = req.params;

    // Creamos la consulta con marcador de posición
    const sql = 'SELECT * FROM series WHERE id = ?';

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

//4- Método para crear una Serie
const createSerie = (req, res) => {
    // Desestructuramos la request
    const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
    // Creamos la consulta con marcadores de posición
    const sql = 'INSERT INTO series (ruta_img_series, titulo, descripcion, link, categoria, apto_menores) VALUES (?, ?, ?)';
    // Pasamos la consulta
    //.query(consulta, array_con_valores, funcion_callback)
    db.query(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores], (err, result) => {
        //en caso de error
        if (err)  {console.log(err);return;} 
        //enviamos mensaje de exito con info de la peli
        res.json({ message: 'Serie creada', serieId: result.insertId });
    });
};

//5- Método para modificar una Serie (COMPLETAR)
const updateSerie = (req, res)=>{
    // Desestructuramos la peticion
    // const id = req.params.id
    const {id} = req.params;
    const {ruta_img_series, titulo, descripcion, link, categoria, apto_menores} = req.body;
    // const title = req.body.title;

    //Consulta SQL con marcadores de posicion
    const sql = 'UPDATE series SET ruta_img_series = ?, titulo = ?, descripcion = ?, link = ?, categoria = ?, apto_menores = ? WHERE id = ?';

    //Pasamos la consulta
    db.query(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores, id],(err, result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Serie actualizada"});
    })
}

//6- Método para borrar una Serie(COMPLETAR)
const deleteSerie = (req, res)=>{
    // Desestructuramos la consulta
    const {id} = req.params;

    // Consulta sql para borrar una peli
    const sql = 'DELETE FROM series WHERE id = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[id],(err,result)=>{
        //si hay error
        if(err){
            console.log(err);
            return;
        }
        //si todo va bien
        res.json({mensaje: "Serie borrada con éxito"});
    });
};
*/
/*
/ / / / Controlador si la base de datos es con sqlite:
/ / / /
*/
/*
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
*/
/*
/ / / / Controlador si la base de datos es con postgreSQL:
/ / / /
*/
const getAllSeries = async (req, res) => {
  try {
      const sql = 'SELECT * FROM series';
      const { rows } = await db.query(sql);
      res.json(rows);
  } catch (err) {
      console.error('Error en getAllSeries:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getSerieById = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'SELECT * FROM series WHERE idseries = $1';
      const { rows } = await db.query(sql, [id]);
      res.json(rows[0]);
  } catch (err) {
      console.error('Error en getSerieById:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const createSerie = async (req, res) => {
  try {
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'INSERT INTO series (ruta_img_series, titulo, descripcion, link, categoria, apto_menores) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const { rows } = await db.query(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores]);
      res.json({ message: 'Serie creada', consulta: rows[0] });
  } catch (err) {
      console.error('Error en createSerie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateSerie = async (req, res) => {
  try {
      const { id } = req.params;
      const { ruta_img_series, titulo, descripcion, link, categoria, apto_menores } = req.body;
      const sql = 'UPDATE series SET ruta_img_series = $1, titulo = $2, descripcion = $3, link = $4, categoria = $5, apto_menores = $6 WHERE idseries = $7';
      await db.query(sql, [ruta_img_series, titulo, descripcion, link, categoria, apto_menores, id]);
      res.json({ message: 'Serie actualizada' });
  } catch (err) {
      console.error('Error en updateSerie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteSerie = async (req, res) => {
  try {
      const { id } = req.params;
      const sql = 'DELETE FROM series WHERE idseries = $1';
      await db.query(sql, [id]);
      res.json({ message: 'Serie borrada con éxito' });
  } catch (err) {
      console.error('Error en deleteSerie:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
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

