/******************************************/
/* FUNCIONES ==> DECLARACIÓN DE FUNCIÓN */
/****************************************/
// Las funciones son un conjunto de instrucciones que realizan una tarea o calculan un valor y pueden ser reutilizadas.

/*
Sintaxis:

 function nombreDeLaFuncion(parametros, ...) {
    instrucciones
 }

  - function palabra reservada
  - nombreDeLaFuncion es el nombre de la función
  - parametros son los parámetros que recibe la función (opcional)
  - {} son los bloques de código que se ejecutarán cuando se llame a la función
*/

// foco (apagado)
function saludar () {
   console.log('encendido')
}

// llamar o invocar a la función
saludar() // <-- Ejecución de la función

// Una función que no devuelve nada siempre retorna undefined.
console.log(saludar()) // undefined

// Las funciones pueden o no retronar algo.

/*******************************************/
/* FUNCIONES ==> ALCANCE DE LAS VARIABLES */
/******************************************/
// Scope de las funciones (alcance de las variables)
// Las funciones pueden acceder a las variables del alcance global y a las variables del alcance local.

// variables locales o de bloque (alcance de la función)
function alcanceLocal () {
   const local = 'local'
   console.log(local)
}

// console.log(local)

alcanceLocal()

// variables globales (alcance global)
let global = 'global'

function alcanceGlobal () {
   // La variable externa solo se usa si no hay una local.
   // let global = 'globalLocal'

   global = 'globalLocal' // La función tiene acceso completo a la variable externa. Puede modificarlo también.
   console.log(global)
}

console.log(global)

alcanceGlobal()

console.log(global)

/*****************************/
/* FUNCIONES ==> PARÁMETROS */
/****************************/
// Parámetro es uno o varios valores listados separados por comas que se pasan a una función entre los paréntesis. Las Funciones pueden tener o no parámetros, son totalmente opcionales.

function sumar (num, num2) { // <--- parámetros
   console.log(num + num2)
}

sumar(5, 4) // <--- Argumentos

/******************************************/
/* FUNCIONES ==> VALORES PREDETERMINADOS */
/*****************************************/
// En una función, si no se pasa un valor para el parámetro, recibe el valor de undefined (indefinido).
function sumar2 (num = 0, num2) { // <--- parámetros
   num2 = num2 || 0 // valor por defecto con or
   console.log(num + num2)
}

sumar2(4, 5)
sumar2(4)

/**************************************/
/* FUNCIONES ==> RETRONANDO UN VALOR */
/*************************************/
// Una función puede devolver un valor al código de llamada como resultado. Con la directiva return.

const nombre = 'Francisco'

function saludarConNombre (nombre) {
   let edad = 23
   return `Hola soy ${nombre} y tengo ${edad} años`

   // esto es ignorado
   // return 
}

console.log(saludarConNombre(nombre))
const str = saludarConNombre(nombre)
console.log(str.toUpperCase())

// Más Info: https://academlo.notion.site/Funciones-3cda1e8f48d046cea91b515aa87a858f
