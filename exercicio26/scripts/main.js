 /*definir a funçao*/
 function calculaMedia(lista_enviada){

    soma = 0;

    tamanho_da_lista = lista_enviada.length;

    for (i=0; i<tamanho_da_lista; i=i+1){

        numero_lido=lista_enviada[i];

        soma = soma+numero_lido;

        console.log("a soma é "+soma);
    }
    media = soma / tamanho_da_lista;

   /* document.write("A soma é "+soma);
    document.write("<br>");
    document.write("A média é "+media);
    document.write("<br>");*/

    return media;
}

function numerodepares(lista){

    numero_de_pares_encontrados = 0;
    /*8, 9, 63, 66, 8*/

    for (i=0; i<lista.length; i=i+1){

        numero_lido = lista[i];
        /*se o numero lido for par*/
        if (numero_lido %2 ==0){

            numero_de_pares_encontrados = numero_de_pares_encontrados + 1;
        }

        console.log("o numero de pares é "+numero_de_pares_encontrados);
    }


    return numero_de_pares_encontrados;
}