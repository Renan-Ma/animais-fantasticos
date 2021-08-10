export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-scroll="scroll"]');
  const windowMetade = window.innerHeight * 0.4;//tamanho total da tela *0.6 ()evilave a 60% da tela


  function animaScroll() {
    sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top - windowMetade;//retorna diversas informações do elemento, uma dela é o top. Menos 60% da tela (-windowMetade)

      if (topo < 0) {
        section.classList.add('ativo');
      }
    });
  }
    if (sections.length) {

    sections[0].classList.add('ativo'); //coloca a class 'ativo' no primeiro elemento

    window.addEventListener('scroll', animaScroll);
  }
  }
