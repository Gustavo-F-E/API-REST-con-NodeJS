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
import mysql from "mysql2";

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

export default connection;
*/
/********************************************************************
*************************** SQLite **********************************
********************************************************************/
/*
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Abrir una base de datos SQLite y devolver la instancia de conexión
const db = await open({
    filename: 'db/veoveo.sqlite',
    driver: sqlite3.Database
});

// Exportar la instancia de conexión
export default db;
*/
/********************************************************************
*************************** PostgreSQL ******************************
********************************************************************/
/*
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'veoveo',
    password: 'gsWwKYvlg5231z6l1YMF',
    port: 5432, // Puerto por defecto de PostgreSQL
});

pool.on('connect', () => {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
});

export default pool;
*/
/********************************************************************
*************************** MongoDB *********************************
********************************************************************/

import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/veoveo';

mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos MongoDB');
});

export default mongoose;