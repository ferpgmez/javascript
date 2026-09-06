let operacion = prompt("Ingrese la operacion a realizar:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division");
switch (operacion) {
    case "1":
        let num1 = parseInt(prompt("Ingrese el primer numero: "));
        let num2 = parseInt(prompt("Ingrese el segundo numero: "));
        alert(suma(num1, num2));
        break;
    case "2": 
        let num3 = parseInt(prompt("Ingrese el primer numero: "));
        let num4 = parseInt(prompt("Ingrese el segundo numero: "));
        alert(resta(num3, num4));
        break;
    case "3":
        let num5 = parseInt(prompt("Ingrese el primer numero: "));
        let num6 = parseInt(prompt("Ingrese el segundo numero: "));
        alert(multiplicacion(num5, num6));
        break;
    case "4":
        let num7 = parseInt(prompt("Ingrese el primer numero: "));
        let num8 = parseInt(prompt("Ingrese el segundo numero: "));
        alert(division(num7, num8));
        break;
    default:
        alert("Operacion no valida.");
        break;
}