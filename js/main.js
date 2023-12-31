function tocaSom (seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){ //elemento === elemento != null, o javasript traduz, entendi o q quis dizer.
            elemento.play();
    }else{
        alert('Elemento não encontrado ou seletor inválido!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')


for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(event){
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        }
        
    }
    tecla.onkeyup = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.remove('ativa')
        }
    }

}


    
