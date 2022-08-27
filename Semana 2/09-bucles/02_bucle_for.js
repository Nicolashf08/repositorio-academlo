/*******************/
/* BUCLES ==> FOR */
/******************/
// El bucle for es más complejo, pero también el más usado.

/*
Sintaxis:
for (inicialización; condición; operación) {
  cuerpo del bucle
}
*/

/*
Vamos a examinar la declaración for parte por parte:
1. (inicialización) se ejecuta una vez al principio del bucle.
2. (condición) se comprueba antes de cada iteración. Si es falsa, el bucle finaliza.
3. (código) se ejecuta una y otra vez mientras la condición sea verdadera.
4. (operación) se ejecuta después del cuerpo al final de cada iteración del bucle.
*/

for (let i = 15; i <= 50; i++) {
  console.log(i)
}

// Ejemplo con un arreglo de objetos
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' }, // 0
      { nombre: 'twitter', url: 'twitter/erik' }// 1
    ],
    genero: 'Hombre'
  }, // 0
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  }, // 1
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }, // 2
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  }, // 3
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  } // 4
]

let nuevoArreglo = []

for (let i = 0; i < usuarios.length; i++) {
  // nuevoArreglo[i] = usuarios[i].nombre
  nuevoArreglo.push(usuarios[i].nombre)
}

console.log(nuevoArreglo)

// El algoritmo general del bucle funciona de esta forma:
/*
inicialización
--> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
--> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
--> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
--> si condición ya no se cumple --> termina el bucle
*/

// Rompe el bucle con break
// Cuando la condición se vuelve falsa se sale de un bucle, Pero podemos forzar una salida en cualquier momento usando la directiva especial break.

for (let num = 1; num <= 20; num++) {
  console.log(num)
  if (num === 5) {
    break
  }
}

// Continua con la siguiente iteración con continue
// La directiva continue es una “versión más ligera” de break. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

for (let n = 1; n <= 20; n++) {
  if (n % 2) {
    continue
  }
  console.log(n)
}

// for anidados
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}

/* comenzar
i: 1 primera iteracion de i, j: 1 primera iteracion de j 
i: 1 primera iteracion de i, j: 2 segunda iteracion de j 
i: 1 primera iteracion de i, j: 3 tercera iteracion de j

i: 2 segunda iteracion de i, j: 1 primera iteracion de j 
i: 2 segunda iteracion de i, j: 2 segunda iteracion de j 
i: 2 segunda iteracion de i, j: 3 tercera iteracion de j

i: 3 tercera iteracion de i, j: 1 primera iteracion de j 
i: 3 tercera iteracion de i, j: 2 segunda iteracion de j 
i: 3 tercera iteracion de i, j: 3 tercera iteracion de j
*/

const obj = {}

const ciudades = [{ ciudad: 'USA'}, {ciudad: 'MX'}]
//                       0                1

obj.ciudad = ciudades[1].ciudad

console.log(obj)


console.log(usuarios)

for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i].ciudad = ciudades[0].ciudad)
}

console.log(usuarios)

const arr1 = [{user_id: 1}, {user_id:3}]
const arr2 = [{id:1}, {id:2}]

let count = 0

for (let i =0; i < arr1.length; i++) {
  for (let j =0; j < arr2.length; j++) {
    if (arr1[i].user_id === arr2[j].id) {
      count++
    }
  }
}

console.log(count)