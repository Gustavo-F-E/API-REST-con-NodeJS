import updateTable from './updateTable.js'
import handleMethodChange from './handleMethodChange.js'
import handleShowAllChange from './handleShowAllChange.js'
import handleTableChange from './handleTableChange.js'
import handleSubmit from './handleSubmit.js'

document.addEventListener('DOMContentLoaded', () => {
  const methodSelect = document.getElementById('method');
  const tableSelect = document.getElementById('table');
  const showAllCheckbox = document.getElementById('showAll');
  const apiForm = document.getElementById('apiForm');
  const table = document.getElementById('table').value;
  const options = {
  method: 'GET',
  headers: {
    //'Accept': 'application/json'
    'Content-Type': 'application/json'
  }
};
  const PORT = 3000;
  let url = `http://localhost:${PORT}/${table}`;
  console.log(table);

  methodSelect.addEventListener('change', handleMethodChange);
  showAllCheckbox.addEventListener('change', handleShowAllChange);
  tableSelect.addEventListener('change', handleTableChange);
  apiForm.addEventListener('submit', handleSubmit);

  handleMethodChange(); // Initial call to set up form correctly
  handleTableChange();  // Initial call to set up example JSON correctly

  fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Aquí llamamos a la función updateTable con los datos obtenidos
    updateTable(table, data); // Cambia 'consultas' por la tabla que corresponda
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
});


