const math = require('../math');
test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('Subtração 3 - 2 igual a 1', () => { 
    expect(math.subtract(3, 2)).toBe(1); 
}); 

test('Multiplicação 3 * 3 igual a 9', () => { 
    expect(math.multiply(3, 3)).toBe(9); 
});