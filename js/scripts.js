function showLess(){
    const texto = document.querySelector('.text-saiba-mais');
    if(texto.style.display === 'none'){
        texto.style.display = 'block';
    }else{
        //change html of mostrar menos for mostrar mais
        texto.innerHTML = 'mostrar mais';
        texto.style.display = 'none';
    }
}

console.log('Game Mania');