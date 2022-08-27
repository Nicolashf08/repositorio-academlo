/**********************************/
/* VARIABLES ==> VAR, LET, CONST */
/*********************************/
/*
¿Ques es una variable?
Es un espacio en memoria donde se almacena una referencia a un valor.
*/
// Declaración de una variable
var myName = 'Bob'

// console.log(myName) // 'Bob'

/* Reglas de nomenclatura de variables:
- No puede contener palabras reservadas de JavaScript.
- No puede comenzar con un número.
- No puede contener espacios.
- Solo pueden contener letras, números y guiones bajos y el signo de $.
para el nombre de la variable que contiene varias palabras se suele usar camelCase. Es decir, palabras van una detrás de la otra, con cada palabra iniciando con la primera letra en mayúscula, ejemplo: miPrimeraVariable */

/**********************/
/* VARIABLES ==> VAR */
/*********************/
// Declaración de variable
var nombre

// Inicialización de variable
nombre = 'Pedro'
// console.log(nombre)

// Declaración e inicialización de variable
var apellido = 'Perez'
// console.log(apellido)

// Declaración de múltiples variables
// var edad = 34, correo = 'pedro@correo.com'

// Declaración de múltiples líneas
var edad = 34
var correo = 'pedro@correo.com'

// console.log(edad)
// console.log(correo)

// Reasingación de variables
nombre = 'Juan'
// console.log(nombre)

// Re Declarar una variable
var nombre = 'Marcos'
// console.log(nombre)

/**********************/
/* VARIABLES ==> LET */
/*********************/
// Declaración de variable
let nombre2

// Inicialización de variable
nombre2 = 'Pablo'
// console.log(nombre2)

// Reasingación de variables
nombre2 = 'Marcos'
// console.log(nombre2)

// Re Declarar una variable
// let nombre2 = 'Luis'
// console.log(nombre2)

/************************/
/* VARIABLES ==> CONST */
/***********************/
// Declaración de variable con const
const nombre3 = 'Ricardo'
// no se puede Inicializar sin un valor
// no se puede reasignar un valor de una constante
// no se puede re declarar una constante

// Más Info: https://www.notion.so/academlo/Variables-fc11a03ee70042c39884b3ff5ce2a34f
