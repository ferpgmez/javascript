function cambiarColor() {
    let puntero = document.querySelector('#parrafo');
    let padre = puntero.parentNode;
    padre.style.backgroundColor = '#0047b3'
    padre.style.color = '#ffffff'
    puntero.style.textShadow = '0 0 10px #ffffff'
}