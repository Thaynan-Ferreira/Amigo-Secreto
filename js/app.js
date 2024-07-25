let amigos = [];
function adicionar() {
    let amigoDigitado = document.querySelector('#nome-amigo').value;
    let nomesSorteio = document.querySelector('#lista-amigos');
    console.log(amigoDigitado);//teste

    amigos.push(amigoDigitado);//incremento do array
    console.log(amigos);//teste

    nomesSorteio.textContent = amigos;
    document.querySelector('#nome-amigo').value = '';//zerar input
    
}

function sortear(){
    let sorteio = document.querySelector('#lista-sorteio');
    amigosEmbaralhados = embaralharArray(amigos);
    console.log (amigosEmbaralhados);

    for(let i = 0; i < amigosEmbaralhados.length; i++){
        if(i == amigosEmbaralhados.length-1){
            sorteio.innerHTML = sorteio.innerHTML + `${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[0]} <br>`;
        }else{
            sorteio.innerHTML = sorteio.innerHTML + `${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[i+1]} <br>`;
        }

        
    }


    
}


// Função para embaralhar o array usando o algoritmo de Fisher-Yates
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}





//mostrar esse sorteio na tela
//zerar tudo para que começe novamente
