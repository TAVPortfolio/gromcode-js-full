import { calc } from './calculator';

it('should get sum of numbers', () => {
  const result = calc('3 + 6');
  expect(result).toEqual('3 + 6 = 9');
});

it('should get the difference of numbers', () => {
  const result = calc('10 - 1');
  expect(result).toEqual('10 - 1 = 9');
});

it('should get set of numbers', () => {
  const result = calc('3 * 3');
  expect(result).toEqual('3 * 3 = 9');
});

it('should get division of numbers', () => {
  const result = calc('9 / 3');
  expect(result).toEqual('9 / 3 = 3');
});

it('should get error null', () => {
  const result = calc(9 / 3);
  expect(result).toEqual(null);
});
