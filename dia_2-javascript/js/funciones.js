let numero1 = 10;
let numero2 = 20;

function sumar(num1, num2) {
    let resultado = num1 + num2;
    // console.log("La suma es: " + resultado);
    // console.log(`La suma es: ${num1 + num2}`)
    console.log(`La suma es: ${resultado}`);
}

sumar(numero1, numero2);

function restar(num1, num2) {
    return num1 - num2;
}

console.log("La resta es: " + restar(numero1, numero2));

const multiplicar = (num1, num2) => num1 * num2;