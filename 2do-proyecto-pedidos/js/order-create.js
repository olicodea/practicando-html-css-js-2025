const response = await fetch("./data/products.json");
const productsFromJson = response.ok ? await response.json() : [];
let products = productsFromJson.map((item) => ({
    ...item,
    quantity: 0,
}));

const tbody = document.querySelector("#table-products");
const formOrder = document.querySelector("#form-order");

products.forEach((product) => {
    const productRow = createRow(product);
    tbody.appendChild(productRow);
});

function createRow({ id, name, price }) {
    const row = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdQuantity = document.createElement("td");
    const inputQuantity = document.createElement("input");

    tdName.textContent = name;
    tdPrice.textContent = `$ ${round(price)}`;

    inputQuantity.classList.add("input-table");
    inputQuantity.type = "number";
    inputQuantity.value = 0;
    inputQuantity.name = `${id}-quantity`;
    inputQuantity.id = `${id}-quantity`;
    tdQuantity.appendChild(inputQuantity);

    row.appendChild(tdName);
    row.appendChild(tdPrice);
    row.appendChild(tdQuantity);

    return row;
}

function round(num) {
    return Number(num).toFixed(2);
}

formOrder.addEventListener("submit", (event) => {
    event.preventDefault();

    let orderNumber;
    let productsForOrder = products.filter((product) => product.quantity > 0);
    const customer = {
        name: event.target[0].value,
        contact: event.target[1].value,
    };
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length > 0) {
        orderNumber = orders.at(-1).orderNumber + 1;
    } else {
        orderNumber = 1;
    }

    localStorage.setItem(
        "orders",
        JSON.stringify([
            ...orders,
            {
                orderNumber,
                customer,
                products: productsForOrder,
            },
        ])
    );

    window.location.reload();
});

tbody.addEventListener("change", (event) => {
    const productIndex = products.findIndex(
        (product) => `${product.id}-quantity` === event.target.id
    );
    products[productIndex].quantity = event.target.valueAsNumber;
});
