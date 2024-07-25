import getAll from "./getAll.js";
import getById from "./getById.js";
import post from "./post.js";
import update from "./update.js";
import del from "./delete.js";
//import render_table from "./render_table.js"

const URL_API_REST = 'http://localhost:3000';
//const table = 'consultas'


document.addEventListener('DOMContentLoaded', () => {
  const fetchGetAllBtn = document.getElementById('fetchGetAllBtn');
  const getAllTable = document.getElementById('getAllTable').getElementsByTagName('tbody')[0];
  const fetchGetByIDBtn = document.getElementById('fetchGetByIDBtn');
  const getByIdInput = document.getElementById('getByIdInput');
  const getByIdTable = document.getElementById('getByIdTable').getElementsByTagName('tbody')[0];
  const fetchPostBtn = document.getElementById('fetchPostBtn');
  const postTable = document.getElementById('postTable').querySelector('tbody');
  const fetchPutBtn = document.getElementById('fetchPutBtn');
  const putTable = document.getElementById('putTable').querySelector('tbody');
  const putIdInput = document.getElementById('putIdInput');
  const fetchDelBtn = document.getElementById('fetchDelBtn');
  const delIdInput = document.getElementById('delIdInput');
  
  // Event listener para cambios en el dropdown
  const tableSelect = 'consultas';
  //const h1 = document.getElementById('h1');
  //const metodo_rest = document.getElementById('metodo_rest');

  //tableSelect.addEventListener('change', () => {
  //  render_table(tableSelect, getByIdTable, postTable, putTable, //getAllTable);
  //});

  getAll(URL_API_REST, tableSelect, fetchGetAllBtn, getAllTable);
  getById(URL_API_REST, tableSelect, fetchGetByIDBtn, getByIdInput, getByIdTable);
  post(URL_API_REST, tableSelect, fetchPostBtn, postTable);
  update(URL_API_REST, tableSelect, fetchPutBtn, putTable, putIdInput);
  del(URL_API_REST, tableSelect, fetchDelBtn, delIdInput);
});


/*
Para mañana: hacer HTML personalizado para cada tabla
*/