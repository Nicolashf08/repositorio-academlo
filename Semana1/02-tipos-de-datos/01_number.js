/*********************************/
/* TIPOS DE DATOS ==> #1 NUMBER */
/********************************/
// El tipo number representa tanto números enteros como de punto flotante.
// Números enteros
1
2
5
10
25
50

// Números de punto flotante (decimales)
10.5
3.14
1.2

// Números negativos
-15
-12.5

// Almacenar un valor númerico a una variable
let numero = 20
const pi = 3.14

// Valores númericos especiales
Infinity // Es el número más alto
// console.log(1 / 0)

-Infinity // Es el número más pequeño
// console.log(-1 / 0)

NaN // No es un número - Not A Number

// console.log('Hola' * 85) // el resultado de una operación matemática incorrecta o no definida.

/**************************************/
/* TIPOS DE DATOS ==> NUMBER METHODS */
/*************************************/
/* Funciones Globales */
const precio = '20 usd'
/* parseInt() Para convertir un número de una cadena a un número entero */
// console.log(typeof parseInt(precio))

/* parseFloat() Para números de punto flotante */
const precioTotal = '14.35 usd'
// console.log(typeof parseFloat(precioTotal))

/* Metodos de Number */
// toFixed() -> Redondea un número a una cantidad de decimales especificada.
const numeros = 10.52683547
// console.log(numeros.toFixed(3))

/* El objeto Math */
// El objeto integrado Math tiene propiedades y métodos para constantes y funciones matemáticas.

/* Propiedades */
// console.log(Math.PI)

/* Métodos de Math */
// El método Math.round() Redondea hacia el entero más cercano:
// console.log(Math.round(10.5))
// console.log(Math.round(10.4))

// El método Math.floor() Redondea hacia el entero más bajo:
// console.log(Math.floor(10.5))
// console.log(Math.floor(10.6))
// console.log(Math.floor(10.4))

// El método Math.ceil() Redondea hacia el entero más alto:
// console.log(Math.ceil(10.4))
// console.log(Math.ceil(10.2))

// El método Math.pow() Devuelve el valor de un número elevado a una potencia:
// console.log(Math.pow(2, 3))
// console.log(Math.pow(10, 2))

// El método Math.sqrt() Devuelve la raiz cuadrada de un número:
// console.log(Math.sqrt(25))

// El método Math.max() Devuelve el valor más grande de una lista de números:
// console.log(Math.max(1, 2, 3, 4, 5))

// El método Math.min() Devuelve el valor más pequeño de una lista de números:
// console.log(Math.min(1, 2, 3, 4, 5))

// El método Math.random() Devuelve un número aleatorio entre 0 y 1:
// console.log(Math.floor(Math.random() * 10) + 1)

// El método Math.trunc() Remueve los decimales de un número:
// console.log(Math.trunc(10.345))

// Más Info: https://www.notion.so/academlo/Tipos-de-Datos-primitivos-ed3f754ef79f4ec1bad36290ce46442e
