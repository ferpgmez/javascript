let saldoInicial = 1000;

let opciones = prompt("Seleccione una opcion:\n1. Ingresar\n2. Retirar\n3.Consultar saldo\n4. Salir");
switch (opciones) {
    case "1":
        let ingreso = parseInt(prompt("Ingrese la cantidad a ingresar: "));
        saldoInicial += ingreso;
        alert("Saldo actual:" + saldoInicial + "€");
        break;
    case "2":
        let retiro = parseInt(prompt("Ingrese la cantidad a retirar: "));
        if (retiro > saldoInicial) {
            alert("Saldo insuficiente");
        } else {
            saldoInicial -= retiro;
            alert("Saldo actual: " + saldoInicial + "€");
        }
        break;
    case "3":
        alert("Saldo actual: " + saldoInicial + "€");
        break;
    case "4":
        alert("Gracias por usar el cajero");
        break;
    default:
        alert("Opcion no valida");
        break;
}