export const createButton = (buttonText) => {
  const body = document.querySelector('body');
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  body.append(buttonElem);
};
