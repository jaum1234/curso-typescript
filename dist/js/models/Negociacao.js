export default class Negociacao {
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
    constructor(data, //private _data: Date, 
    quantidade, //private _quantidade: number, 
    valor //private _valor: number
    ) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //get data(): Date
    //{
    //    return this._data;
    //}
    //
    //get quantidade(): number
    //{
    //    return this._quantidade;
    //}
    //
    //get valor(): number
    //{
    //    return this._valor;
    //}
    get volume() {
        //return this._valor*this._quantidade;
        return this.valor * this.quantidade;
    }
}
