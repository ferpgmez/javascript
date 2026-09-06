let pares = 0;
let impares = 0;

for (let n =1; n <= 10; n++) {
    let num = parseInt(prompt("Ingrese un número:"));
    if (esPar(num)) {
        pares++;
    } else {
        impares++;
    }
}

let parent = document.body;
let p = document.createElement("p");
p.textContent = "Cantidad de nros pares: " + pares;
parent.appendChild(p);
let p2 = document.createElement("p");
p2.textContent = "Cantidad de nros impares: " + impares;
parent.appendChild(p2);