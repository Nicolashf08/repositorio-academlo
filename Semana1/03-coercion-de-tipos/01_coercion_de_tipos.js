/***********************/
/* COERCIÓN DE TIPOS */
/*********************/
// En JavaScript, la coerción es una característica que fuerza a una variable de cierto tipo a tener el comportamiento de una diferente.

/************************************/
/* COERCIÓN DE TIPOS ==> Inplícita */
/***********************************/
// console.log('Hola' + ' Mundo')
// console.log('1' + 2)
console.log('hola' + 1)

// console.log('24' / '2') 
// console.log('15' - '5') // 10
// console.log('2' * '10') // 20 

// NaN (no es un número) la operación es incorrecta
console.log('hola' * 2)

// null & undefined
// null = 0
console.log(null + 2) // 2

console.log(undefined + 2) // NaN

// con boleanos
// true = 1 y false = 0
console.log(true + 2) // 3
console.log(true / false) // Infinity
console.log(true * 5) // 5

/************************************/
/* COERCIÓN DE TIPOS ==> Explícita */
/***********************************/

// Más Info: https://www.notion.so/academlo/Coerci-n-de-Tipos-a85c5d617ee54a34b85ed12d13131734
