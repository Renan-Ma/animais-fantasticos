export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="menu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');//seleciona apenas o atributo href do elemento
    const section = document.querySelector(href);

    section.scrollIntoView ({
      behavior: "smooth",
      block: 'start',//espaço para o topo
    });

    /* FORMA ALTERNATIVA DE SCROLL SUAVE
    const topo = section.offsetTop; // retorna distancia até o topo da pagina
    window.scrollTo( { //criação de objeto
      top: topo,
      behavior: 'smooth', //efeito de scroll suave, apenas alguns nave
    }) */

  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}