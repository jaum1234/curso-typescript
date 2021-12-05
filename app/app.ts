import Negociacao from "./models/Negociacao.js";

const negociacao = new Negociacao(new Date, '10', 100);
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.volume);