import Cliente from './clientes.js';
import Operaciones from './operaciones.js';

let form = document.querySelector('#form');
let nombre = document.querySelector('#name').value;
let apellido = document.querySelector('#lname').value;
let edad = parseInt(document.querySelector('#age').value);
let saldo = parseFloat(document.querySelector('#saldo').value);
let cliente = new Cliente(nombre, apellido, edad, saldo);
let fecha  = document.querySelector('#fecha').value;
let operacion = new Operaciones(fecha);
let radio_out = document.querySelector('#extract');
let radio_in = document.querySelector('#deposito');
let btnAceptar = document.querySelector('#btnAceptar');
let btnCancelar = document.querySelector('#btnCancelar');

let parent = document.body;
let div = document.createElement('div');
div.setAttribute('class', 'listado');
parent.appendChild(div);

radio_in.checked = false;
radio_out.checked = false;

btnAceptar.addEventListener('click', () => {
    if (radio_out.checked) {
        operacion.retirar(parseInt(document.querySelector('#monto').value));
    } else {
        operacion.depositar(parseInt(document.querySelector('#monto').value));
    }
    document.querySelector('#saldo').value = parseFloat(operacion.saldo);
})

btnCancelar.addEventListener('click', () => {
    form.reset();    
})

