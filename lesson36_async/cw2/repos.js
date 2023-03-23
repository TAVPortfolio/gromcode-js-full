const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElem.innerHTML = '';
};

export const renderRepos = (reposList) => {
  const reposListElems = reposList.map(({ name }) => {
    const listsElem = document.createElement('li');
    listsElem.classList.add('repo-list__item');
    listsElem.textContent = name;

    return listsElem;
  });
  cleanReposList();
  listElem.append(...reposListElems);
};
