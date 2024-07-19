const datosTable = document.getElementById('datos');

export default function updateTable(table, data) {
  const thead = datosTable.querySelector('thead');
  const tbody = datosTable.querySelector('tbody');

  let tableHeaders = '';
  let tableRows = '';

  switch (table) {
    case 'consultas':
      tableHeaders = `
        <tr>
          <th>ID</th>
          <th>Nombre y Apellido</th>
          <th>Tipo de Consulta</th>
          <th>URL Captura Problema</th>
          <th>Descripción del Problema</th>
        </tr>
      `;
      tableRows = Array.isArray(data) ? data.map(item => `
        <tr>
          <td>${item.idconsultas}</td>
          <td>${item.nombre_y_apellido}</td>
          <td>${item.tipo_consulta}</td>
          <td>${item.URL_captura_problema}</td>
          <td>${item.descripcion_problema}</td>
        </tr>
      `).join('') : `
        <tr>
          <td>${data.idconsultas}</td>
          <td>${data.nombre_y_apellido}</td>
          <td>${data.tipo_consulta}</td>
          <td>${data.URL_captura_problema}</td>
          <td>${data.descripcion_problema}</td>
        </tr>
      `;
      break;
    case 'usuario':
      tableHeaders = `
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Apto para menores</th>
        </tr>
      `;
      tableRows = Array.isArray(data) ? data.map(item => `
        <tr>
          <td>${item.username}</td>
          <td>${item.email}</td>
          <td>${item.password}</td>
          <td>${item.apto_menores}</td>
        </tr>
      `).join('') : `
        <tr>
          <td>${data.username}</td>
          <td>${data.email}</td>
          <td>${data.password}</td>
          <td>${data.apto_menores}</td>
        </tr>
      `;
      break;
    case 'movies':
      tableHeaders = `
        <tr>
          <th>ID</th>
          <th>Ruta</th>
          <th>Título</th>
          <th>Descripcion</th>
          <th>Link</th>
          <th>Categoría</th>
          <th>Apto menores</th>
        </tr>
      `;
      tableRows = Array.isArray(data) ? data.map(item => `
        <tr>
          <td>${item.idpeliculas}</td>
          <td>${item.ruta_img_peliculas}</td>
          <td>${item.titulo}</td>
          <td>${item.descripcion}</td>
          <td>${item.link}</td>
          <td>${item.categoria}</td>
          <td>${item.apto_menores}</td>
        </tr>
      `).join('') : `
        <tr>
          <td>${data.idpeliculas}</td>
          <td>${data.ruta_img_peliculas}</td>
          <td>${data.titulo}</td>
          <td>${data.descripcion}</td>
          <td>${data.link}</td>
          <td>${data.categoria}</td>
          <td>${data.apto_menores}</td>
        </tr>
      `;
      break;
    case 'series':
      tableHeaders = `
        <tr>
          <th>ID</th>
          <th>Ruta</th>
          <th>Título</th>
          <th>Descripcion</th>
          <th>Link</th>
          <th>Categoría</th>
          <th>Apto menores</th>
        </tr>
      `;
      tableRows = Array.isArray(data) ? data.map(item => `
        <tr>
          <td>${item.idseries}</td>
          <td>${item.ruta_img_series}</td>
          <td>${item.titulo}</td>
          <td>${item.descripcion}</td>
          <td>${item.link}</td>
          <td>${item.categoria}</td>
          <td>${item.apto_menores}</td>
        </tr>
      `).join('') : `
        <tr>
          <td>${data.idseries}</td>
          <td>${data.ruta_img_series}</td>
          <td>${data.titulo}</td>
          <td>${data.descripcion}</td>
          <td>${data.link}</td>
          <td>${data.categoria}</td>
          <td>${data.apto_menores}</td>
        </tr>
      `;
      break;
  }

  thead.innerHTML = tableHeaders;
  tbody.innerHTML = tableRows;
}
