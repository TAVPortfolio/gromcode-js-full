export const setTitle = (text) => {
  let title = document.querySelector('.title');
  return (title.textContent = text);
};
