//const URL_API_REST = 'http://localhost:3000';
//const table = 'consultas'
const URL_API_REST = 'http://127.0.0.1:3000';
import llenar_tabla from '../js/llenar_tabla.js';

document.addEventListener('DOMContentLoaded', () => {
  const metodoSelect = document.getElementById('metodo');
  const tablaSelect = document.getElementById('tabla');
  const avisos = document.getElementById('avisos');

  function updateDisplay() {
    // Get selected method and table
    const metodo = metodoSelect.value;
    const tabla = tablaSelect.value;

    console.log(metodo);
    console.log(tabla);

    // Hide all h1 elements
    const section_Elements = document.querySelectorAll('section');
    section_Elements.forEach(section => {
      section.classList.remove('display');
      section.classList.add('no_display');
    });

    // Show the specific h1 element if it matches the selected method and table
    if (metodo !== 'no_metodo' && tabla !== 'no_tabla') {
      const targetId = `${metodo}_${tabla}`;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.remove('no_display');
        targetElement.classList.add('display');
        avisos.classList.add('no_display');
        avisos.classList.remove('display');
        llenar_tabla(metodo, tabla, URL_API_REST);
      }
    } else {
      avisos.classList.remove('no_display');
      avisos.classList.add('display');
      avisos.innerHTML = `Elija un Método y una Tabla`;
    }

  }

  // Add event listeners to both select elements
  metodoSelect.addEventListener('change', updateDisplay);
  tablaSelect.addEventListener('change', updateDisplay);
});