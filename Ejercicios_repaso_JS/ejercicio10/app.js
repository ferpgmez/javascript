let minimo = parseInt(prompt("Ingrese el menor valor: "));
let maximo = parseInt(prompt("Ingrese el mayor valor: "));
let tamanio = parseInt(prompt("Ingrese el tamaño del array: "));

let array = generarArrayAleatorio(tamanio, minimo, maximo);
let parent = document.body;
let p = document.createElement("p");
p.textContent = "Array: " + array.join(", ");
parent.appendChild(p);
