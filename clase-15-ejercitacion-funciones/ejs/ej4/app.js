const $imagen = document.getElementById("imagen");
// pedir tamaño de imagen
const tam = prompt("ingresar un tamaño de imagen que sea chica, mediana o grande");
// cambiar tamaño a imagen
if (tam === "chica") {
    $imagen.style.width = "200px";
};
if (tam === "mediana") {
    $imagen.style.width = "500px";
};
if (tam === "grande") {
    $imagen.style.width = "800px";
};
if (tam != "chica" && tam != "mediana" && tam != "grande") {
    $imagen.style.width = "0px";
    alert(`El string ${tam} no corresponde`)
};