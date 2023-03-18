

// Pruebas unitarias: 

const assert = require('assert');

describe('promedio', () => {

    it('debe retornar el promedio de los tres números', () => {
        assert.equal(promedio(2, 4, 6), 4);
    });

    it('debe retornar el promedio de otros tres números', () => {
        assert.equal(promedio(6, 8, 10), 8);
    });

    it('debe retornar el promedio de otros tres números distintos', () => {
        assert.equal(promedio(1, 3, 5), 3);
    });

    it('debe retornar el promedio de otros tres números iguales', () => {
        assert.equal(promedio(5, 5, 5), 5);
    });    
})

// fibonacci
 describe('Funcion Fibonacci', () => {
    it('Debe devolver 1 cuando el numero es menor que 3', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('Debe devolver 144 cuando el numero es 12', () => {
        expect(fibonacci(12)).toBe(144);
    });

    it('Debe devolver 55 cuando el numero es 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    it('Debe devolver 610 cuando el numero es 15', () => {
        expect(fibonacci(15)).toBe(610);
    });

    it('Debe devolver 6765 cuando el numero es 20', () => {
        expect(fibonacci(20)).toBe(6765);
    });
});