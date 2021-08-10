export default function initAnimaNumeros() {

  function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numeros]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total/100);//divide o total por 100 e não apresenta casa depois da virgula
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random()); // cada vez será uma velocidade diferente
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')){
      observador.disconnect();
      animaNumeros();
    }
  }

  const observadorTarget = document.querySelector('.numeros');
  const observador = new MutationObserver(handleMutation);

  observador.observe(observadorTarget, {attributes: true});
}
