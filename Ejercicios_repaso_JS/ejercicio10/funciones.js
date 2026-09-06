function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarArrayAleatorio(tamanio, min, max) {
    const array = [];
    for (let i = 0; i < tamanio; i++) {
        array.push(generarNumeroAleatorio(min, max));
    }
    return array;
}