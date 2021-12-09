import Negociacao from "../models/Negociacao.js";

export default class NegociacaoController 
{
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor()
    {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adicinonar()
    {
        const negociacao = new Negociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
            );
        
        console.log(negociacao);
    }
}