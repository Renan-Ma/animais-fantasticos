export default function initFuncionamento() {

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);//pega os numeros dentro da data-semana  //split transforma em array separando cada elemento pelo valor informado  //map transforma a array que era de string em array de numeros
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay()
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;//indexof procura dentro de diasSemana que possui o o conteudo de diaAgora e se tiver retorna o número da posição, se não tiver retorna -1. Então está verificando se retorna true ou false essa linha

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);//verifica se o horarioAgora corresponde ao horario entre as 8 e 18 que é o horario de funcionamento.//Retorna true ou false

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto');
}

}



/*
const agora = new Date();

console.log(agora.getDate())
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília

function transformarDias(tempo){ //essa função transformar os milisegundos em dias
  return tempo / (24 * 60 * 60 * 1000);//conversão de milisegundos em dias
}

const futuro = new Date('Dec 24 2021 22:16')
console.log(transformarDias(futuro.getTime()))

const nascimento = new Date('Apr 15 1989')
const diaNascimento = transformarDias(nascimento.getTime());
const diasAgora = transformarDias(agora.getTime());
const anosVivo = (diasAgora - diaNascimento) / 365;
console.log(anosVivo);
*/
