import Negociacao from "./Negociacao";

export default class Negociacoes 
{
    private negociacoes: Array<Negociacao> = [];
    

    adicionar(negociacao: Negociacao)
    {
        this.negociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> //Array<Negociacao>
    {
        //return [...this.negociacoes];
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();

