const btnElems = document.querySelectorAll('.btn');

function handleClick(e) {
  console.log(e.target.textContent);
}

btnElems.forEach((elem) => {
  elem.addEventListener('click', handleClick);
});
