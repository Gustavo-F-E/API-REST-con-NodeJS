/*export default function update(URL_API_REST, tableSelect, fetchPutBtn, putTable, putIdInput) {
  fetchPutBtn.addEventListener('click', () => {
    const table = tableSelect;
    const id = putIdInput.value.trim();;

    if (id) {
      const nombre_y_apellido = document.getElementById('put_nombre_y_apellido').value;
      const tipo_consulta = document.getElementById('put_tipo_consulta').value;
      const URL_captura_problema = document.getElementById('put_URL_captura_problema').value;
      const descripcion_problema = document.getElementById('put_descripcion_problema').value;

      const updatedData = {
        nombre_y_apellido,
        tipo_consulta,
        URL_captura_problema,
        descripcion_problema
      };

      fetch(`${URL_API_REST}/${table}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
      .then(response => response.json())
      .then(data => {
        alert('Registro actualizado con éxito');

        putTable.innerHTML = '';

        // Agregar los datos de respuesta a la tabla
        const row = putTable.insertRow();
        if (table === 'consultas') {

          row.insertCell().textContent = data.nombre_y_apellido;
          row.insertCell().textContent = data.tipo_consulta;
          row.insertCell().textContent = data.URL_captura_problema;
          row.insertCell().textContent = data.descripcion_problema;
          // Agrega más celdas según tu modelo
        }
      })
      .catch(error => {
        console.error('Error al actualizar los datos:', error);
      });
    } else {
      alert("Se requiere un ID para actualizar el registro.");
    };
  });
}
*/

export default function update(URL_API_REST, tableSelect, fetchPutBtn, putTable, putIdInput) {
  fetchPutBtn.addEventListener('click', () => {
    const table = tableSelect; // Cambiado a tableSelect.value para obtener el valor seleccionado
    const id = putIdInput.value.trim();

    if (id) {
      const nombre_y_apellido = document.getElementById('put_nombre_y_apellido').value;
      const tipo_consulta = document.getElementById('put_tipo_consulta').value;
      const URL_captura_problema = document.getElementById('put_URL_captura_problema').value;
      const descripcion_problema = document.getElementById('put_descripcion_problema').value;

      const updatedData = {
        nombre_y_apellido,
        tipo_consulta,
        URL_captura_problema,
        descripcion_problema
      };

      fetch(`${URL_API_REST}/${table}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
      .then(response => response.json())
      .then(data => {
        alert('Registro actualizado con éxito');

        // Obtener el tbody y actualizar la fila existente
        const tbody = putTable.querySelector('tbody');
        const rows = tbody.getElementsByTagName('tr');
        for (let row of rows) {
          if (row.cells[0].textContent === id) { // Asegúrate de que el ID coincida
            row.cells[0].textContent = data.nombre_y_apellido;
            row.cells[1].textContent = data.tipo_consulta;
            row.cells[2].textContent = data.URL_captura_problema;
            row.cells[3].textContent = data.descripcion_problema;
            break;
          }
        }
      })
      .catch(error => {
        console.error('Error al actualizar los datos:', error);
      });
    } else {
      alert("Se requiere un ID para actualizar el registro.");
    }
  });
}
