/**********************************/
/* Ejercicios con condicionales: */
/*********************************/

// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuanto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.
const pizza = 'Grande'
let precio = 0

if (pizza === 'Pequeña') {
  precio = 10
} else if (pizza === 'Mediana') {
  precio = 15
} else if (pizza === 'Grande') {
  precio = 20
} else if (pizza === 'Familiar') {
  precio = 25
} else {
  console.log('No esta disponible')
}

console.log(`La pizza ${pizza} cuesta $${precio}`)

// 2. Transforma la siguiente sentencia if en una condicional ternaria.
// puedes usar los operadores lógicos &&, || y los operadores de comparación ===, !=, >, <, >=, <=

const hora = 4
let saludoPorHora

if (hora >= 4 && hora <= 12) {
  saludoPorHora = 'Buenos días'
} else if (hora > 12 && hora <= 18) {
  saludoPorHora = 'Buenas tardes'
} else {
  saludoPorHora = 'Buenas noches'
}

console.log(saludoPorHora)
// Aquí tu código
const saludoHora = (hora >= 4 && hora <= 12) ? 'Buenos días' :
                   (hora > 12 && hora <= 18) ? 'Buenas tardes' :
                   'Buenas noches'

console.log(saludoHora)

// 3. Crea una función que reciba como parámetro un string con un nombre del mes y bebe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido".

function estacion (mes) {
  let estacion
  switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
      estacion = 'Invierno'
      break
    case 'abril':
    case 'mayo':
    case 'junio':
      estacion = ' Primavera'
      break
    case 'julio':
    case 'agosto':
    case 'septiembre':
      estacion = ' Verano'
      break
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
      estacion = ' Otoño'
      break
    default: 
      estacion = 'Mes no válido'
  }

  return estacion
}

console.log(estacion('diciembre'))
console.log(estacion('agosto'))
console.log(estacion('mayo'))
console.log(estacion('enero'))

// 4. Crea una función que retorne verdadero si el número recibido por parámetro es par y falso si es impar.
/*
tips - pares son los números que son divisibles entre 2 sin resto

por ejemplo: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30

2 / 2 = 1, 1 * 2 = 2, 2 - 2 = 0
4 / 2 = 2, 2 * 2 = 4, 4 - 4 = 0
6 / 2 = 3, 3 * 2 = 6, 6 - 6 = 0
8 / 2 = 4, 4 * 2 = 8, 8 - 8 = 0

Usando el operador %
2 % 2 = 0
4 % 2 = 0
6 % 2 = 0
8 % 2 = 0
*/

function esPar (n) {
  return n % 2 === 0
}

console.log(esPar(1))
console.log(esPar(2))
console.log(esPar(3))
console.log(esPar(4))
console.log(esPar(6))
console.log(esPar(8))


// 5 Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.

function esMayorA10 (n) {
  return (n > 10) ? n : n * 2
}

console.log(esMayorA10(2))
console.log(esMayorA10(8))
console.log(esMayorA10(12))

