const baseUrl = 'https://641ae3df1f5d999a44558eeb.mockapi.io/api/v1/usersData';

const submitBtnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('form');
const allInput = document.querySelectorAll('.form-input');

const validation = () => formElem.checkValidity();

const addNewUser = () => {
  const isValid = validation();
  isValid === true ? (submitBtnElem.disabled = false) : null;
};

allInput.forEach((elem) => elem.addEventListener('input', addNewUser));

const saveUser = () => {
  const userEmail = document.querySelector('[type = "email"]').value;
  const userName = document.querySelector('[type = "text"]').value;
  const userPassword = document.querySelector('[type = "password"]').value;
  const userData = {
    email: `${userEmail}`,
    name: `${userName}`,
    password: `${userPassword}`,
  };
  return userData;
};

const createUser = (userData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const sendUser = (e) => {
  e.preventDefault();
  const userData = saveUser();

  createUser(userData)
    .then((response) => response.json())
    .then((response) => {
      alert(JSON.stringify(response));
      formElem.reset();
    });
};

submitBtnElem.addEventListener('click', sendUser);
