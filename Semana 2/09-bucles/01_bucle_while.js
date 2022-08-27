/********************************/
/* BUCLES ==> WHILE (MIENTRAS) */
/*******************************/
// Los Bucles son una forma de repetir el mismo código varias veces.

const arr = ['Luis', 'Pedro', 'Santiago', 'Marcos']
//             0        1         2           3

const nombres = []

nombres.push(arr[0], arr[1], arr[2], arr[3])

console.log(nombres)

/*
Sintaxis:
while (condicion) {
  Bloque de código - cuerpo del bucle
}
*/

let i = 0

while (i < arr.length) {
  // Iteraciones
  console.log(arr[i])
  i++
}

let num = 1

while (num <= 10) {
  console.log(num)
  num++
}

let num2 = 10

while (num2 > 0) {
  console.log(num2)
  num2--
}

/*****************************************/
/* BUCLES ==> DO WHILE (HACER MIENTRAS) */
/****************************************/
// El bucle “do…while” es una variante del bucle “while”.

/*
Sintaxis:
do {
  cuerpo del bucle
} while (condición)
*/

let index = 1

// A diferencia de while primero ejecuta el cuerpo y luego comprueba la condición, mientras esta se cumpla, el cuerpo se ejecuta una y otra vez.

do {
  console.log(index)
  index++
} while (index <= 10)

