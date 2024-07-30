export default function llenar_tabla(metodo, tabla, URL_API_REST) {
  if (metodo === 'get_all' && tabla === 'consultas') {
    getAll_consultas(URL_API_REST, tabla);
  }
  if (metodo === 'get_by_id' && tabla === 'consultas') {
    getById_consultas(URL_API_REST, tabla);
  }
  if (metodo === 'post' && tabla === 'consultas') {
    post_consultas(URL_API_REST, tabla);
  }
}

function getAll_consultas(URL_API_REST, tabla) {
  const fetchGetAllBtn = document.getElementById('get_all_consultas_fetch_btn');
  const getAllTable = document.getElementById('get_all_consultas_table').getElementsByTagName('tbody')[0];
  console.log(URL_API_REST);
  console.log(fetchGetAllBtn);
  console.log(getAllTable);

  fetchGetAllBtn.addEventListener("click", () => {
    fetch(`${URL_API_REST}/${tabla}`)
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
        console.error(`Error al obtener los datos de la tabla "${tabla}"`, error);
      });
  });
}

function getById_consultas(URL_API_REST, tabla) {
  const fetchGetByIDBtn = document.getElementById('get_by_id_consultas_fetch_btn');
  const getByIdInput = document.getElementById('get_by_id_consultas_input');
  const editForm = document.getElementById('edit_form');
  const putBtn = document.getElementById('put_consultas_fetch_btn');
  const patchBtn = document.getElementById('patch_consultas_fetch_btn');
  const deleteBtn = document.getElementById('delete_consultas_fetch_btn');

  fetchGetByIDBtn.addEventListener('click', () => {
    const id = getByIdInput.value.trim();
    if (id) {
      fetch(`${URL_API_REST}/${tabla}/${id}`)
        .then(response => response.json())
        .then(data => {

          if (data) {
            if (tabla === 'consultas') {

              // Mostrar formulario de edición y llenar con datos
              editForm.classList.remove('no_display');
              document.getElementById('put_consulta_nombre_y_apellido').value = data.nombre_y_apellido;
              document.getElementById('put_consulta_tipo_consulta').value = data.tipo_consulta;
              document.getElementById('put_consulta_URL_captura_problema').value = data.URL_captura_problema;
              document.getElementById('put_consulta_descripcion_problema').value = data.descripcion_problema;

              // Agregar eventos para PUT, PATCH y DELETE
              putBtn.addEventListener('click', () => updateConsulta('PUT', URL_API_REST, tabla, id));
              patchBtn.addEventListener('click', () => updateConsulta('PATCH', URL_API_REST, tabla, id));
              deleteBtn.addEventListener('click', () => deleteConsulta(URL_API_REST, tabla, id));
            }
          } else {
            alert('No se encontraron resultados');
          }
        })
        .catch(error => {
          console.error('Error al obtener el dato:', error);
          alert('Error al obtener el dato');
        });
    } else {
      alert('Por favor, ingrese un ID válido');
    }
  });
}

function updateConsulta(method, URL_API_REST, tabla, id) {
  const nombre_y_apellido = document.getElementById('put_consulta_nombre_y_apellido').value;
  const tipo_consulta = document.getElementById('put_consulta_tipo_consulta').value;
  const URL_captura_problema = document.getElementById('put_consulta_URL_captura_problema').value;
  const descripcion_problema = document.getElementById('put_consulta_descripcion_problema').value;

  const updatedData = {
    nombre_y_apellido,
    tipo_consulta,
    URL_captura_problema,
    descripcion_problema
  };

  fetch(`${URL_API_REST}/${tabla}/${id}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
  .then(response => response.json())
  .then(data => {
    alert(`Registro ${method === 'PUT' ? 'actualizado' : 'parcialmente actualizado'} con éxito`);
  })
  .catch(error => {
    console.error(`Error al ${method === 'PUT' ? 'actualizar' : 'parcialmente actualizar'} los datos:`, error);
  });
}

function deleteConsulta(URL_API_REST, tabla, id) {
  fetch(`${URL_API_REST}/${tabla}/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {
    alert('Registro eliminado con éxito');
    document.getElementById('edit_form').classList.add('no_display');
  })
  .catch(error => {
    console.error('Error al eliminar el registro:', error);
  });
}

function post_consultas(URL_API_REST, tabla) {
  const fetchPostBtn = document.getElementById('post_consultas_fetch_btn');
  const postTable = document.getElementById('post_consultas_table').querySelector('tbody');
  fetchPostBtn.addEventListener('click', () => {
    const table = tabla; // Cambiado a tableSelect.value para obtener el valor seleccionado
    const nombre_y_apellido = document.getElementById('post_consultas_nombre_y_apellido').value;
    const tipo_consulta = document.getElementById('post_consultas_tipo_consulta').value;
    const URL_captura_problema = document.getElementById('post_consultas_URL_captura_problema').value;
    const descripcion_problema = document.getElementById('post_consultas_descripcion_problema').value;

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
