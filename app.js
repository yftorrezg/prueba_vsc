// promodio de 3 numeros en JS 
function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(promedio(2, 4, 6)); // 4

// Refactorización: 
const prom = (num1, num2, num3) => (num1 + num2 + num3) / 3;
console.log(prom(2, 4, 6)); // 4

// Se cambió la función a una función de flecha y se eliminaron los paréntesis que envolvían el cuerpo de la función.

/* 
Esta función calcula el promedio de tres números. Toma los tres números como parámetros y devuelve el promedio de los tres. En este caso, la función se llama con los números 2, 4 y 6 como parámetros, y devuelve 4 como resultado.
*/

// fibonacci
function fibonacci(n) {
    if (n < 3) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(12)); // 144

