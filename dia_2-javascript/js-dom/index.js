// const titulo = document.getElementById("titulo");
const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector(".subtitulo");

const btnAgregar = document.querySelector("#btn-agregar");
const listaMensajes = document.querySelector(".lista-mensajes");
let contador = 0;

let mensajes = [
    "Hola agustin, aguante los patapimbas",
    "Como estas Jessi? metele a dnd-kit, vos podes",
    "Ahora vemos el proyecto Ecaverog",
    "pizza, aguante la de muzza",
];

titulo.textContent = "Modificando el DOM";
subtitulo.textContent = "SUBTITULO MODIFICADO";

btnAgregar.addEventListener("click", () => {
    // if (contador === mensajes.length) return;
    if (contador === mensajes.length) return alert("No hay mas mensajes");

    let mensaje = document.createElement("li");
    mensaje.textContent = mensajes[contador];

    listaMensajes.appendChild(mensaje);
    contador++;
});


