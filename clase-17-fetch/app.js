// ////////////////////// CORREGIR CON VIDEO!

// // JSON -> para aplicaciones -> es un string
// // este string va para el backend de la web.
// // Sintaxis
// // 1 - no acepta comentarios
// // 2 - las keys de los objetos siempre con "", nunca con ''
// // 3 - solo acepta objetos, arrays o datos literales (strings) 

// // JSON.stringify(objeto) --> esto es para convertir a JSON
// // JSON.parse(json) --> es para convertir de JSON a objeto

// // API -> programita desde el backend que funciona con endpoints. Puntos de salida q reciben/envian info entre el backend y el frontend. Los endpoints son URLs.
// // ejemplo de API : https://rickandmortyapi.com/documentation
// // fetch es una api de JS nativa que permite realizar peticiones HTTP de un forma asincrónica. Funciones: 
// // GET consumir data
// // POST crear data
// // PUT modificar data
// // DELETE borrar data
// // PATCH modificar data

// const peticion = fetch("https://rickandmortyapi.com/api/character/") // promesa: es un acuerdo q despues de algun tiempo obtendre una respuesta

// // .then se ejecuta despues de que el servidor me de algo. callback: funcion q se ejecuta despues de algo
// peticion.then((response) => {
//     return response.json()
// }).then((data) => {
//     const personajes = data.results
//     for(let i = 0; i < personajes.lenght; i++){
//         const nombre = personajes[i].name
//         console.log(nombre)
//     }
// }
// )

////// Ejercicio: crear una web de forma dinamica

// petición HTTP -> GET
const peticion = fetch("https://rickandmortyapi.com/api/character")

// promesa -> es un acuerdo que despues de x tiempo obtendré una respuesta

// callback -> una función que se ejecuta despues de alga

peticion.then((response) => {
  return response.json()
}).then((data) => {
  console.log(data)
  const $contenedor = document.getElementById("cont-personajes")
  const personajes = data.results

  for(let i = 0; i < personajes.length; i++) {
    const id = personajes[i].id
    const nombre = personajes[i].name
    const estado = personajes[i].status
    const imagen = personajes[i].image
    const genero = personajes[i].gender
    const especie = personajes[i].species

    $contenedor.innerHTML += 
    `<div class="personaje">
      <img
        src="${imagen}"
        alt="foto de ${nombre}"
      />
      <h3>${id} - ${nombre}</h3>
      <p>Gender: ${genero}</p>
      <p>Species: ${especie}</p>
      <p>Status: ${estado}</p>
    </div>`
  }
})