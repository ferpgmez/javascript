let parent = document.body;
let numFilas = parseInt(prompt('Ingrese el numero de filas'));
let numColumnas = parseInt(prompt('Ingrese el numero de columnas'));
let cadena = `<table>`;
for (let i = 1; i < numFilas + 1; i++) {
    cadena += `<tr>`;
    for (let j = 1; j < numColumnas + 1; j++) {
        cadena += `<td>${i * j}</td>`;
    }
    cadena += `</tr>`;
}
cadena += `</table>`;
parent.innerHTML = cadena;