import Negociacao from "./models/Negociacao.js";

const negociacao = new Negociacao(new Date, 10, 1000);

console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.volume);