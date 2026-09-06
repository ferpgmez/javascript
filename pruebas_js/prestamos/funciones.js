import Prestamo from "./prestamos.js";

function cargarPrestamos(numero) {
    let prestamos = [];
    for (let i = 0; i < numero; i++) {
        const prestamo = new Prestamo();
        prestamo.cantidad = parseFloat(prompt("Ingrese la cuantia del prestamo:"));
        prestamo.plazo = parseInt(prompt("Ingrese el plazo en meses:"), 10);
        prestamo.tasaInteres = parseFloat(prompt("Ingrese la tasa de interes:"));
        prestamos.push(prestamo);
    }
    return prestamos;
}

function formatNumber(value) {
    return Number.isFinite(value) ? value.toFixed(2) : value;
}

function renderResumen(id, title, items) {
    const parent = document.querySelector(`#${id}`);
    if (!parent) return;

    parent.innerHTML = `
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <h5 class="card-title text-dark">${title}</h5>
                <ul class="mb-0">
                    ${items.map(item => `<li class="mb-1">${item}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
}

function minimos(prestamos) {
    if (!prestamos.length) return;

    let cantMin = prestamos[0].cantidad;
    let plazoMin = prestamos[0].plazo;
    let tasaMin = prestamos[0].tasaInteres;

    for (let i = 1; i < prestamos.length; i++) {
        if (prestamos[i].cantidad < cantMin) cantMin = prestamos[i].cantidad;
        if (prestamos[i].plazo < plazoMin) plazoMin = prestamos[i].plazo;
        if (prestamos[i].tasaInteres < tasaMin) tasaMin = prestamos[i].tasaInteres;
    }

    renderResumen("minimos", "Mínimos", [
        `Cantidad mínima: ${formatNumber(cantMin)}`,
        `Plazo mínimo: ${plazoMin} meses`,
        `Tasa mínima: ${formatNumber(tasaMin)}%`
    ]);
}

function maximos(prestamos) {
    if (!prestamos.length) return;

    let cantMax = prestamos[0].cantidad;
    let plazoMax = prestamos[0].plazo;
    let tasaMax = prestamos[0].tasaInteres;

    for (let i = 1; i < prestamos.length; i++) {
        if (prestamos[i].cantidad > cantMax) cantMax = prestamos[i].cantidad;
        if (prestamos[i].plazo > plazoMax) plazoMax = prestamos[i].plazo;
        if (prestamos[i].tasaInteres > tasaMax) tasaMax = prestamos[i].tasaInteres;
    }

    renderResumen("maximos", "Máximos", [
        `Cantidad máxima: ${formatNumber(cantMax)}`,
        `Plazo máximo: ${plazoMax} meses`,
        `Tasa máxima: ${formatNumber(tasaMax)}%`
    ]);
}

function promedios(prestamos) {
    if (!prestamos.length) return;

    let cantProm = 0;
    let plazoProm = 0;
    let tasaProm = 0;

    for (let i = 0; i < prestamos.length; i++) {
        cantProm += prestamos[i].cantidad;
        plazoProm += prestamos[i].plazo;
        tasaProm += prestamos[i].tasaInteres;
    }

    cantProm = cantProm / prestamos.length;
    plazoProm = plazoProm / prestamos.length;
    tasaProm = tasaProm / prestamos.length;

    renderResumen("promedios", "Promedios", [
        `Cantidad promedio: ${formatNumber(cantProm)}`,
        `Plazo promedio: ${formatNumber(plazoProm)} meses`,
        `Tasa promedio: ${formatNumber(tasaProm)}%`
    ]);
}

function mostrarListados(prestamos) {
    let cadena = `
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <h5 class="card-title text-dark">Listado de préstamos</h5>
                <div class="table-responsive">
                    <table class="table table-striped table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Plazo</th>
                                <th scope="col">Tasa Interés</th>
                                <th>Interés Compuesto</th>
                                <th>Fecha Vencimiento</th>
                            </tr>
                        </thead>
                        <tbody>`;
    for (let i = 0; i < prestamos.length; i++) {
        cadena += `<tr>
            <td>${formatNumber(prestamos[i].cantidad)}</td>
            <td>${prestamos[i].plazo} meses</td>
            <td>${formatNumber(prestamos[i].tasaInteres)}%</td>
            <td>${formatNumber(prestamos[i].calcularInteresCompuesto())}</td>
            <td>${prestamos[i].fechaVencimiento().toLocaleDateString("es-ES")}</td>
        </tr>`;
    }
    cadena += `</tbody></table></div></div></div>`;
    let parent = document.querySelector("#listado");
    parent.innerHTML = cadena;
}

export { cargarPrestamos, minimos, maximos, promedios, mostrarListados };