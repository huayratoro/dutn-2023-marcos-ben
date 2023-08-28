const $titulo = document.getElementById("titulo")

// quiero cambiar el contenido del objeto titulo desde JS
$titulo.textContent = "Cambio dinamico de titulo"

/////// OBJETOS
// Sirven para representar objetos reales
// coleccionan datos. los datos q insertamos son propios del objetos 
// propiedades -> claves y valores 
// tienen métodos 
// tienen su propio scope this
// las propiedades no tienen indice, todas estan al mismo nivel
// se declaran con {}

const celular = {
    camaras : 3,
    marca : "xiaomi",
    carcasa : true,
    esNuevo : false
} 

// Ejemplo de carrito de compras

const carritoDeCompra = []

// el array se llena a medida que el usuario pushea objetos en la tienda

const producto1 = {
    producto: "zapatillas",
    precio: 40000,
    color: "negra",
    sku: 74616, // id del producto en la tienda
}

carritoDeCompra.push({  // push es para agregar elemento a un array
    producto1
})

// otro producto

const producto2 = {
    producto: "televisor",
    precio: 200000,
    color: "negra",
    sku: 16483, // id del producto en la tienda
}

carritoDeCompra.push({
    producto2
})

////////////////////// uso de propiedades de un objeto

const ada = {
    edad: 1,
    raza: "pichicho",
    hobbies: ["comer", " jugar con pelota"],
    color: "marron"
}

// para leer las propiedades:
// console.log(ada['hobbies'])

// como agrego propiedades al objeto??
ada.velocidad = "lenta"

// borrar propiedades
delete ada.velocidad

// --------------------------------------------------
