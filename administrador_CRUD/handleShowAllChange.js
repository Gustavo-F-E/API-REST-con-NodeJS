import handleMethodChange from './handleMethodChange.js'

const showAllCheckbox = document.getElementById('showAll');

export default function handleShowAllChange() {
  if (showAllCheckbox.checked) {
    idField.style.display = 'none';
  } else {
    handleMethodChange();
  }
}