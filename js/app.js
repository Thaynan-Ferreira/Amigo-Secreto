//variaveis globais, necessarias em mais de uma function
let nomesSorteio = document.querySelector('#lista-amigos');
let sorteio = document.querySelector('#lista-sorteio');
let amigos = [];

//função responsavel por adicionar os nomes ao vetor que realizara o sorteio
function adicionar() {
    let amigoDigitado = document.querySelector('#nome-amigo').value;
    if (amigos.includes(amigoDigitado)){
        alert('Esse nome ja foi adicionado, adicione outro');
    }
    else if (amigoDigitado == ''){
        alert('Digite um valor');
    } else{
        amigos.push(amigoDigitado);//incremento do array

        nomesSorteio.textContent = amigos;
    }
    
    document.querySelector('#nome-amigo').value = '';//zerar input
    
}

//função resposavel por embaralhar o vetor, realizar o sorteio e mostra-lo na tela
function sortear(){

    if(amigos.length < 4){
        alert('Adicione ao menos 4 nomes.')
    } else{
        amigosEmbaralhados = embaralharArray(amigos);

        //for que gera a sequencia de quem tira quem, ja com o vetor embaralhado
        for(let i = 0; i < amigosEmbaralhados.length; i++){
            if(i == amigosEmbaralhados.length-1){
                sorteio.innerHTML = sorteio.innerHTML + `${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[0]} <br>`;
            }else{
                sorteio.innerHTML = sorteio.innerHTML + `${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[i+1]} <br>`;
            }            
        }
    }
    
    
}

//função resposavel por reiniciar todos os campos para um novo sorteio
function reiniciar() {
    sorteio.innerHTML = '';
    nomesSorteio.textContent = '';
    amigos = []
}


// Função para embaralhar o array usando o algoritmo de Fisher-Yates
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}