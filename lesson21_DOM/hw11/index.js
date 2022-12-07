export const squaredNumbers = () => {
  const num = document.querySelectorAll('.number');
  num.forEach((el) => {
    el.setAttribute('data-squared-number', `${Math.pow(el.dataset.number, 2)}`);
  });
};
