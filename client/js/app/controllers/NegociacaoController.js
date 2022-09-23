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
        //--Convertendo String = Date (Ano-Mes-Dia)--
        
            /*Forma mais fácil para converter
            *let data = new Date(this._inputData.value.split('-'));
            *let data = new Date(this._inputData.value.replace(/-/g, ',')); -- Igual mas em Expressão Regular(troca o - por ,)
            */

        //Usando paradigma funcional para converter
        let data = new Date(
            //... -> Spred Operator, indica que o array é desmembrado
            ...this._inputData.value.split('-')
            .map((item,indice)=>item - indice % 2) //arrow function
                //se for o segundo item do array que é o mês
                /*if(indice == 1){
                *    return item - 1;
                }*/
        );

        //Atraves do value que consegue acessar o valor do formulario
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
           this._inputValor.value
        );
        console.log(negociacao);

        //descobrir tipo do parametro passado 
        //console.log(typeof(this._inputData.value));
    }
}