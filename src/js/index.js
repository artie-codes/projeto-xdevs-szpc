/* passo a passo
OBJ 1 - seta de avançar
OBJ 1 - passo 1 - pegar o elemento HTML da seta avançar
*/
const btnAvancar = document.getElementById("btn-avancar");
/*
OBJ 2 - seta de voltar
OBJ 2 - passo 1 - pegar o elemento HTML da seta voltar*/
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// OBJ 1 - passo 2 - identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function(){

    if (cartaoAtual === cartoes.length -1) return;

    // OBJ 1 - passo 4 - buscar o cartão selecionado e esconder
    esconderCartaoSelecionado();

    // OBJ 1 - passo 3 - fazer apaerecer o próximo cartão da lista    
    cartaoAtual++;
    mostrarCartao();
});

// OBJ 2 - passo 2 - identificar o clique do usuário na seta avançar
btnVoltar.addEventListener("click", function(){

    if (cartaoAtual === 0) return;

    // OBJ 2 - passo 4 - buscar o cartão selecionado e esconder
    esconderCartaoSelecionado();

    // OBJ 2 - passo 3 - fazer apaerecer o próximo cartão da lista
    cartaoAtual--;
    mostrarCartao();
});

function esconderCartaoSelecionado() {
    const cartaoSelecionado =  document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}