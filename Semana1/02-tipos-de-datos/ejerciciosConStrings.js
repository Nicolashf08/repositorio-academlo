/***********************************/
/* Ejercicios con tipos de datos: */
/**********************************/
const nombre = 'JS'
let apellido

/* Colocar el resultado después de cada // */
console.log(`Hola ${1}`) // Hola 1
console.log(`Hola ${'nombre'}`) // Hola Nombre
console.log(`Hola ${nombre}`) // Hola JS

console.log('Una cadena de texto'[4]) // C
console.log('Una cadena de texto'[0]) // U

console.log('LasQuinceLetras'.length) // 15

console.log(apellido) // undefined

// Si la frase contiene la palabra debe retornar true, false si no.
const frase = 'Hola, mi nombre es Juan y tengo 23 años'

//console.log(frase.includes('Juan')) // True
//console.log(frase.includes('Victor')) // False

// Que valor retorna lo siguiente:
const texto = 'Aprendiendo Fundamentos de JavaScript'

console.log(texto.split(' ').at(-1).length) // 10

// Siguiendo el ejemplo anterior para obtener la longitud de la última palabra de la frase, realiza lo siguiente:
// reemplazar la última palabra de la frase por otra.
const oracion = 'El perro come pescado'
const remplazo = 'croquetas'

console.log(oracion.replace(oracion.slice(oracion.lastIndexOf(" ") + 1), remplazo))

// Extraer la edad de cada cadena y retornar la suma de ellas. La edad siempre será la penúltima palabra de la cadena.
const cadena = 'Hola, mi nombre es Erik y tengo 35 años'

let indice1 = cadena.lastIndexOf(" ", (cadena.lastIndexOf(" ")) - 1 );
let indiceCadena = parseInt(cadena.slice(indice1 + 1, cadena.lastIndexOf(" ")));

const cadena2 = 'Hola, mi nombre es Brayan y tengo 25 años'

let indice2 = cadena2.lastIndexOf(" ", (cadena2.lastIndexOf(" ")) - 1 );
let indiceCadena2 = parseInt(cadena2.slice(indice2 + 1, cadena2.lastIndexOf(" ")));

const cadena3 = 'Hola, mi nombre es Andres y tengo 40 años'

let indice3 = cadena3.lastIndexOf(" ", (cadena3.lastIndexOf(" ")) - 1 );
let indiceCadena3 = parseInt(cadena3.slice(indice3 + 1, cadena3.lastIndexOf(" ")));

let sumaRetorno = indiceCadena + indiceCadena2 + indiceCadena3;
console.log(sumaRetorno);

// De la siguiente cadena de texto deberás transformarlo en un arreglo con cada una de las palabras de la frase y en mayúsculas.
const formato = 'HoLa cOMo eStas'
let arreglo = formato.toUpperCase(formato.split(" "));
console.log(arreglo);



