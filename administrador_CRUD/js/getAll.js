export default function getAll(
  URL_API_REST,
  tableSelect,
  fetchGetAllBtn,
  getAllTable,
) {
  fetchGetAllBtn.addEventListener("click", () => {
    const table = tableSelect;
    fetch(`${URL_API_REST}/${table}`)
      .then((response) => response.json())
      .then((data) => {
        // Limpiar la tabla antes de agregar nuevos datos
        getAllTable.innerHTML = "";

        // Agregar cada consulta como una nueva fila en la tabla
        data.forEach((item) => {
          const row = getAllTable.insertRow();
          const id = row.insertCell();
          const nombre_y_apellido = row.insertCell();
          const tipo_consulta = row.insertCell();
          const URL_captura_problema = row.insertCell();
          const descripcion_problema = row.insertCell();
          // Agrega más celdas según tu modelo
          id.textContent = item.idconsultas;
          nombre_y_apellido.textContent = item.nombre_y_apellido;
          tipo_consulta.textContent = item.tipo_consulta;
          URL_captura_problema.textContent = item.URL_captura_problema;
          descripcion_problema.textContent = item.descripcion_problema;
        });
      })
      .catch((error) => {
        console.error(`Error al obtener los datos de la tabla "${table}"`, error);
      });
  });
}
