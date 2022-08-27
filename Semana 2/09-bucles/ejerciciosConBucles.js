/***************************/
/* Ejercicios con bucles: */
/**************************/

// 1. Crea un arreglo con los números del 1 al 400
const nuevoArreglo = []

for (let n = 1; n <= 400; n++) {
  nuevoArreglo.push(n)
}

console.log(nuevoArreglo)

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.

function rangoDeNumeros (numStart, limit) {
  const nuevoArreglo = []

  for (let n = numStart; n <= limit; n++) {
    nuevoArreglo.push(n)
  }

  return nuevoArreglo
}

console.log(rangoDeNumeros(1, 4))

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [33, 45, 10, 12, 15]

function suma (arreglo) {
  let suma = 0

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i]
  }

  return suma
}

console.log(suma(numeros))

// 4. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]

function regresarMitad (numeros) {
  const mitad = Math.floor(numeros.length / 2)

  if (numeros.length % 2 === 0) {
    return [numeros[mitad - 1], numeros[mitad]]
  } else {
    return numeros[mitad]
  }
}

console.log(regresarMitad([1, 15, 4]))
console.log(regresarMitad([1, 3, 4, 5, 5, 3]))


// 5. Realiza el ejercicio anterior de ejercicios para arreglos y objetos 5.1 y 5.2, pero usando funciones con parametros, y bucles.
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' }, // 0
      { nombre: 'twitter', url: 'twitter/andrea' } // 1
    ],
    genero: 'Mujer'
  }
]

// tu función aquí

// 5.1. Almacena todos los correos del arreglo usuarios.
function obtenerCorreos (arreglo) {
  const correos = []

  for (let i = 0; i < arreglo.length; i++) {
    correos.push(arreglo[i].nombre)
  }

  return correos
}

console.log(obtenerCorreos(usuarios))
// 5.2. Almacena todas las urls de las cuentas de facebook del arreglo usuarios.

function obtenerUrlFacebook (arreglo) {
  const urls = []

  for (let i = 0; i < arreglo.length; i++) {
    urls.push(arreglo[i].social[0].url)
  }

  return urls
}

console.log(obtenerUrlFacebook(usuarios))

function eliminar (arreglo, correo) {
  const nuevoArreglo = []

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].correo !== correo) {
      nuevoArreglo.push(arreglo[i])
    }
  }

  return nuevoArreglo
}

console.log(eliminar(usuarios, 'oscar@academlo.com'))