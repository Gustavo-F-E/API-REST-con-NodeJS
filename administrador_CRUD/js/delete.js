export default function del(URL_API_REST, tableSelect, fetchDelBtn,delIdInput) {
  fetchDelBtn.addEventListener('click', () => {
    const id = delIdInput.value.trim();
    const table = tableSelect;

    if (id) {
      fetch(`${URL_API_REST}/${table}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.ok) {
          alert('Registro eliminado con éxito');
        } else {
          alert('Error al eliminar el registro');
        }
      })
      .catch(error => {
        console.error('Error al eliminar el registro:', error);
      });
    } else {
      alert("Se requiere un ID para eliminar el registro.");
    }
  });
}
