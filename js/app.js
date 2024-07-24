let amigos = [];
function adicionar() {
    let amigoDigitado = document.querySelector('#nome-amigo').value;
    let nomesSorteio = document.querySelector('#lista-amigos')
    console.log(amigoDigitado);//teste

    amigos.push(amigoDigitado)//incremento do array
    console.log(amigos)//teste

    nomesSorteio.textContent = amigos
    document.querySelector('#nome-amigo').value = '';//zerar input
    
}










//sortear que sai com quem
//mostrar esse sorteio na tela
//zerar tudo para que começe novamente
