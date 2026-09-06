let fecha = new Date();

let anho = fecha.getFullYear();
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mes = fecha.getMonth();
let dia = fecha.getDate();
let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let diaSemana = diasSemana[fecha.getDay()];
let hora = fecha.getHours();

let parent = document.body;
let p = document.createElement("p");
p.textContent = "Fecha actual: " + diaSemana + ", " + dia + " de " + meses[mes] + " de " + anho + " a las " + hora + " horas.";
parent.appendChild(p);