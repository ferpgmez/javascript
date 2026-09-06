function cambiarTitulo() {
    document.body.style.backgroundColor = "#fc8403";
    let title = document.querySelector('#title');
    title.style.color = "#2a0303";
    title.style.textShadow = "0 0 10px #2a0303";
    title.childNodes[0].nodeValue = "Ahora vemos el nuevo titulo";
}