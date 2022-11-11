const sum = require('./exemplo');

test('O valor de 50 * 60 é:', () => {
    expect(sum(50 * 60)).toBe(3000);
});