/*****************************************/
/* Estructura del código ==> Sentencias */
/****************************************/
/* Las sentencias son construcciones sintácticas y comandos que realizan acciones. */
console.log('Hola') // Una sentencia
console.log('Mundo!!!') // Otra sentencia

// console.log('Hola'), console.log('Como estan')

/* Generalmente, las sentencias se escriben en líneas separadas para hacer que el código sea más legible: */
console.log('Hola') 
console.log('Como estan')

/****************************************************/
/* Estructura del código ==> Indentación (sangría) */
/***************************************************/
/* Hay dos tipos de indentación:

Indentación horizontal: 2 o 4 espacios.
  - Se realiza una sangría horizontal utilizando 2 o 4 espacios o el símbolo de tabulación horizontal (key Tabulador). Cuál elegir es una vieja guerra santa. Los espacios son más comunes hoy en día. 

Indentación vertical: líneas vacías para dividir código en bloques lógicos.
  - A menudo nuestro código se puede dividir en bloques lógicos. Por ejemplo, la inicialización de variables, un bucle principal y la devolución del resultado se dividen verticalmente */

let i = 0
// Indentación vertical
// while (i < 10) {
//   console.log('código') // Indentación horizontal: 2 espacios.
// }
// Indentación vertical
console.log(i)

/*******************************************/
/* Estructura del código ==> Punto y coma */
/******************************************/
/* Se puede omitir un punto y coma en la mayoría de los casos cuando existe un salto de línea. JavaScript interpreta el salto de línea como un punto y coma “implícito”. Esto se denomina inserción automática de punto y coma. */

/* En la mayoría de los casos, una nueva línea implica un punto y coma. Pero hay casos en que una nueva línea no significa un punto y coma. */
/* Por ejemplo cuando la siguiente sentencia comienza con (), [], {}, el punto y coma no se inserta automáticamente. */
// console.log('Hola')
// console.log('Hola')
// console.log('Hola');
// [1, 2, 3].forEach(element => { console.log(element) })

/******************************************/
/* Estructura del código ==> Comentarios */
/*****************************************/
/* A medida que pasa el tiempo, nuestros códigos se vuelven cada vez más complejos. Se hace necesario agregar comentarios que describan lo que hace el código y por qué. */

/* Los comentarios de una línea comienzan con dos caracteres de barra diagonal //. */
// Declarando una variable

// Los comentarios de varias líneas comienzan con una barra inclinada y un asterisco /* y terminan con un asterisco y una barra inclinada */
/* 
Crear una lista:
Nombre,
Edad,
Correo.
*/

/* Los comentarios se pueden poner en cualquier lugar de un script. No afectan su ejecución porque el motor simplemente los ignora. */
/* Por favor, no dudes en comentar tu código. */

/************************************************/
/* Estructura del código ==> Bloques de código */
/***********************************************/
/* Los bloques de código son construcciones que contienen sentencias. Podemos usar esto para aislar un fragmento de código que realiza su propia tarea. */

{
  console.log('Hola')
}

{
  [1, 2, 3].forEach(element => { console.log(element) })
}

/* Tambien nos permite crear variables locales de bloque, para if, for, while y otros, las variables declaradas dentro de {...} también son solo visibles en su interior. Eso es genial. */