const orders = JSON.parse(localStorage.getItem("orders")) || [];
const params = new URL(window.location).searchParams;
const orderNumber = params.get("orderNumber");
let order = {};

if (orders.length > 0) {
    order = orders.find((order) => order.orderNumber === parseInt(orderNumber));
} else {
    window.location.href = "./index.html";
}

const clientNameElement = document.querySelector("#client-name");
const clientContactElement = document.querySelector("#client-contact");
const totalAmountElement = document.querySelector("#total-amount-span");
const productList = document.querySelector(".product-list");

clientNameElement.textContent = order.customer.name;
clientContactElement.textContent = order.customer.contact;
totalAmountElement.textContent = `$ ${calculateTotalAmount(order.products)}`;

order.products.forEach((product) => {
    const productItem = createProductList(product);
    productList.appendChild(productItem);
});

{
    /* <li>Tralalero Tralala <span class="product-quantity">2</span></li>
<li>Tung Tung Sahur <span class="product-quantity">3</span></li>
<li>Karker karkar Kurkur <span class="product-quantity">1</span></li>
<li>La grande combinazione <span class="product-quantity">1</span></li> */
}

function calculateTotalAmount(products) {
    return Number(
        products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        )
    ).toFixed(2);
}

function createProductList({ name, quantity }) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.classList.add("product-quantity");
    span.textContent = quantity;

    li.textContent = name;
    li.appendChild(span);

    return li;
}
