function showLess(){
    var texto = document.getElementByClassName("text-saiba-mais");
    if(texto.style.display === 'none'){
        texto.style.display = 'block';
    }else{
        texto.style.display = 'none';
    }
}

/*document.getElementById('mostrarMais').addEventListener('onclick', function onclick() {
    document.getElementByClassName('text-saiba-mais').style.display = 'none';
    // You can also add animation effects or load more content dynamically here
});*/
console.log('Game Mania');