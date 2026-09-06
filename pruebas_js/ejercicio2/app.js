function cantidadHijos() {
    let lista = document.querySelector('#bloque');
    alert(`La cantidad de hijos es ${lista.childNodes.length}`);
    let cadena = '';
    for (let x = 0; x < lista.childNodes.length; x++) {
        if (lista.childNodes[x].nodeType == Node.TEXT_NODE) {
            cadena += "Nodo tipo texto\n";
        } 
        if (lista.childNodes[x].nodeType == Node.ELEMENT_NODE) {
            cadena += "Nodo tipo elemento\n";
        }
    }
    alert(cadena);
}