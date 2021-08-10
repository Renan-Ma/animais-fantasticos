export default function iniTabFaq() {

  const faqList = document.querySelectorAll('[data-faq="faq"] dt');
  const activeClass = 'ativo';

  function ativarFaq() {
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass); //this aponta para o elemento dentro do forEach (item) e nextElementSibling aponta para o proximo elemento no mesmo nivel de item no index.html
}

  if (faqList.length) {
    faqList[0].classList.add(activeClass);
    faqList[0].nextElementSibling.classList.add(activeClass);


  faqList.forEach((item) => {
    item.addEventListener('click', ativarFaq);
  });
  }
}
