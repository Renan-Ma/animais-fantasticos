import cliqueFora from './outsideclick.js'

export default class DropdownMenu  {
  constructor(dropdownMenus, events) {
  this.dropdownMenus = document.querySelectorAll(dropdownMenus);
  this.activeClass = 'active';

  //define touchastart e click como argumento padrão de events caso o usuário não defina
  if (events === undefined) {
    this.events = ['touchastart', 'click'];
  } else{
    this.events = events;
  }

  this.activeDropdown = this.activeDropdown.bind(this);
  }

  //ativa o dropdown e add a função que observa o clique fora dele
  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    cliqueFora(element, this.events, () => {
      element.classList.remove(this.activeClass)
    });
  }

  //adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}