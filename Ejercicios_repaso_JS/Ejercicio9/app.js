// cargo un array con 10 elementos aleatorios entre 0 y 100
let array = [];
let potencias = [];
let raices = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 101));
    potencias.push(Math.pow(array[i], 3));
    raices.push(Math.sqrt(array[i]).toFixed(2));
}

// muestro los arrays
parent = document.body;
let p = document.createElement("p");
p.textContent = "Array: " + array.join(", ");
parent.appendChild(p);
let p2 = document.createElement("p");
p2.textContent = "Potencias: " + potencias.join(", ");
parent.appendChild(p2);
let p3 = document.createElement("p");
p3.textContent = "Raices: " + raices.join(", ");
parent.appendChild(p3);