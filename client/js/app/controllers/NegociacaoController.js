class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $("#data");
        this._quantidade = $("#quantidade");
        this._valor = $("#valor");
        this._list_negociacoes = new ListNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update();
    }

    add(event){
        event.preventDefault();
        
        let negociacao = new Negociacao(
            DataHelper.textToDate(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
        this._list_negociacoes.add(negociacao);
        this._clearForm();
        console.log(this._list_negociacoes.negociacoes);
            
    }

    _clearForm(){
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;

        /* coloca o foco em data*/
        this._data.focus();
    }

}