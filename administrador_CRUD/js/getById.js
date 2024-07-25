export default function getById(URL_API_REST, tableSelect, fetchGetByIDBtn, getByIdInput, getByIdTable) {
  fetchGetByIDBtn.addEventListener('click', () => {
    const table = tableSelect;
    const id = getByIdInput.value.trim();
    if (id) {
      fetch(`${URL_API_REST}/${table}/${id}`)
        .then(response => response.json())
        .then(data => {
          // Limpiar la tabla antes de agregar el nuevo dato
          getByIdTable.innerHTML = '';

          if (data) {
            // Agregar la consulta como una nueva fila en la tabla
            const row = getByIdTable.insertRow();
            if (table === 'consultas') {
              const id = row.insertCell();
              const nombre_y_apellido = row.insertCell();
              const tipo_consulta = row.insertCell();
              const URL_captura_problema = row.insertCell();
              const descripcion_problema = row.insertCell();
              // Agrega más celdas según tu modelo
              id.textContent = data.idconsultas;
              nombre_y_apellido.textContent = data.nombre_y_apellido
              tipo_consulta.textContent = data.tipo_consulta;
              URL_captura_problema.textContent = data.URL_captura_problema
              descripcion_problema.textContent = data.descripcion_problema;
              // Rellena más celdas según tu modelo
            }
          } else {
            getByIdTable.innerHTML = '<tr><td colspan="3">No se encontraron resultados</td></tr>';
          }
        })
        .catch(error => {
          console.error('Error al obtener el dato:', error);
          getByIdTable.innerHTML = '<tr><td colspan="5">Error al obtener el dato</td></tr>';
        });
    } else {
      alert('Por favor, ingrese un ID válido');
    }
  });
}