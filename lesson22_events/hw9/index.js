const btnElems = document.querySelectorAll('.pagination__page');

function handleClick(e) {
  console.log(e.target.getAttribute('data-page-number'));
}

btnElems.forEach((elem) => {
  elem.addEventListener('click', handleClick);
});
