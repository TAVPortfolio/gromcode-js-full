export const getSection = (num) => {
  const numbSect = document.querySelector(`span[data-number="${num}"]`);
  const closetParent = numbSect.closest('div');
  const dataSectionName = closetParent.getAttribute('data-section');
  return dataSectionName;
};
