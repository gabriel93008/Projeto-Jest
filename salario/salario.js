const sum = require('./salario.test.js');

test('Seu novo salario é 900', () => {
  expect(sum(1, 2)).toBe(900);
});