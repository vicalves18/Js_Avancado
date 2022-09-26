class NegociacaoController{
    //Busca as propriedades no Dom uma única vez
    constructor(){
        //querySelector tem associção com this que nesse caso é o document
        //bind - empresta um metodo de outro objeto. evita perder o this
        //mantem a associação com o document
        let $ = document.querySelector.bind(document); //Jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
    
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        //evita que a pagina recarregue 
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();

        //descobrir tipo do parametro passado 
        //console.log(typeof(this._inputData.value));
    }

    _criaNegociacao(){
         //Atraves do value que consegue acessar o valor do formulario
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}