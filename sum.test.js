const jcMath = require("jcawesome-math");

test('adds 0 + 100 to equal 100', () => {
  expect(jcMath.add(0, 100)).toBe(100);
});

test('adds 1 + 2 to equal 3', () => {
  expect(jcMath.add(1, 2)).toBe(3);
});

test('subtract 109 - 104 to equal 5', () => {
  expect(jcMath.subtract(109, 104)).toBe(5);
});

test('multiply 12 * 5 to equal 60', () => {
  expect(jcMath.multiply(12, 5)).toBe(60);
});