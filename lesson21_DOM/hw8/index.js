const arr = [1, 4, 6, 8];
export const finishList = () => {
  const list = document.querySelector('ul');
  const special = document.querySelector('.special');
  const listItemsBefore = document.createElement('li');
  const listItemsAfter = document.createElement('li');
  const listItemsPrepend = document.createElement('li');
  const listItemsAppend = document.createElement('li');
  listItemsBefore.textContent = 4;
  listItemsAfter.textContent = 6;
  listItemsPrepend.textContent = 1;
  listItemsAppend.textContent = 8;
  special.before(listItemsBefore);
  special.after(listItemsAfter);
  list.prepend(listItemsPrepend);
  list.append(listItemsAppend);
};

finishList();

// export const finishList = () => {
//   const list = document.querySelector('ul');
//   const special = document.querySelector('.special');
//   const listItemsBefore = document.createElement('li');
//   const listItemsAfter = document.createElement('li');
//   const listItemsPrepend = document.createElement('li');
//   const listItemsAppend = document.createElement('li');
//   listItemsBefore.textContent = 4;
//   listItemsAfter.textContent = 6;
//   listItemsPrepend.textContent = 1;
//   listItemsAppend.textContent = 8;
//   special.before(listItemsBefore);
//   special.after(listItemsAfter);
//   list.prepend(listItemsPrepend);
//   list.append(listItemsAppend);
// };
