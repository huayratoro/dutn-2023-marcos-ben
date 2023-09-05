// destructuring

const persona = {
    nombre: "marcos",
    edad: 27,
    hobbies: ["programar", "tocar la guitarra", "ver peliculas"],
    heladoFav: "limon"
}

// con esto puedo sacar todos los atributos del objeto 
const {nombre, edad, hobbies, heladoFav} = persona  

// arrow functions -> //
// sintaxis normal
function funcion(argumento) {
    console.log("Hace algo")
}
// sintaxis arrow
const funcion = (argumento) => {
    console.log("Hace algo")
}
// operador ternario -> if -> condicional
// condicional normal
const clima = "nublado"
if(clima === "nublado") {
    console.log("lleva paraguas")
} else {
    console.log("no lleves paraguas")
}
// con operador ternario
// condicion -> ? en caso de q sea true : en caso que sea false
clima === "nublado" ? console.log("lleva paraguas") : console.log("no lleves paraguas")
// metodo para array llamado map -> me retorna un array con las modificaciones en cada objeto
const nombres = [
    "juan", "pepe", "andres"
]
const nombresModificados = nombres.map((nombre) => {
    return {
        name: nombre,
        presente: true
    }
})    // () => {} callback
