let btnbtn = document.querySelector('#btnbtn');
let btnlista = document.querySelector('#btnlista');
resultado = document.querySelector('#nav');
const opciones1 = ['opción 1', 'opción 2', 'opción 3', 'opción 4', 'opción 5'];

function generarLista(vec, tipo='<ul>') {
    let lista = tipo;
    for (let i = 0; i < vec.length; i++) {
        lista += `<li>${vec[i]}</li>`;
    }
    if (tipo === '<ul>') {
        lista += '</ul>';
    } else {
        lista += '</ol>';
    }
    return lista;
}

btnbtn.addEventListener('click', () => {

    let lista = generarLista(opciones1, '<ul>');
    resultado.insertAdjacentHTML('beforeend', lista);
});

btnlista.addEventListener('click', () => {
    let lista = generarLista(opciones1, '<ol>');
    resultado.insertAdjacentHTML('beforeend', lista);
});
