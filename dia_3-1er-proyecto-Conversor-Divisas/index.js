const urlBase = "https://dolarapi.com/v1";
const endpoints = {
    dolares: "dolares",
    otrasMonedas: "cotizaciones",
};

(async () => {
    cargarCotizaciones();
    cargarAnioCopyright();
})();

function crearCard({ nombre, compra, venta }) {
    return `
        <article class="card">
            <h3>${nombre}</h3>
            <div class="card-content">
                <div class="card-content-item">
                    <h4>Compra</h4>
                    <p>$ ${redondear(compra)}</p>
                </div>
                <hr>
                <div class="card-content-item">
                    <h4>Venta</h4>
                    <p>$ ${redondear(venta)}</p>
                </div>
            </div>
        </article>
    `;
}

function agregarCards(cotizaciones) {
    let content = "";

    cotizaciones.forEach((cotizacion) => {
        const card = crearCard(cotizacion);
        content += card;
    });

    return content;
}

function removerSkeleton() {
    document.querySelectorAll(".skeleton").forEach((skeleton) => {
        skeleton.remove();
    });
}

function redondear(numero) {
    return numero.toFixed(2);
}

async function obtenerCotizaciones(endpoint) {
    const response = await fetch(`${urlBase}/${endpoint}`);
    if (!response.ok) return;

    return await response.json();
}

async function obtenerOtrasMonedas() {
    const cotizaciones = await obtenerCotizaciones(endpoints.otrasMonedas);
    return cotizaciones.filter((cotizacion) => cotizacion.moneda !== "USD");
}

async function cargarCotizaciones() {
    const sectionDolares = document.querySelector("#section-dolares");
    const sectionOtrasMonedas = document.querySelector(
        "#section-otras-monedas"
    );
    const cotizacionesDolar = await obtenerCotizaciones(endpoints.dolares);
    const cotizacionesOtrasMonedas = await obtenerOtrasMonedas();

    const sectionContentDolares = agregarCards(cotizacionesDolar);
    const sectionContentOtrasMonedas = agregarCards(cotizacionesOtrasMonedas);

    removerSkeleton();

    sectionDolares.innerHTML += sectionContentDolares;
    sectionOtrasMonedas.innerHTML += sectionContentOtrasMonedas;
}

function cargarAnioCopyright() {
    const year = new Date().getFullYear();
    document.querySelector("#year").textContent = year;
}
