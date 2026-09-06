function cargarPrestamos(num) {
    let prestamo = {
        cantidad: 0,
        plazo: 0,
    }
    let prestamos = [];
    for (let i = 0; i < num; i++) {
        prestamo.cantidad = parseInt(prompt("Ingrese la cuantia del prestamo"));
        prestamo.plazo = parseInt(prompt("Ingrese el plazo de devolucion en dias (maximo 30):"));
        prestamos.push(prestamo);
    }
}

function generarListados(prestamos) {
    let cadena = `<table>
                    <tr>
                        <th>Cantidad</th>
                        <th>Plazo</th>
                    </tr>`;
    for (let i = 0; i < prestamos.length; i++) {
        cadena += `<tr>
                        <td>${prestamos[i].cantidad}</td>
                        <td>${prestamos[i].plazo}</td>
                    </tr>`;
    }
    return cadena;
}

function imprimirListados(cadena) {
    let parent = document.body;
    let div = document.createElement("div");
    div.setAttribute('id', 'tabla')
    parent.appendChild(div);
    document.getElementB
}