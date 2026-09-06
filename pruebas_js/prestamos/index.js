import Prestamo from "./prestamos.js";
import { cargarPrestamos, minimos, maximos, promedios, mostrarListados } from "./funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    const btnPrestamos = document.querySelector("#btnPrestamos");
    const btnLimpiar = document.querySelector("#btnLimpiar");

    if (btnPrestamos) {
        btnPrestamos.addEventListener("click", () => {
            const numPrestamos = parseInt(document.querySelector("#numPrestamos").value, 10);
            const prestamos = cargarPrestamos(numPrestamos);
            minimos(prestamos);
            maximos(prestamos);
            promedios(prestamos);
            mostrarListados(prestamos);
        });
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", () => {
            document.querySelector("#numPrestamos").value = "";
            document.querySelector("#listado").innerHTML = "";
            document.querySelector("#maximos").innerHTML = "";
            document.querySelector("#minimos").innerHTML = "";
            document.querySelector("#promedios").innerHTML = "";
        });
    }
});