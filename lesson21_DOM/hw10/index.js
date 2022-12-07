export const manageClasses = () => {
  const one = document.querySelector('.one').classList.add('selected');
  const two = document.querySelector('.two').classList.remove('selected');
  const three = document.querySelector('.three').classList.toggle('three_done');
  const four = document.querySelector('.four');
  if (four.classList.contains('some-class')) {
    four.classList.add('another-class');
  }
};
