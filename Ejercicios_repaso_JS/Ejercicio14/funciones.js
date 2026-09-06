function cargarNotas(numero) {
    let notas = [];
    for (let i = 0; i < numero; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        notas.push(nota);
    }
    return notas;
}

function contarAprobados(notas) {
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 5) {
            contador++;
        }
    }
    return contador;
}

function contarSuspensos(notas) {
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            contador++;
        }
    }
    return contador;
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function hallarNotaMaxima(notas) {
    let maxima = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > maxima) {
            maxima = notas[i];
        }
    }
    return maxima;
}

function hallarNotaMinima(notas) {
    let minima = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] < minima) {
            minima = notas[i];
        }
    }
    return minima;
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function buscarNota(notas, buscar) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === buscar) {
            return i;
        }
    }
    return -1;
}