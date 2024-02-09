function saibaMais(){
    const texto = document.getElementsByClassName('.text-saiba-mais');
    if(texto.style.display === 'none'){
        texto.style.display = 'block';
    }else{
        texto.style.display = 'none';
    }
}

console.log('Game Mania');