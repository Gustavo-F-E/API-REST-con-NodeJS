/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el 
 * módulo mysql2
 */

//1- Importamos el modulo mysql2
import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

//2- Configuracion de conexión MYSQL
const connection = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,// Especifica aquí la base de datos
  password: process.env.PASSWORD,
  port: process.env.PORT
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