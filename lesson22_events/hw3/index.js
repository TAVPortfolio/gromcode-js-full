const checkboxElem = document.querySelector('.task-status');

function message() {
  console.log(checkboxElem.checked);
}

checkboxElem.addEventListener('change', message);
