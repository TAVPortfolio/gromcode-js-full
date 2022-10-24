import { reverseArray, withdraw, getAdults } from './index';

// ................reverseArray...............

it('should reverse array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});
it('should reverse array', () => {
  const result = reverseArray(['Bob', 'Tom', 'Mike']);
  expect(result).toEqual(['Mike', 'Tom', 'Bob']);
});
it('should be null not array', () => {
  const result = reverseArray('dfdf');
  expect(result).toEqual(null);
});

// ................withdraw...............

it('should return the balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('should return -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1500);
  expect(result).toEqual(-1);
});
it('should return -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

// ................getAdults...............

it('getAdults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
it('getAdults', () => {
  const result = getAdults({ 'John Doe': 16, Tom: 17, Bob: 16 });
  expect(result).toEqual({});
});
it('getAdults', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
