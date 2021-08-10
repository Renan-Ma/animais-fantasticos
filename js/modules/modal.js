export default function iniModal(){

  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function abrirModal(event) {
    event.preventDefault();//previne default(sair da pagina)
    containerModal.classList.add('ativo');
  }

  function fecharModal(event) {
    event.preventDefault();//previne default
    containerModal.classList.remove('ativo')
  }

  function cliqueForaModal(event) {
    if (event.target === this)//verificar se o event.target é igual o this. Obs: this agora virou todo o conteudo da pagina fora do formulario. event.target mostra exatamento em qual parte do codigo está sendo clicado
      fecharModal(event);
  }

  if (botaoAbrir && botaoFechar && containerModal) {//verifica se as 3 const existem, se alguma não existir as funções abaixo não fazem nada

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }

}