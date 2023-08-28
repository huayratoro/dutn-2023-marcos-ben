// arrays

// datos compuestos: para almacenar muchos datos. Para acceder es a traves de su posicion
let carritoDeCompras = ["prod1", "prod2", "prod3"];  // es una lista

//
console.log(carritoDeCompras.includes("prod4")); // pregunta si existe el elemento en el array

carritoDeCompras.push("prod4"); // agregar un elemento al final

console.log(carritoDeCompras);

// CICLOS (for)
// for(se crea el indice; condicion sobre el indice; actualizacion del indice)
// for(let indice = 0; indice; indice = indice + 1){}

// crear u programa que recorra el array e imprima por pantalla el siguiente mensaje: "En la posición x está el elemento X".
let largoDelArray = carritoDeCompras.length;
for(let indice=0; indice < largoDelArray; indice = indice + 1) {
    console.log(`En la posición ${indice} está el elemento ${carritoDeCompras[indice]}`);
}