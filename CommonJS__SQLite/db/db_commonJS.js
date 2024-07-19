/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta 
 * con la base de datos. 
 */

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// Abrir una base de datos SQLite y devolver la instancia de conexión
async function db_SQLite() {
  return open({
    filename: 'db/veoveo.sqlite',
    driver: sqlite3.Database
  })
};

// Exportar la instancia de conexión
module.exports = db_SQLite;