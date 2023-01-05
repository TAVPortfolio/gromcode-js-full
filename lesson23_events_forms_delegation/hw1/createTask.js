const createBtnElem = document.querySelector('.create-task-btn');

const createNewTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;
  if (!inputElem.value) {
    return;
  }

  inputElem.value = '';
  tasks.push({
    text,
    done: false,
    id: Math.random().toString(),
  });

  renderTasks(tasks);
};

createBtnElem.addEventListener('click', createNewTask);
