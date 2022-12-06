const getTitle = () => {
  const title = document.querySelector('.title');
  return title.textContent;
};

const getDescription = () => {
  const title = document.querySelector('.about');
  return title.innerText;
};

const getPlans = () => {
  const title = document.querySelector('.plans');
  return title.innerHTML;
};

const getGoal = () => {
  const title = document.querySelector('.goal');
  return title.outerHTML;
};

export { getTitle, getDescription, getPlans, getGoal };
