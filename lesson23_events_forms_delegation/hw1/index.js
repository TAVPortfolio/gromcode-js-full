const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

const renderTasks = (tasksList) => {
  listElem.textContent = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListItem);

  listElem.append(...tasksElems);
};

const callRender = () => {
  renderTasks(tasks);
};
callRender();

// create task

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

// update task

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
