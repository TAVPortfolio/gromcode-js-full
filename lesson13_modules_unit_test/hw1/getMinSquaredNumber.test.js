import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get the smallest number squared', () => {
  const result = getMinSquaredNumber([-2, 3]);
  expect(result).toEqual(4);
});

it('should get error "empty array"', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get the error "not an array"', () => {
  const result = getMinSquaredNumber('sad');
  expect(result).toEqual(null);
});
