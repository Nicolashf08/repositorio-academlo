/******************************/
/* OPERADORES ==> ASIGNACIÓN */
/*****************************/
// Una asignación = también es un operador.
const resultado = 2 * 2 + 1

// Una expresión más compleja
let a = 1
const b = 2
const c = 10 - (a = b + 1)

// console.log(a) // 3
// console.log(b) // 2
// console.log(c) // 7

let x, y, z

x = y = z = 5 * 2

// console.log(x) // 10
// console.log(y) // 10
// console.log(z) // 10

let numero = 10
numero = numero + 5
// console.log(numero) // 15

numero = numero * 2
// console.log(numero) // 30

/* Acortadores */
let num = 10
num += 5
// console.log(num)

num *= 2
// console.log(num) // 30

// existen para todos los operadores aritméticos.

// Incremento/decremento
// Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.

// Incremento
let incremento = 1

incremento++ // sufijo
++incremento // prefijo

// const obtenerElValorAlMomentoSufijo = incremento++ // sufijo agrega el valor anterior
// const obtenerElValorAlMomentoPrefijo = ++incremento // prefijo agrega el valor actual

console.log(incremento) // 4

// console.log(obtenerElValorAlMomentoSufijo) // 3 
// console.log(obtenerElValorAlMomentoPrefijo) // 4 

// Decremento
let decremento = 10

decremento-- // sufijo
--decremento // prefijo

// console.log(decremento)



// Más Info: https://www.notion.so/academlo/Operadores-1e1430a1bb7e4c0e90650528e8a0d8b8
