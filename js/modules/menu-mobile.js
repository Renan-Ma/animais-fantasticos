import cliqueFora from './outsideclick.js'

export default function iniMenuMobile() {

}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const eventos = ['click', 'touchastart']

function openMenu(){
  menuList.classList.add('active');
  menuButton.classList.add('active');
  cliqueFora(menuList, eventos, () => {
    menuList.classList.remove('active');
    menuButton.classList.remove('active');
  })
}

if (menuButton){
  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
})
}