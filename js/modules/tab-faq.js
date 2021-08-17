export default class TabFaq {
  constructor(list){
    this.faqList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }


  taggleFaq(item) {
  item.classList.toggle(this.activeClass);
  item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addFaqList(){
    this.faqList.forEach((item) => {
      item.addEventListener('click', () => this.taggleFaq(item));
    });
  }

  init(){
    if(this.faqList.length) {
      this.taggleFaq(this.faqList[0]);//ativar primeiro item da lista
      this.addFaqList();
    }
    return this;
  }
}
