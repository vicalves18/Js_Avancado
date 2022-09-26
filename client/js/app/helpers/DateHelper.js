class DateHelper{
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){
        //${} Template Strings
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
     }

    static textoParaData(texto){
        //Fail Fast - falha rápida
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato yyyy-mm-dd');
        }
        //... -> Spred Operator, indica que o array é desmembrado
        return new Date(...texto.split('-')
        .map((item,indice)=>item - indice % 2)); //arrow function
    }
}