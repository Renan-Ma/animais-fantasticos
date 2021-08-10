export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if(options === undefined) {
      this.options = {
      behavior: "smooth",
      block: 'start'//espaço para o topo
      };
   } else {
      this.options = options;
   }

   this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');//seleciona apenas o atributo href do elemento
    const section = document.querySelector(href);

    section.scrollIntoView (this.options);
  }

  addLinkEvent() {
  this.linksInternos.forEach((link) => {
    link.addEventListener('click', this.scrollToSection);
  })
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}