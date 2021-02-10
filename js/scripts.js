let botaoPesquisar = document.querySelector('.pesquisar-botao');
let botaoFechar = document.querySelector('#fechar-botao');

botaoPesquisar.addEventListener('click', function() {
    let pesquisa = document.querySelector('.pesquisa');
    pesquisa.style.height = '100px';

    let pesquisaCampo = document.querySelector('.pesquisar-campo');
    pesquisaCampo.style = 'height: 50px; margin-top: 20px; background-color: white;';
    pesquisaCampo.removeAttribute('disabled', 'disabled')

    let botaoBuscar = document.querySelector('.buscar-botao');
    botaoBuscar.style = 'width: 75px; height: 40px; opacity: 1; cursor: pointer; transition: 1s;';
});

botaoFechar.addEventListener('click', function() {
    let pesquisa = document.querySelector('.pesquisa');
    pesquisa.style.height = '0px';

    let pesquisaCampo = document.querySelector('.pesquisar-campo');
    pesquisaCampo.style = 'height: 0px; margin-top: 0;';
    pesquisaCampo.setAttribute('disabled', 'disabled')

    let botaoBuscar = document.querySelector('.buscar-botao');
    botaoBuscar.style = 'height: 0px; height: 0; opacity: 0; transition: 1s;';
});

let botaoComprarMax = document.querySelector('#plano-comprar-max');
let planoMax = document.querySelector('.plano-max');

botaoComprarMax.addEventListener('click', function() {
    planoMax.style = 'transform: scale(1.2);';
   
    setInterval(() => {
        planoMax.style = 'transform: scale(1.0);';
    }, 3000);
});