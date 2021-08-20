export default class AnimacaoScroll {
  constructor(sections) {
  this.sections = document.querySelectorAll(sections);
  this.windowMetade = window.innerHeight * 0.4;

  this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top;
      const sectionVisible = (topo - this.windowMetade) < 0

      if (sectionVisible) {
        section.classList.add('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
    return this;
  }
}
