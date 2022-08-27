/***********************************/
/* CONDICIONALES ==> SENTENCIA IF */
/**********************************/
// Algunas veces, necesitamos ejecutar diferentes acciones basadas en diferentes condiciones. La sentencia if evalúa la condición en los paréntesis, y si el resultado es true ejecuta un bloque de código.

const resultado = 2 + 4 // 6
const condicion = false

if (condicion) {
  console.log('si es correcto')
}

if (resultado == 5) { // convierte el valor en booleano
  console.log('el resultado es correcto')
}

if (resultado || condicion) {
  console.log('Si es mayor')
}

/*********/
/* else */
/********/
// La cláusula else es un bloque opcional y este se ejecutará cuando la condición sea falsa.

if (condicion) {
  console.log('si es correcto')
} else {
  console.log('no es correcto')
}

const edad = 81

let permiso

if (edad >= 18 && edad <= 80) {
  permiso = function () {console.log('si puedes conducir')}
} else {
  permiso = 'Lo siento pero no puedes conducir'
}

console.log(permiso)

/************/
/* else if */
/***********/
// La cláusula else if nos proporciona bloques opcionales para probar todas nuestras variantes.
const num = 5
const num2 = 5

if (num > num2) {
  console.log('si es mayor')
} else if (num < num2) {
  console.log('no es menor')
} else {
  console.log('son iguales')
}

const diaDeLaSemana = 'enero'

if (diaDeLaSemana === 'lunes') {
  console.log('Es lunes')
} else if (diaDeLaSemana === 'martes') {
  console.log('Es martes')
} else if (diaDeLaSemana === 'miercoles') {
  console.log('Es miercoles')
} else if (diaDeLaSemana === 'jueves') {
  console.log('Es jueves')
} else if (diaDeLaSemana === 'viernes') {
  console.log('Es viernes')
} else if (diaDeLaSemana === 'sabado') {
  console.log('Es sabado')
} else if (diaDeLaSemana === 'domingo') {
  console.log('Es domingo')
} else {
  console.log('No es un dia de la semana valido')
}

// Más información:
