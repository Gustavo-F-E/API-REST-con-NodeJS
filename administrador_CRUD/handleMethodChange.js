import handleTableChange from './handleTableChange.js'

const methodSelect = document.getElementById('method');
const showAllCheckbox2 = document.getElementById('showAll2');

export default function handleMethodChange() {
  const method = methodSelect.value;
  if (method === 'POST' || method === 'PUT') {
    jsonField.style.display = 'block';
    handleTableChange();
  } else {
    jsonField.style.display = 'none';
  }
  if (method === 'GET' || method === 'DELETE' || method === 'PUT') {
    idField.style.display = 'block';
  } else {
    idField.style.display = 'none';
  }
  if (method === 'GET') {
    showAllCheckbox2.style.display = 'block';
  } else {
    showAllCheckbox2.style.display = 'none';
  }
}