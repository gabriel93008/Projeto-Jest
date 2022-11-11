const sum = require('./exemplo');

test('O valor de 30 * 60 é:', () => {
    expect(sum(30 * 60)).toBe(1800);
});