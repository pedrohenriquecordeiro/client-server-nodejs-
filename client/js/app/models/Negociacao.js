class Negociacao{

    constructor(data , quantidade , valor ){
        /* o underline signica que a propriedade eh privada */
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        /* torna o objeto imutavel */
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        /* programação defensiva - retorna um novo Data*/
        return new Data(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}