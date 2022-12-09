const inputText = document.querySelector('.text-input');

function message() {
  console.log(inputText.value);
}

inputText.addEventListener('change', message);
