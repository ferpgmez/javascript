import { generarNumeros, esPar, esImpar, esPrimo, filter } from "./funciones.js";

const numeros = generarNumeros(100);
const pares = filter(numeros, esPar);
const impares = filter(numeros, esImpar);
const primos = filter(numeros, esPrimo);

const parent = document.body;

let p1 = document.createElement("p");
p1.textContent = `Pares: ${pares.join(", ")}`;
parent.appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = `Impares: ${impares.join(", ")}`;
parent.appendChild(p2);

let p3 = document.createElement("p");
p3.textContent = `Primos: ${primos.join(", ")}`;
parent.appendChild(p3);