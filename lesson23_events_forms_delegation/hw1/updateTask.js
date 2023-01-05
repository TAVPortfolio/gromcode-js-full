const onToggleTask = (e) => {
  const targetElem = e.target;

  const isCheckbox = targetElem.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  let targetElemId = targetElem.getAttribute('data-id');
  const taskData = tasks.find((task) => task.id === targetElemId);
  const done = targetElem.checked;
  taskData.done = done;
};

listElem.addEventListener('click', onToggleTask);
listElem.addEventListener('click', callRender);
