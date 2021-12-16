export default class Negociacoes {
    constructor() {
        this.negociacoes = []; //Array<Negociacao> = [];
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
