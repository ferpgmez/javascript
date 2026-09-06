const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let temperaturas = [];
let temperaturaMedia = 0;
let sumaTemperaturas = 0;

for (let i = 0; i < diasSemana.length; i++) {
    let temperatura = parseInt(prompt("Ingrese la temperatura del " + diasSemana[i] + ": "));
    temperaturas.push(temperatura);
    sumaTemperaturas += temperatura;
    temperaturaMedia = sumaTemperaturas / diasSemana.length;
}

let temperaturaMaxima = Math.max(...temperaturas);
let temperaturaMinima = Math.min(...temperaturas);

let parent = document.body;
let p = document.createElement("p");
p.textContent = "Temperaturas: " + temperaturas.join(", ");
parent.appendChild(p);
let p2 = document.createElement("p");
p2.textContent = "Temperatura media: " + temperaturaMedia.toFixed(2);
parent.appendChild(p2);
let p3 = document.createElement("p");
p3.textContent = "Temperatura maxima: " + temperaturaMaxima;
parent.appendChild(p3);
let p4 = document.createElement("p");
p4.textContent = "Temperatura minima: " + temperaturaMinima;
parent.appendChild(p4);


