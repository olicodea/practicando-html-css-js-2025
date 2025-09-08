const url = "https://pokeapi.co/api/v2/pokemon";

//FETCH
// Con then
// fetch(`${url}/1`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// Con async await
let pokemon = null;

// const obtenerPokemon = async () => {
//     const response = await fetch(`${url}/3`);

//     if (!response.ok) throw new Error("No se pudo obtener el pokemon");

//     const data = await response.json();
//     console.log(data);
// };

async function obtenerPokemon() {
    const response = await fetch(`${url}/3`);

    if (!response.ok) throw new Error("No se pudo obtener el pokemon");

    const data = await response.json();
    console.log(data);
}

obtenerPokemon();
