/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 */

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Abrir una base de datos SQLite y devolver la instancia de conexión
const db = await open({
    filename: 'db/veoveo.sqlite',
    driver: sqlite3.Database
});

// Exportar la instancia de conexión
export default db;