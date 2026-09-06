let numeros = []
let positivos = 0
let negativos = 0
let numero = 0

do {
    numero = parseInt(prompt("Ingrese un número (0 para terminar): "));
    numeros.push(numero);
    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        break;
    }    
} while (numero != 0);

let parent = document.body;
let p = document.createElement("p");
p.textContent = "Números ingresados: " + numeros.join(", ");
parent.appendChild(p);
let p2 = document.createElement("p");
p2.textContent = "Cantidad de números positivos: " + positivos;
parent.appendChild(p2);
let p3 = document.createElement("p");
p3.textContent = "Cantidad de números negativos: " + negativos;
parent.appendChild(p3);