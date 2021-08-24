export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);

  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()){
    this.funcionamento.classList.add('aberto');
    }
  }

  init() {
    if(this.funcionamento){
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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
