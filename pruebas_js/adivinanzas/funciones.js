function cargarNumeros(nElementos) {
    numsSorteo = [];
    for (let i = 0; i < nElementos; i++) {
        numSorteo = parseInt(prompt(`Ingrese el número ${i + 1} para el sorteo del numero, comprendido entre 1 y 100`));
        numsSorteo.push(numSorteo);
    }
    return numsSorteo;
}

function seleccionarAleatorio(numsSorteo)  {
    numAleatorio = numsSorteo[Math.floor(Math.random() * numsSorteo.length)];
    return numAleatorio;
}

function adivinar() {
    let fantasma = seleccionarAleatorio(numsSorteo);
    do {
        let intentos = 0;
        let numero = parseInt(prompt('Ingrese un número entre 1 y 100'));
        if (isNaN(number)) {
            alert('Debe ingresar un número valido');
            return null;
        } else if (numero < 1 || numero > 100) {
            alert('El número debe estar comprendido entre 1 y 100');
            return null;
        } else {
            let diff = Math.abs(fantasma - numero);
            if (numero > fantasma) {
                if (diff === 1) {
                    alert('El numero es mayor, el numero esta demasiado cerca');
                } else if (diff < 5) {
                    alert('El numero es mayor, el numero esta bastante cerca');
                } else if (diff < 10){
                    alert('El numero es mayor, el numero esta cerca ');
                } else {
                    alert('El numero es mayor');
                }
            } else if (numero < fantasma) {
                if (diff === 1) {
                    alert('El numero es menor, el numero esta demasiado cerca');
                } else if (diff < 5) {
                    alert('El numero es menor, el numero esta bastante cerca');
                } else if (diff < 10){
                    alert('El numero es menor, el numero esta cerca ');
                } else {
                    alert('El numero es menor');
                }
            }
            if (diff === 0 && intentos < 5) {
                alert('Ganaste');
                return null;
            }
            intentos++;
        }

    } while (intentos > 5)
}