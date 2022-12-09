const checkboxElem = document.querySelector('.task-status');

function message(e) {
  console.log(e.target.checked);
}

checkboxElem.addEventListener('change', message);
