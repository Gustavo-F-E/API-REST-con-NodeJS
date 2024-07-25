/*export default function post(URL_API_REST, tableSelect, fetchPostBtn, postTable) {
  fetchPostBtn.addEventListener('click', () => {
    const table = tableSelect;
    const nombre_y_apellido = document.getElementById('post_nombre_y_apellido').value;
    const tipo_consulta = document.getElementById('post_tipo_consulta').value;
    const URL_captura_problema = document.getElementById('post_URL_captura_problema').value;
    const descripcion_problema = document.getElementById('post_descripcion_problema').value;

    const newRow = {
      nombre_y_apellido,
      tipo_consulta,
      URL_captura_problema,
      descripcion_problema
    };

    fetch(`${URL_API_REST}/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRow),
    })
    .then(response => response.json())
      .then(data => {
        alert('Registro agregado con éxito');
      // Limpiar la tabla antes de agregar nuevos datos
      postTable.innerHTML = '';

      // Agregar los datos de respuesta a la tabla
      const row = postTable.insertRow();
      if (table === 'consultas') {
        row.insertCell().textContent = data.nombre_y_apellido;
        row.insertCell().textContent = data.tipo_consulta;
        row.insertCell().textContent = data.URL_captura_problema;
        row.insertCell().textContent = data.descripcion_problema;
        // Agrega más celdas según tu modelo
      }
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    });
  });
}
*/
export default function post(URL_API_REST, tableSelect, fetchPostBtn, postTable) {
  fetchPostBtn.addEventListener('click', () => {
    const table = tableSelect; // Cambiado a tableSelect.value para obtener el valor seleccionado
    const nombre_y_apellido = document.getElementById('post_nombre_y_apellido').value;
    const tipo_consulta = document.getElementById('post_tipo_consulta').value;
    const URL_captura_problema = document.getElementById('post_URL_captura_problema').value;
    const descripcion_problema = document.getElementById('post_descripcion_problema').value;

    const newRow = {
      nombre_y_apellido,
      tipo_consulta,
      URL_captura_problema,
      descripcion_problema
    };

    fetch(`${URL_API_REST}/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRow),
    })
    .then(response => response.json())
    .then(data => {
      alert('Registro agregado con éxito');
      
      // Obtener el tbody y agregar una nueva fila
      const tbody = postTable.querySelector('tbody');
      const row = tbody.insertRow();
      if (table === 'consultas') {
        row.insertCell().textContent = data.nombre_y_apellido;
        row.insertCell().textContent = data.tipo_consulta;
        row.insertCell().textContent = data.URL_captura_problema;
        row.insertCell().textContent = data.descripcion_problema;
        // Agrega más celdas según tu modelo
      }
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    });
  });
}
