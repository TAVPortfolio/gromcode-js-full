const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = (e) => {
  const isBtn = e.target.classList.contains('counter__btn');
  if (!isBtn) {
    return;
  }

  const action = e.target.dataset.action;
  const oldValue = Number(counterValueElem.textContent);
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counter', newValue);
  counterValueElem.textContent = newValue;
};

const onStorageChange = (e) => {
  counterValueElem.textContent = e.newValue;
};

document.querySelector('.counter').addEventListener('click', onCounterChange);

window.addEventListener('storage', onStorageChange);
