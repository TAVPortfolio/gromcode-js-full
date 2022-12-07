const finishForm = () => {
  const pass = document.querySelector('[name="password"]');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  pass.before(input);
  pass.setAttribute('type', 'password');
};
finishForm();
