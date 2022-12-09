const btnElem = document.querySelector('.single-use-btn');
function message() {
  console.log('clicked');
  btnElem.removeEventListener('click', message);
}

btnElem.addEventListener('click', message);
