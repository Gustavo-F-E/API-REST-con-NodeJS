export default function render_table(
    tableSelect,
    getByIdTable,
    postTable,
    putTable,
    getAllTable
) {
  const table = tableSelect.value;
  getByIdTable.innerHTML = ``;
  postTable.innerHTML = ``;
  putTable.innerHTML = ``;
  //getAllTable.innerHTML = ``;
    switch (table) {
        case "consultas":
            getByIdTable.innerHTML = `
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre y apellido</th>
                  <th>Tipo de consulta</th>
                  <th>URL captura del problema</th>
                  <th>Descripción del problema</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
              `;
            postTable.innerHTML = `
              <thead>
                <tr>
                  <th>Nombre y apellido</th>
                  <th>Tipo de consulta</th>
                  <th>URL captura del problema</th>
                  <th>Descripción del problema</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" id="post_nombre_y_apellido" name="post_nombre_y_apellido" placeholder="Nombre y apellido" required></td>
                  <td><input type="text" id="post_tipo_consulta" name="post_tipo_consulta" placeholder="Tipo de consulta" required></td>
                  <td><input type="text" id="post_URL_captura_problema" name="post_URL_captura_problema" placeholder="URL" required></td>
                  <td><input type="text" id="post_descripcion_problema" name="post_descripcion_problema" placeholder="Decripción"required></td>
                </tr>
              </tbody>
              `;
            putTable.innerHTML = `
              <thead>
                <tr>
                  <th>Nombre y apellido</th>
                  <th>Tipo de consulta</th>
                  <th>URL captura del problema</th>
                  <th>Descripción del problema</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" id="put_nombre_y_apellido" name="put_nombre_y_apellido" placeholder="Nombre y apellido" required></td>
                  <td><input type="text" id="put_tipo_consulta" name="put_tipo_consulta" placeholder="Tipo de consulta" required></td>
                  <td><input type="text" id="put_URL_captura_problema" name="put_URL_captura_problema" placeholder="URL" required></td>
                  <td><input type="text" id="put_descripcion_problema" name="put_descripcion_problema" placeholder="Decripción"required></td>
                </tr>
              </tbody>
              `;
            getAllTable.innerHTML = `
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre y apellido</th>
                  <th>Tipo de consulta</th>
                  <th>URL captura del problema</th>
                  <th>Descripción del problema</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
              `;
            break;
        case "movies":
            getByIdTable.innerHTML = `<h1 id="h1">Pelicula</h1>`;
            postTable.innerHTML = `<h1 id="h1">Pelicula</h1>`;
            putTable.innerHTML = `<h1 id="h1">Pelicula</h1>`;
            getAllTable.innerHTML = `<h1 id="h1">Pelicula</h1>`;
            break;
        case "series":
            getByIdTable.innerHTML = `<h1 id="h1">Serie</h1>`;
            postTable.innerHTML = `<h1 id="h1">Serie</h1>`;
            putTable.innerHTML = `<h1 id="h1">Serie</h1>`;
            getAllTable.innerHTML = `<h1 id="h1">Serie</h1>`;
            break;
        case "usuario":
            getByIdTable.innerHTML = `<h1 id="h1">Usuario</h1>`;
            postTable.innerHTML = `<h1 id="h1">Usuario</h1>`;
            putTable.innerHTML = `<h1 id="h1">Usuario</h1>`;
            getAllTable.innerHTML = `<h1 id="h1">Usuario</h1>`;
            break;
    }
}
