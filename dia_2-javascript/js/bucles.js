let tareas = ["Leer", "Correr", "Programar", "Dormir", "Siestita"];

// FOR

for (let i = 0; i < tareas.length; i++) {
    // console.log(tareas[i]);
}

let lenguajes = ["Python", "Java", "JavaScript", "C++", "C#", "PHP", "HTML"];

// FOR OF
for (let lenguaje of lenguajes) {
    console.log(lenguaje);
}

// FOR IN
for (let index in lenguajes) {
    console.log(index);
}

// FOR EACH
lenguajes.forEach((lenguaje, index) => {
    console.log(lenguaje, index);
});
