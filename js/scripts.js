let botaoPesquisar = document.querySelector('.pesquisar-botao');
let botaoFechar = document.querySelector('#fechar-botao');

botaoPesquisar.addEventListener('click', function() {
    let pesquisa = document.querySelector('.pesquisa');
    pesquisa.style.height = '100px';

    let pesquisaCampo = document.querySelector('.pesquisar-campo');
    pesquisaCampo.style = 'height: 50px; margin-top: 20px; background-color: white;';

    let botaoBuscar = document.querySelector('.buscar-botao');
    botaoBuscar.style = 'width: 75px; height: 40px; opacity: 1; cursor: pointer; transition: 1s;';
});

botaoFechar.addEventListener('click', function() {
    let pesquisa = document.querySelector('.pesquisa');
    pesquisa.style.height = '2px';

    let pesquisaCampo = document.querySelector('.pesquisar-campo');
    pesquisaCampo.style = 'height: 0px; margin-top: 0;';

    let botaoBuscar = document.querySelector('.buscar-botao');
    botaoBuscar.style = 'height: 0px; height: 0; opacity: 0; transition: 1s;';
});
