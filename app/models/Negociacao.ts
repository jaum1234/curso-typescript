
export default class Negociacao 
{
    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;
//
    //constructor(data: Date, quantidade: number, valor: number)
    //{
    //    this._data = data;
    //    this._quantidade = quantidade;
    //    this._valor = valor;
    //}

    /*Nesse caso, nao sao necessarios getters, já que as propriedades sao publicas*/
    //constructor(
    //    public readonly data: Date,  
    //    public readonly quantidade: number,  
    //    public readonly valor: number 
    //) {}
    

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ) {}

    get data(): Date
    {
        /*Aqui estamos retornando uma nova referencia da data. Desse modo,
        evitamos que a propriedade data original da classe possa ser alterada
        após criada.*/

        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number
    {
        return this._quantidade;
    }

    get valor(): number
    {
        return this._valor;
    }

    get volume(): number
    {
        //return this._valor*this._quantidade;
        return this.valor*this.quantidade;
    }

}