function generarNumeros(n) {
    const numeros = [];
    for (let i = 0; i < n; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    return numeros;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function esImpar(numero) {
    return numero % 2 === 1;
}

function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function filter(numeros, fn) {
    const resultados = [];
    for ( const num of numeros) {
        if (fn(num)) {
            resultados.push(num);
        }
    }
    return resultados;
}

export { generarNumeros, esPar, esImpar, esPrimo, filter };