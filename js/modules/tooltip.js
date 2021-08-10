export default function tooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver() {
  const tooltipBox = criarTooltipBox(this);

  onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
  }
}

const onMouseMove = {
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 'px'; //pega onde o mouse está na pagina na posicão Y
    this.tooltipBox.style.left = event.pageX + 'px'; // pega onde o mouse está na posição X
  }
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}