let nPrestamos = parseInt(prompt("Ingrese el número de prestamos a cargar: "));

let prestamos = cargarPrestamos(nPrestamos);

let opciones = prompt("Seleccione una opcion:\n1. Mostrar listado\n\n" +
    "2. Mostrar prestamo mayor cuantia\n\n" +
    "3. Mostrar prestamo menor cuantia\n\n" +
    "4. Mostrar prestamo mayor plazo\n\n" +
    "5. Mostrar prestamo menor plazo\n\n" +
    "6. Mostrar promedio de cuantia y plazo\n\n" +
    "7. Prestamos de mayor plazo\n\n" +
    "8. Prestamo aleatorio\n\n" +
    "9. Salir\n\n"
);

switch (opciones) {
    case "1":
        crearListados(prestamos);
        break;
    case "2":
        calcularMaximaCantidad(prestamos);
        break;
    case "3":
        calcularMinimaCantidad(prestamos);
        break;
    case "4":
        calcularMaximaPlazo(prestamos);
        break;
    case "5":
        calcularMinimaPlazo(prestamos);
        break;
    case "6":
        let promedio = calcularPromedio(prestamos);
        mostrarPromedio(promedio);
        break;
    case "7":
        mostrarPrestamosMayorPlazo(prestamos);
        break;
    case "8":
        mostrarPrestamoAleatorio(prestamos);
        break;
    case "9":
        alert("Gracias por usar el programa");
        break;
    default:
        alert("Opcion no valida");
}