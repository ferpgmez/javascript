function cambiarColor() {
    let seleccion = document.querySelector('#select1');
    document.querySelector('#text1').value = seleccion.selectedIndex;
    document.querySelector('#text2').value = seleccion.options[seleccion.selectedIndex].text;
    document.querySelector('#text3').value = seleccion.options[seleccion.selectedIndex].value;
}