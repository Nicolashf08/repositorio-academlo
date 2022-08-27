/******************************************/
/* CONDICIONALES ==> OPERADOR TERNARIO ? */
/*****************************************/
// A veces necesitamos asignar una variable dependiendo de alguna condición.

const edad = 17

// La sintaxis es la siguiente:
// condición ? valor si es true : valor si es false
//             condición   if                  else
let permiso = (edad >= 18) ? 'si puedes conducir' : 'No puedes conducir'

console.log(permiso)

// Ejemplo con múlitples condicionales
const num = 5
const num2 = 5

const resultado = (num < num2) ? 'si es menor' :
                  (num > num2) ? 'el numero es mayor' :
                  'Los numeros son iguales'

// No lo recomiendo
console.log(resultado)

// Más información:
