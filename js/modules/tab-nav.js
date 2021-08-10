export default function iniTabNav() { //cria uma função para isolar a navegação do menu de animais, assim não atrabalhando na criação do resto do código js

  const tabMenu = document.querySelectorAll('[data-menu="menu"] li');
  const tabConteudo = document.querySelectorAll('[data-conteudo="conteudo"] section');


  function activeTab(index) {
    tabConteudo.forEach((item) => {
      item.classList.remove('ativo');//faz um loop no  tabConteudo e remove a class 'ativo' se algum elemento possuir
    });
    const direcao = tabConteudo[index].dataset.anime;
    tabConteudo[index].classList.add('ativo', direcao);//inseri a class ativo no elemento informado no index
  }

  if (tabMenu.length && tabConteudo.length) { //verifica se o elemento tabMenu e tabConteudo existem
    tabConteudo[0].classList.add('ativo');//primeiro item sempre vai começar como ativo

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => { //adiciona um evento em cada elemento
        activeTab(index);//informe qual o numero do index para a função 'activeTab'
      })
    })
  }
}
