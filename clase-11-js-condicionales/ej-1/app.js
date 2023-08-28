// Cree un programa que indique que solo puede ver la pelicula si: tiene mas de 15 años o más, o tiene autorizacion de sus padres.
let body = document.querySelector("body");
let button = document.querySelector("#btn");

const contEdad = document.getElementById("cont-edad");

button.addEventListener("click", () => {    // es lo mismo que function() { 
    document.getElementById("cont-main").style.display = "none"
    contEdad.style.display = "inline"
    // let edad = Number(document.querySelector("#age"));
    // console.log(edad)
    // let edad = Number(prompt("Ingresar la edad, por favor:"));
    // contEdad.style.display='none'
    // if (edad < 15) {
    //     let tieneAutorizacion = prompt("¡No tienes la edad suficiente para ver la película! ¿Tienes la autorización de tus padres?").toLocaleLowerCase()
    //     if (tieneAutorizacion === 'no') {
    //         alert("No tienes la edad suficiente para ver la película ni permiso de tus padres. Lo siento...");
    //         button.classList.add("red")
    //         stop
    //     } else {
    //         alert("Puedes acceder a la película")
    //         button.classList.add("green")
    //     }
    // } else {
    //     alert("Puedes acceder a la película")
    //     button.classList.add("green")
    // }
})