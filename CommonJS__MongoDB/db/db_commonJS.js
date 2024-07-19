/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el 
 * módulo mysql2
 */

/********************************************************************
*************************** MYSQL ***********************************
********************************************************************/
/*
//1- Importamos el modulo mysql2
const mysql = require("mysql2");

//2- Configuracion de conexión MYSQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "veoveo" // Especifica aquí la base de datos
});
//3- Conectamos
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;
*/

/********************************************************************
*************************** SQLite **********************************
********************************************************************/
/*
//1- Importamos el modulo pg (npm install sqlite3)
const sqlite3 = require('sqlite3').verbose();

//2- Configuracion de conexión SQLite
const connection = new sqlite3.Database('./veoveo.db', (err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.message);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});
//3- Conectamos
module.exports = connection;
*/
/********************************************************************
*************************** PostgreSQL ******************************
********************************************************************/
/*
const { Client } = require('pg');

// Configura la conexión a la base de datos
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'veoveo',
    password: 'gsWwKYvlg5231z6l1YMF',
    port: 5432, // Puerto por defecto de PostgreSQL
});

// Conecta al cliente PostgreSQL
client.connect()
    .then(() => {
        console.log('Conexión exitosa a PostgreSQL');
    })
    .catch(err => {
        console.error('Error al conectar con PostgreSQL', err);
    });

module.exports = client;
*/


/********************************************************************
*************************** MongoDB *********************************
********************************************************************/
/*
//1- Importamos el modulo mysql2
const mysql = require("mysql2");

//2- Configuracion de conexión MYSQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "veoveo" // Especifica aquí la base de datos
});

//3- Conectamos
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;*/