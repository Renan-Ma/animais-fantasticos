import cliqueFora from './outsideclick.js'

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    
    //define touchastart e click como argumento padrão de events caso o usuário não defina
    if (events === undefined) {
      this.events = ['touchastart', 'click'];
    } else{
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(){
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    cliqueFora(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    })
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList){
      this.addMenuMobileEvents();
    }
    return this;
  }
}