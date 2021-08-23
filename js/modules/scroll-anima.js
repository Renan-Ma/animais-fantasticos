export default class AnimacaoScroll {
  constructor(sections) {
  this.sections = document.querySelectorAll(sections);
  this.windowMetade = window.innerHeight * 0.4;

  this.checkDistance = this.checkDistance.bind(this)
  }

  //pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(sectionTop - this.windowMetade),
      };
    });
    console.log(this.distance);
  }

  //verifica a distância em cada objeto em relação ao scroll site
  checkDistance() {
    console.log(window.pageYOffset);
    this.distance.forEach(item => {
      if(window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      }
    })
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
    if(this.sections.length){
    this.getDistance();
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance);
    return this;
    }
  }
}
