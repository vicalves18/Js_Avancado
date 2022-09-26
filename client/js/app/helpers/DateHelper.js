class DateHelper{
    dataParaTexto(data){
        return data.getDate() 
         + '/' + (data.getMonth() + 1)
         + '/' + data.getFullYear();
     }

    textoParaData(texto){
         //... -> Spred Operator, indica que o array é desmembrado
        return new Date(...texto.split('-')
        .map((item,indice)=>item - indice % 2)); //arrow function
    }
}