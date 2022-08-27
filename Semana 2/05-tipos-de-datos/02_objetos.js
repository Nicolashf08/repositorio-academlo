/**************************************/
/* TIPOS DE DATOS ==> OBJETOS OBJECT */
/*************************************/
// Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave.

// { clave: 'valor' } Este par de conceptos vamos a llamarlos como “clave: valor”.

// Podemos crear un objeto usando las llaves {…} con una lista opcional de propiedades. A esta declaración se llama objeto literal (valores declarados literalmente en el código).

const persona = {
  nombre: 'Juan',
  edad: 34,
  'esta activo': true,

  respirar () {
    return 'Estoy respirando'
  }
}

// Acceder a una propiedad de un objeto
/**********************/
/* Notación de punto */
/********************/
// Acceder a las propiedades de un objeto
console.log(persona.nombre)
console.log(persona.edad)

// Acceder a los métodos de un objeto
console.log(persona.respirar())

persona.correo = 'juan@mail.com'
console.log(persona.correo)

// Remover una propiedad de un objeto
delete persona.correo
console.log(persona)

// Si no se encuentra la propiedad regresa un undefined
console.log(persona.correo)

// Esto no funciona
// console.log(persona.esta activo)
// console.log(persona.'esta activo')

/**************************/
/* Notación de corchetes */
/*************************/
// Para acceder a esa propiedad pasamos el string dentro de los corchetes entre comillas (cualquier tipo de comillas servirían).
console.log(persona['esta activo'])
console.log(persona['nombre'])
console.log(persona['edad'])

// Acceder a los métodos de un objeto
persona['correo'] = 'juan@mail.com'
console.log(persona['correo'])
console.log(persona)

// Remover una propiedad de un objeto
delete persona['correo']
console.log(persona)

// El operador in
console.log('esta activo' in persona)
console.log('nombre' in persona)
console.log('edad' in persona)
console.log('correo' in persona)
console.log('dfgfdgdf' in persona)
// El nombre de la propiedad a la izquierda de in debe estar entre comillas.

const arrey = [{nombre: 'juan', edad: 32}, {nombre: 'jose', edad: [54]}]
//                   0                   1

const key = 'nombre'

console.log(arrey[1][key])

console.log(arrey[1].edad[0])

/**************************************/
/* TIPOS DE DATOS ==> OBJECT METHODS */
/*************************************/
// Los métodos son funciones que se asocian a un objeto.
const edades = { 34: 1, 23: 2, 45: 1 }


/* .entries() Devuelve un array que contiene todos los pares [key, value] de las propiedades enumerables en formato cadena de texto que le pertenecen a un objeto dado. */
// [['23', 2], ['34', 1], ['45', 1]]
const propValues = Object.entries(edades)
console.log(propValues)

/* .keys() Devuelve un array que contiene todas las claves de las propiedades enumerables de un objeto dado. */
// ['23', '34', '45']
console.log(Object.keys(edades))

/* .values() Devuelve un array que contiene todos los valores de las propiedades enumerables de un objeto dado. */
// [2, 1, 1]
console.log(Object.values(edades))

/* .fromEntries() Devuelve un nuevo objeto de los pares iterables [key, value]. (Este método hace lo contrario a Object.entries). */
const edadesArray = [['nombre', 'Juan'], ['edad', 23], ['correo', 'juan@mail.com']]

const obj = Object.fromEntries(edadesArray)

console.log(obj)

/* .assign() Asigna una o más propiedades de un objeto a un objeto destino. */
const newObject = {}

Object.assign(newObject, obj, { nombre: 'Pablo' })

console.log(newObject)

/* .freeze() Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades. */

Object.freeze(newObject)

console.log(newObject)
newObject.edad = 50

console.log(newObject)

/* .isFrozen() Devuelve un booleano que indica si un objeto está congelado. */
console.log(Object.isFrozen(newObject))
console.log(Object.isFrozen(obj))





// Más información: https://www.notion.so/academlo/Objetos-a64c564dd8bd4ed38a5a186bb7c39fa4
