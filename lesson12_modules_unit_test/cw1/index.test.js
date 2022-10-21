it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 не равно 17', () => {
  expect(18).toEqual(17);
});

const getEvenNumbers = (arr) => arr.filter((el) => el % 2 === 0);

it('show only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([2, 4, 6]);
});
