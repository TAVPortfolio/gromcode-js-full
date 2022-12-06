export const clearList = () => {
  const categories = document.querySelector('.categories');
  return (categories.innerHTML = '');
};
