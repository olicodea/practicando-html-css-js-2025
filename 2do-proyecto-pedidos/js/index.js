const orders = JSON.parse(localStorage.getItem("orders"));
const sectionOrders = document.querySelector("#section-orders"); // document.getElementById("section-orders");

if (orders) {
    orders.forEach((order) => {
        const cardOrder = crearCard(order);
        sectionOrders.appendChild(cardOrder);
    });
}

function crearCard({ orderNumber, customer, products }) {
    const card = document.createElement("a");
    const h3 = document.createElement("h3");
    const pClienteNombre = document.createElement("p");
    const pProductos = document.createElement("p");

    h3.textContent = `Pedido Nº ${formatearNroPedido(orderNumber)}`;
    pClienteNombre.textContent = `Cliente: ${customer.name}`;
    pProductos.textContent = `${products.length} productos`;

    card.classList.add("card");
    card.href = `./order-detail.html?orderNumber=${orderNumber}`;
    card.appendChild(h3);
    card.appendChild(pClienteNombre);
    card.appendChild(pProductos);

    return card;
}

function formatearNroPedido(orderNumber) {
    return orderNumber.toString().padStart(6, "0");
}
