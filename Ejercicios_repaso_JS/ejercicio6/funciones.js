function sumarVector(vector) {
    let total = 0;
    for (let i = 0; i < vector.length; i++) {
        total += vector[i];
    }
    return total;
}

function media(vector) {
    let total = sumarVector(vector);
    return total / vector.length;
}

function max(vector) {
    let maxValue = vector[0];
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > maxValue) {
            maxValue = vector[i];
        }
    }
    return maxValue;
}

function min(vector) {
    let minValue = vector[0];
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] < minValue) {
            minValue = vector[i];
        }
    }
    return minValue;
}

function cargarVector() {
    let vector = [];
    let length = parseInt(prompt("Cuantos elementos cargará?: "));
    for (let i = 0; i < length; i++) {
        vector.push(parseInt(prompt("Ingrese el elemento " + (i + 1) + ": ")));
    }
    return vector;
}