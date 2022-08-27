/***************************************/
/* CONDICIONALES ==> SENTENCIA SWITCH */
/**************************************/
// La sentencia switch es una forma de evaluar una condición y ejecutar una secuencia de instrucciones dependiendo de la condición.

// Sintaxis
/*
switch (valor) {
  case valor1:
    bloque de código
    break
  case valor2:
    bloque de código
    break
  default:
    bloque de código
  }
*/

const diaDeLaSemana = '3'

let mostrarDia

switch (diaDeLaSemana) {
  case '1':
    mostrarDia = 'Es lunes'
    break
  case '2':
    mostrarDia = 'Es martes'
    break
  case '3':
    mostrarDia = 'Es miercoles'
    break
  case '4':
    mostrarDia = 'Es jueves'
    break
  case '5':
    mostrarDia = 'Es viernes'
    break
  default:
    mostrarDia = 'Es fin de semana'
}

console.log(mostrarDia)

// tips
const dias = {
  lunes: 'Es lunes',
  martes: 'Es martes',
  miercoles: 'Es miercoles',
  jueves: 'Es jueves',
  viernes: 'Es viernes',
}

nombreDelDia = 'miercoless'

if (dias[nombreDelDia]) {
  console.log(dias[nombreDelDia])
} else {
  console.log('no es un nombre valido')
}

// Agrupamiento de case
// La habilidad para “agrupar” cases es un efecto secundario de como trabaja switch sin break.
const mesActaul = 'junio'
let estacion

switch (mesActaul) {
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
    estacion = 'No es un mes valido'
}

console.log(estacion)

// Más información:
