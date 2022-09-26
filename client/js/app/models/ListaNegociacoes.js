class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //Programação Defensiva
        //concat() - junta arrays, retorna uma nova matriz, não altera as matrizes existentes
        return [].concat(this._negociacoes);
    }
}