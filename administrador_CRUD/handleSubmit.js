import updateTable from './updateTable.js'

const methodSelect = document.getElementById('method');
const tableSelect = document.getElementById('table');
const showAllCheckbox = document.getElementById('showAll');
const PORT = 3000;

export default async function handleSubmit(event) {
  event.preventDefault();
  const method = methodSelect.value;
  const table = tableSelect.value;
  const showAll = showAllCheckbox.checked;
  const id = document.getElementById('id').value;

  let url = `http://localhost:${PORT}/${table}`;
  if (!showAll && id) {
    url += `/${id}`;
  }

  const options = {
    method,
    headers: {
      //'Accept': 'application/json'
      'Content-Type': 'application/json'
    }
  };

  if (method === 'POST' || method === 'PUT') {
    //options.body = jsonData;
    options.body = JSON.stringify({
            // Aquí conviertes el contenido del textarea a JSON
            jsonData
          });
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    updateTable(table, data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Puedes manejar el error aquí si es necesario
  }
}