/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 */

import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT, // Puerto por defecto de PostgreSQL
});

pool.on('connect', () => {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
});

export default pool;