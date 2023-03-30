const sum = require('./sum');

test('adds 0 + 100 to equal 100', () => {
  expect(sum(0, 100)).toBe(100);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});