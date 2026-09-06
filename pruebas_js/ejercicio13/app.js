let parent = document.body;
let n = parseInt(prompt('Ingrese el numero de empleados'));

// cargo los nombres
let nombre = prompt('Ingrese el nombre del empleado');
let apellido = prompt('Ingrese el apellido del empleado');
let salario = prompt('Ingrese el salario del empleado');
let antiguedad = prompt('Ingrese la antiguedad del empleado');

function actualizarSalario(salario, antiguedad) {
    let nuevoSalario = 0;
    if (salario <= 500 && antiguedad >=10) {
        nuevoSalario = salario * 1.2;
    } else if (salario <= 500 && antiguedad < 10) {
        nuevoSalario = salario * 1.05;
    } else if (salario > 500) {
        nuevoSalario = salario;
    }
    return nuevoSalario;
}


function nombreCompleto(nombre, apellido) {
    let nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto;
}

nombres = [];
apellidos = [];
salarios = [];
antiguedades = [];

for (let i = 0; i < n; i++) {
    nombres[i] = prompt('Ingrese el nombre del empleado');
    apellidos[i] = prompt('Ingrese el apellido del empleado');
    salarios[i] = prompt('Ingrese el salario del empleado');
    antiguedades[i] = prompt('Ingrese la antiguedad del empleado');
}

let cadena = `<table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Salario</th>
                    <th>Antiguedad</th>
                    <th>Salario actualizado</th>
                </tr>`;
for (let i = 0; i < n; i++) {
    cadena += `<tr>
                    <td>${nombres[i]}</td>
                    <td>${apellidos[i]}</td>
                    <td>${salarios[i]}</td>
                    <td>${antiguedades[i]}</td>
                    <td>${actualizarSalario(salarios[i], antiguedades[i])}</td>
                </tr>`;
}
cadena += `</table>`;
parent.innerHTML = cadena;
