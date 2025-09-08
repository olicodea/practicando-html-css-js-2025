let conectado = true;

// If Else

if (conectado) {
    console.log("Conectado");
} else {
    console.log("Desconectado");
}

// Ternario
console.log(conectado ? "Conectado" : "Desconectado");

// Switch

switch (conectado) {
    case true:
        console.log("Conectado");
        break;
    case false:
        console.log("Desconectado");
        break;
}

// Otro ejmeplo de switch

let color = "rojo";

switch (color) {
    case "rojo":
        console.log("El color es rojo");
        break;
    case "verde":
        console.log("El color es verde");
        break;
    default:
        console.log("El color es desconocido");
}
