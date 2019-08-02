class DataHelper{

    constructor(){
        throw new Error('DataHelper cant instantiate..')
    }

    /* usando spread operator (...) */
    /* o spread operator entende que o array passado deve ser desmembrado */
    /* ou seja , a primeira posicao do array, e o primeiro paramentro do Date e assim para as outra 2 posicoes */

    /*
        porem quando instanciamos o Date dessa forma, ele entende os meses decrementando 1
        0 -> Janeiro
        1 -> Fevereiro
        (...)
        11 -> Dezembro
        portanto, devemos decrementar de um, o dado na posicao do mÊs 
        usamos o map para isso
        mapeamos o array, e para a posicao do mês, decrementamos de 1
    */

    /* usando template string */
    static dateToText(date){
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static textToDate(text){
        /* 
            REGEX /\d{4}-\d{2}-\d{2}/
            primeiro = 4 digitos
            segundo  = hífen
            terceiro = 2 digitos
            quarto   = hífen
            quinto   = 2 digitos

        */
        if(/\d{4}-\d{2}-\d{2}/.test(text)){
            return new Date(
                ...text
                .split('-')
                .map((item,index) => {
                    if(index == 1){
                        return item-1;
                    }else{
                        return item;
                    }
                })
            );
        }else{
            throw new Error("are you sure that this is yyyy-mm-dd ?");
        }
        
    }
}