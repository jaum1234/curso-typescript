import Negociacao from "./Negociacao";

export default class Negociacoes 
{
    private negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao)
    {
        this.negociacoes.push(negociacao);
    }

    listar(): Array<Negociacao>
    {
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();

