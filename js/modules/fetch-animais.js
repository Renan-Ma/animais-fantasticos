import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais (url, target) {
  const numerosGrid = document.querySelector(target);

  //preenche cada animal no Dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'ativo');
    animaNumeros.init();
  }

  //puxa os animais através de um arquivo json e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    //fetch e espera resposta e transforma a resposta em json
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    //após a transformação de json, ativa as funções para preencher e animais numeros
    animaisJson.forEach(animal => {
      preencherAnimais(animal);
      animaAnimaisNumeros();
    });
  }

  //cria a div contendo informações de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  return criarAnimais();
}