const inputElem = document.querySelector('.text-input');

function message(e) {
  console.log(e.target.value);
}

inputElem.addEventListener('change', message);
