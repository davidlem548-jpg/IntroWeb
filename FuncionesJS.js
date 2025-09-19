function multiplicarClasica(a, b) {
    return a * b;
}

let arrowMultiplicar = (a, b) => a * b;

function cuadradoClasica(a) {
    return a * a;
}

let arrowCuadrado = a => a * a;

console.log(multiplicarClasica(3, 4));
console.log(arrowMultiplicar(3, 4));
console.log(cuadradoClasica(5));
console.log(arrowCuadrado(5));
