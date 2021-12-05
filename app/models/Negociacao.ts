export default class Negociacao 
{
    #data;
    #quantidade;
    #valor;

    constructor(data, quantiade, valor)
    {
        this.#data = data;
        this.#quantidade = quantiade;
        this.#valor = valor;
    }

    get data()
    {
        return this.#data;
    }

    get quantidade()
    {
        return this.#quantidade;
    }

    get valor()
    {
        return this.#valor;
    }

    get volume()
    {
        return this.#valor*this.#quantidade;
    }

}