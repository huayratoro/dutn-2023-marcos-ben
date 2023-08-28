const $body = document.getElementById("body")
// pido los tres colores
const r = prompt("Ingrese la escala para el rojo:")
const g = prompt("Ingrese la escala para el verde:")
const b = prompt("Ingrese la escala para el azul:")
//cambio color
$body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`