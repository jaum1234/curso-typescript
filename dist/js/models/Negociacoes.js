export default class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        //return [...this.negociacoes];
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
