class ListNegociacoes{
    constructor(){
        this._negociacoes = []
    }

    add(negociacao){
        this._negociacoes.push(negociacao)
    }

    get negociacoes(){
        /* programacao defensiva */
        /* 
        retorno uma copia do array,dessa forma o array original nao pode
        ser modificado externamente
        */
        return [].concat(this._negociacoes);
    }
}