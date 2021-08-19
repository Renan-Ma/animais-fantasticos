export default class AnimaNumeros {
  constructor(numeros, observadorTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observadorTarget = document.querySelector(observadorTarget);
    this.observerClass = observerClass;

    //bind do objeto ao callback da mutation
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do dom, com número e texto
  static incrementaNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total/100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  //ativa incrementaNumero para cada numero selecionado no dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementaNumero(numero);
    })
  }

  //ocorre quando a mutation ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)){
      this.observador.disconnect();
      this.animaNumeros();
    }
  }

  //adiciona o MutationObserver para verificar quando a classe ativo é adicionado ao elemento target
  addMutationObserver() {
  this.observador = new MutationObserver(this.handleMutation);
  this.observador.observe(this.observadorTarget, {attributes: true});
  }

  init() {
    if (this.numeros.length && this.observadorTarget) {
      this.addMutationObserver();
      return this;
    }
  }
}

