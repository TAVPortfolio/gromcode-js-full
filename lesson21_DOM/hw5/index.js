export const setButton = (buttonText) => {
  const body = document.querySelector('body');
  return (body.innerHTML = `<button>${buttonText}</button>`);
};
