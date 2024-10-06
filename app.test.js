const saludar = require('./app');

test('returns "Hola mundo"', () => {
    expect(saludar()).toBe('Hola mundo');
});
