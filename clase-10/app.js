// Este es un comentario

/* 
Este es un comentario multilinea
*/

// // como definir una variable
// let apellido = "Benedicto";    
// let email = "email@email.com";
// let message = "iuFH";
// /* 
// let: es una palabra reservada
// apellido: es el nombre de la variable
// "Benedicto" es un dato
// */

// // console.log(variable);   para printear en la consola del navegador.

// // Las variables tienen 3 instancias: declaracion -> asignacion >- reasignacion

// let edad;   // es una variable vacia declarada

// edad = 32;   // aqui se le asigno un valor a la variable

// // declarar variables en comas
// let edadPerro, nombrePerro;     // nomenclatura cammelcase

// let edadPerrunaAHumana = edadPerro * 7;

// // como concatenar strings -> con + (clasica)
// // console.log("Mi perro se llama " + nombrePerro + " y tiene " + edadPerrunaAHumana + " años humanos.");

// // concatenacion PRO (template string). Se pueden inyectar datos dentro
// // back stick `${}` ( alt gr + } ) 
// console.log(`Mi perrita se llama ${nombrePerro} y tiene ${edadPerrunaAHumana} años humanos.`);

// input -> procesamiento | almacenamiento -> output

// coersion de tipos 
// console.log("10" + 1) -> 101
// console.log("10" - 1) -> 9

// TIPOS DE DATOS //

// Complejos|compuestos: para acceder al tipo que lo represeta hay que acceder a la ubicacion

// Primitivos: el tipo dato representa directamente al dato  
// ejemplo: let apellido = "Benedicto";
// string
// number
// boolean (true-false)
// undefined let variableIndefinida; se declaran pero no tiene asignado un dato.
// null -> es una variable siempre vacía, a diferencia de undefined que espera un valor. 
// NaN
// Symbol -> credenciales o id unicos. Son funciones.

// typeof variable; para saber el tipo de variable

// prompt("¿Pregunta al usuario?"); // cuando se le pide algo al usuario.
// let preguntaUsuario = prompt("¿Pregunta al usuario?"); // para que se guarde la respuesta en una variable.

// Crear un programa que pida ingresar una cantidad de minutos mediante un prompt y muestre un mensaje con el resultado de la conversion a segundos.

let tiempoSegundos = prompt("Ingrese una cantidad de segundos:");

let tiempoMinutos = tiempoSegundos / 60; 

console.log(`Usted ingresó ${tiempoSegundos} segundos, lo cual equivalen a ${tiempoMinutos} minutos.`);
