/******************************/
/* Ejercicios con funciones: */
/*****************************/
// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".
function datos(nombre, edad){
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
}
datos( 'Nicolas', 27)
/*
1 - Declara una variable global llamada saludo y colocale como valor "Hola los saludo desde:"
2 - Declara una función sin parámetros, dentro crea una varaible local llamada pais y colócala como valor el país de donde vienes.
3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
*/
const saludo = 'Hola, los saludo desde:'

function saludos(){
    const pais = 'Colombia'
    console.log(saludo, pais)
}
saludos()
// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
let global = 'global'
function parametros(num, num2){
    const suma2 = num + num2
    console.log(suma2)
    'global' = suma2
}
parametros (12, 24)
// Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.
function resultado(global){
const nuevoResultado = global * 2
console.log(nuevoResultado)
}
resultado(global)

// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".

// Crea una función que compruebe si 2 números son iguales. Si lo son, retorna true, si no, retorna false.
