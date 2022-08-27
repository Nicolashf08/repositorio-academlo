/****************************/
/* Ejercicios con Objetos: */
/***************************/
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 20,
  direccion: {
    calle: 'Calle 123',
    ciudad: 'Ciudad falsa',
    pais: 'Pais falso'
  }
}

/* Colocar el resultado después de cada // */

console.log(persona.apellido) // Perez
console.log(persona.edad) // 20
console.log(persona.direccion.pais) // Pais falso

persona.nombre = 'Pedro'
console.log(persona.nombre) // Juan

persona.direccion.calle = 'Calle 456'
console.log(persona.direccion.calle) // Calle 123

delete persona.direccion.ciudad
console.log(persona.direccion.ciudad) // undefined

console.log(persona.nombre) // Juan
console.log(persona.direccion.calle) // Calle 123

console.log(['edad'] in persona) // true
console.log(['codigoPostal'] in persona) // false

const informacion = Object.entries(persona)

console.log(informacion[0][0]) //
console.log(informacion[0][1]) //


// Crear un objeto que contenga un arreglo de 5 nombres de personas.

const arregloPer = 
  [
    {nombre: 'Nicolas',
     nombre: 'Juan',
      nombre: 'Luisa',
       nombre: 'Pedro',
        nombre: 'Pablo'}
      ]


// Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.
const arregloPer2 = [
  {nombre: 'Juan', Edad: '22'},
  {nombre: 'Camila', Edad: '26'},
  {nombre: 'Sergio', Edad: '24'},
  {nombre: 'Luis', Edad: '30'},
  {nombre: 'Camilo', Edad: '25'}
];
// Del arreglo anterior, crea un nuevo arreglo que contenga solo los nombres de las personas.


function correos(arregloPer2){
  const arreglo2 = []
  for (i = 0; i < arregloPer2.length; ++i){
    const getCorreos = arregloPer2[i].nombre;
    
    arreglo2.push(getCorreos)

  }
  return arreglo2;
}
console.log(correos(arregloPer2));

// [ 'Jesús', 'Erik', 'Andres', 'Brayan', 'Juan' ]

// // Del siguiente arreglo de objetos, realiza lo siguiente:
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
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]

// // Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.

function almacenarCorreos(usuarios){
  const correos = []
  for (i = 0; i < usuarios.length; ++i){
    const correosGuardados = usuarios[i].correo
      correos.push(correosGuardados)
    
  }
return correos;
}
console.log(almacenarCorreos(usuarios))

// // Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.

function almacenarFacebook(usuarios){
  const cuentasDeFacebook = []
  for (i = 0; i < usuarios.length; ++i){
const usuariosFacebook = usuarios[i].social[0]
cuentasDeFacebook.push(usuariosFacebook)
  }
  return cuentasDeFacebook
}
console.log(almacenarFacebook(usuarios))
