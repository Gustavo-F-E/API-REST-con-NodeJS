// index.js
import updateTable from './updateTable.js';

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
  const jsonData = document.getElementById('jsonData').value;

  let url = `http://localhost:${PORT}/${table}`;
  if (!showAll && id) {
    url += `/${id}`;
  }

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method === 'POST' || method === 'PUT') {
    options.body = jsonData;
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${errorText}`);
    }
    const data = await response.json();
    updateTable(table, data);
  } catch (error) {
    console.error('Error fetching data:', error);
    alert(`Error: ${error.message}`);
  }
}
