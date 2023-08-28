// hacer un programa que evalue:
// - si esta nublado que muestre por la consola: Llevar paraguas
// - si esta soleado: No llevar paraguas

// input
let tiempo = prompt("Indique condiciones de tiempo").toLocaleLowerCase();
let tieneParaguas = prompt("Indique si tiene paraguas:").toLocaleLowerCase();

// tiempo.toLocaleLowerCase() pasa todo a minusculas
// procesamiento y almacenamiento
// palabra reservada (if) - condicion () - scope {} 

if (tieneParaguas === "si") {
    tieneParaguas = true
} else {
    tieneParaguas = false
}

if (tiempo === "nublado") { // === exactamente igual
    if (tieneParaguas === true) {   // tambien funciona if (tieneParaguas) porque tieneParanguas es true
        console.log("Podés salir tranquilo");
    } else if(tiempo === "fresquito") {
        console.log("Llevate campera");
    } else {
        console.log("No te olvides el paraguas!");
    }
} else {
    if (tieneParaguas) {
        console.log("No hace falta llevar paraguas");
    }
}

// output

// operadores de comparacion
// >, <, >=, <= mayor, menor mayor igual y menor igual que
// == es igual
// === es estrictamente igual
// !== distinto

// OR -> ||
// AND -> &&