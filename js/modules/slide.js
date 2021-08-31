import debounce from './debounce.js'

export  class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0
    }
    this.activeClass = 'ativo';

    this.changeEvent = new Event('changeEvent');
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .4s' : '';
  }

  moveSlide(distX) {
    this.dist.movePosition = distX; 
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX){
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let movetype;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = Math.round(event.changedTouches[0].clientX);
      movetype = 'touchmove';
    }
    this.wrapper.addEventListener(movetype, this.onMove);
    this.transition(false);
  }

  onMove(event) {
    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(movetype, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.transition(true);
    this.changeSlideOnEnd()
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.proximo !== undefined) {
      this.activeproximoSlide();
    } else if (this.dist.movement < -120 && this.index.anterior !== undefined){
      this.activeAnteriorSlide();
    } else {
      this.changeSlide(this.index.atual);
    }
  }

  addSlideEvents(){
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  //Slides config

  slidePosition(slide) {
    const margin =  (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element
      }
    });
  }

  slideIndexNav(index) {
    const last = this.slideArray.length -1;
    this.index = {
      anterior: index ? index -1: undefined,
      atual: index,
      proximo: index == last ? undefined : index + 1,
    }
  }

  changeSlide(index) {
    const atualSlide = this.slideArray[index]
    this.moveSlide(atualSlide.position);
    this.slideIndexNav(index);
    this.dist.finalPosition = atualSlide.position;
    this.changeAtualClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeAtualClass() {
    this.slideArray.forEach((item) => {
        item.element.classList.remove(this.activeClass);
        
      });
    this.slideArray[this.index.atual].element.classList.add(this.activeClass);
  }

  activeAnteriorSlide () {
    if (this.index.anterior !== undefined){
      this.changeSlide(this.index.anterior);
    }
  }

  activeproximoSlide () {
    if (this.index.proximo !== undefined){
      this.changeSlide(this.index.proximo);
    }
  }

  onResize() {
    this.slidesConfig();
    this.changeSlide(this.index.atual);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activeAnteriorSlide = this.activeAnteriorSlide.bind(this);
    this.activeproximoSlide = this.activeproximoSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.slidesConfig();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}


export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControlEvents();
  }

  addArrow(anterior, proximo) {
    this.anteriorElement = document.querySelector(anterior);
    this.proximoElement = document.querySelector(proximo);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.anteriorElement.addEventListener('click', this.activeAnteriorSlide);
    this.proximoElement.addEventListener('click', this.activeproximoSlide);
  }
  
  
  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';

    this.slideArray.forEach((item , index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`
    })
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach(item => item.classList.remove(this.activeClass));
    this.controlArray[this.index.atual].classList.add(this.activeClass);
  }

  addControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];

    this.activeControlItem();
    this.controlArray.forEach((item, index) => {
      this.eventControl(item, index)
    })
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}