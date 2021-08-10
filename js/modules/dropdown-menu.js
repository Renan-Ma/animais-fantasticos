import cliqueFora from './outsideclick.js'

export default function iniDropdownMenu(){

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach((menu) => {
  ['touchastart', 'click'].forEach((userEvent) => {//cria um array e coloca dois eventos dentro e em seguida faz um forEach no array. Obs: touchastart é igual o click porém serve para mobile
    menu.addEventListener(userEvent, clicou)
  })
})

function clicou(event) {
  event.preventDefault();
  this.classList.toggle('active');//this nesse caso faz referencia a 'menu' do forEach
  cliqueFora(this,['touchastart', 'click'], () => {
    this.classList.remove('active')
  });
}

}
