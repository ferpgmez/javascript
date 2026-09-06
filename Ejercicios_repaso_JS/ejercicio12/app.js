let multiplos2 = 0;
let multiplos3 = 0;
let multiplos5 = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Ingrese un número: "));
    if (num % 2 === 0) {
        multiplos2++;
    }
    if (num % 3 === 0) {
        multiplos3++;
    }
    if (num % 5 === 0) {
        multiplos5++;
    }
}

let parent = document.body;
let p = document.createElement("p");
p.textContent = "Cantidad de multiplos de 2: " + multiplos2;
parent.appendChild(p);
let p2 = document.createElement("p");
p2.textContent = "Cantidad de multiplos de 3: " + multiplos3;
parent.appendChild(p2);
let p3 = document.createElement("p");
p3.textContent = "Cantidad de multiplos de 5: " + multiplos5;
parent.appendChild(p3);