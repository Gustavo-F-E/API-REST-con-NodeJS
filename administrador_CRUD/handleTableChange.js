const methodSelect = document.getElementById('method');
const tableSelect = document.getElementById('table');

export default function handleTableChange() {
  const table = tableSelect.value;
  const method = methodSelect.value;
  if (method === 'POST' || method === 'PUT') {
    switch (table) {
      case 'consultas':
        jsonData.value = JSON.stringify({
          nombre_y_apellido: "Cocho Lopez",
          tipo_consulta: "Nada",
          URL_captura_problema: "URL3",
          descripcion_problema: "###"
        }, null, 2);
        break;
      case 'usuario':
        jsonData.value = JSON.stringify({
          username: "nuevo_usuario",
          email: "mail_usuario@mail.com",
          password: "999",
          apto_menores: "YES"
        }, null, 2);
        break;
      case 'movies':
        jsonData.value = JSON.stringify({
          ruta_img_peliculas: "11",
          titulo: "11",
          descripcion: "11",
          link: "11",
          categoria: "11",
          apto_menores: "11"
        }, null, 2);
        break;
      case 'series':
        jsonData.value = JSON.stringify({
          ruta_img_series: "11",
          titulo: "11",
          descripcion: "11",
          link: "11",
          categoria: "11",
          apto_menores: "11"
        }, null, 2);
        break;
      default:
        jsonData.value = '';
    }
  } else {
    jsonData.value = '';
  }
}