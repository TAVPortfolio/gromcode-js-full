const btnElem = document.querySelector('.search__btn');
function message() {
  console.log(document.querySelector('.search__input').value);
}

btnElem.addEventListener('click', message);
