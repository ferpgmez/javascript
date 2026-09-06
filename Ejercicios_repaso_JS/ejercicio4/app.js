let numero = parseInt(prompt("Ingrese un número entero positivo: "));

if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingrese un número entero positivo válido.");
} else {
    let cuadrado = numero ** 2;
    let cadena = `<table>
        <tr>
            <th>Numero</th>
            <th>Cuadrado</th>
        </tr>
        <tr>
            <td>${numero}</td>
            <td>${cuadrado}</td>
        </tr>
    </table>`;
    document.getElementById("resultado").innerHTML = cadena;
}