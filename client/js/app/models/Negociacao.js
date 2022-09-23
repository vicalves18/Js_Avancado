class Negociacao{
    constructor(data, quantidade, valor){
        //_ atriuto privado
        this._data = new Date(data.getTime());   //Programação defensiva
        this._quantidade = quantidade;
        this._valor = valor;
        //tornando objeto imutavel
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}