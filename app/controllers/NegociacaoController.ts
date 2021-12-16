import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";

export default class NegociacaoController 
{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor()
    {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adicinonar(): void
    {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        console.log(this.negociacoes.listar());
        this.limparFormulario();
    }

    criarNegociacao(): Negociacao 
    {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        const negociacao = new Negociacao(
            data,
            quantidade,
            valor
            );
        
        return negociacao;
    }

    limparFormulario() 
    {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
}