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
    }

    adiciona(event){
        //evita que a pagina recarregue 
        event.preventDefault();

        //Atraves do value que consegue acessar o valor do formulario
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
           this._inputValor.value
        );
        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

        //descobrir tipo do parametro passado 
        //console.log(typeof(this._inputData.value));
    }
}