let tit = document.querySelector('#title');

function cambiarColor() {
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    tit.style.color = color;
    tit.style.textShadow = `0 0 10px ${color}`;
}

function cambiarTamanho() {
    let size = Math.floor(Math.random() * 100);
    tit.style.fontSize = `${size}px`;
}