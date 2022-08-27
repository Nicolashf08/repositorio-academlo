/********************************/
/* OPERADORES ==> COMPARACIÓN */
/******************************/
// Conocemos muchos operadores de comparación de las matemáticas

/* En JavaScript se escriben así:
  - mayor que >
  - menor que <
  - mayor o igual que >=
  - menor o igual que <=
  - igual a ==
  - diferente de != */

  // Los operadores de comparacion retornan un valor booleano.
  // console.log(5 > 2) // true
  // console.log(5 < 2) // false
  // console.log(5 >= 2) // true
  // console.log(5 <= 2) // false
  // console.log(5 == 2) // false
  // console.log(5 != 2) // true

  // solamente se compara los valores
  // console.log('0' == 0) // true

  // Igualdad estricta
  // se comparan los valores tambien se comparan los tipos
  // console.log('0' === 0) // false
  // console.log(0 !== '0') // true

  // comparar cadenas de texto
  // console.log('a' < 'z') // true
  // console.log('Z' < 'a') // true 
  // console.log('a' > 'Z') // true 

  // comparacion de diferentes tipos
  // console.log(true == 1) // true
  // console.log(false == 0) // true

  // Comparación de null y undefined
  // console.log(undefined == undefined) // true
  // console.log(null == null) // true
  // console.log(undefined == null) // true

  // Existe una regla especial, son iguales entre sí, pero no a ningún otro valor.

  // console.log('comparando null')
  // console.log(null == 0) // false
  // console.log(null == '') // false
  // console.log(null == NaN) // false
  // console.log(null == false) // false

  // < > <= >= null / undefined se conivierten: null = 0,
  // == null solo se compara entre si, o con undefined  
  // console.log(null > 1) // false
  // console.log(null == 0) // false
  // console.log(null >= 0) // true

  // Comparando undefined
  // console.log(undefined > 1)
  // console.log(undefined == 1)
  // console.log(undefined >= 1)

  // console.log(undefined == null)
  // console.log(undefined == undefined)

  // Con la igualdad estricta no se pueden comparar
  console.log(undefined === null)

// Más Info: https://www.notion.so/academlo/Operadores-1e1430a1bb7e4c0e90650528e8a0d8b8
