import Negociacao from "./models/Negociacao.js";
const negociacao = new Negociacao(new Date);
negociacao.quantiade = 10;
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.volume);
