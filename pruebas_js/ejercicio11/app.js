let nombre = document.querySelector('#name').value;
let apellido = document.querySelector('#lname').value;
let antiguedad = parseInt(document.querySelector('#antiguedad').value);
let salario = parseFloat(document.querySelector('#salario').value);
let btnAceptar = document.querySelector('#btnAceptar');
let btnCancelar = document.querySelector('#btnCancelar');
let resultado = document.querySelector('#result');
let form = document.querySelector('#actForm');

btnAceptar.addEventListener('click', (e) => {
    e.preventDefault();
    
    nombreCompleto();
    actualizarSalario(antiguedad, salario);
    mostrarSalario();
})

btnCancelar.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
})

function actualizarSalario(antiguedad, salario) {
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

function nombreCompleto() {
    let nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto;
}

function mostrarSalario() {
    actualizacion = `<p>${nombreCompleto()} tu salario actual es: ${salario} y tu
     nuevo salario es: ${actualizarSalario(antiguedad, salario)}</p>`;
    resultado.insertAdjacentHTML("afterbegin", actualizacion);
    nombre = '';
    apellido = '';
    antiguedad = '';
    salario = '';
}

