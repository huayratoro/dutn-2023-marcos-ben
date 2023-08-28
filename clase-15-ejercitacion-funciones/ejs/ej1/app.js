const $titulo = document.getElementById("titulo")
const texto = prompt("Ingrese su nombre, por favor")
// rellenar el h1 con el nuevo texto
$titulo.textContent = `¡Hola ${texto}!`