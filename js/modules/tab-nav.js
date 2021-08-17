export default class TabNav { 
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabConteudo = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }


  activeTab(index) {
    this.tabConteudo.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const direcao = this.tabConteudo[index].dataset.anime;
    this.tabConteudo[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent(){
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => { 
        this.activeTab(index);
      })
    })
  }

  init(){
    if (this.tabMenu.length && this.tabConteudo.length){
      this.activeTab(0);//ativar primeiro item
      this.addTabNavEvent();
    }
    return this;
  }
}
