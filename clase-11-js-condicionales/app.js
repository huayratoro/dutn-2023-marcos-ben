let body = document.querySelector("body");  // tengo guardada toda la info del body. 
let button = document.querySelector("#btn");    // recupero el elemento boton para su futura manipulacion.

// todo lo que el usuario haga en la web es un evento
button.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
    } else {
        body.classList.add("dark")
    }
})

