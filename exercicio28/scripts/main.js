function procuraNumero(){
    console.log("entrei na funçao");

    lista_inserida = document.getElementById("lista").value;
    numero_inserido = document.getElementById("numero").value;
    document.getElementById("zona_de_resultados").style="background: none";
    lista =  lista_inserida;
    numero = numero_inserido;
    /*podemos decidir como programadores o tipo de espaçamento*/
    lista_transformada = lista.split(";");

    resultado = verificaSeExiste(lista_transformada, numero);
    
    /* podia ser if(resultado == true) ou se fosse falso podia ser if(!=resultado)*/
    if(resultado == false){
        mensagem = ("NAO Existe na lista");
        document.getElementById("zona_de_resultados").style="background: red";
    }else{
        mensagem = ("Existe na lista");
        document.getElementById("zona_de_resultados").style="background: green";
    }
    document.getElementById("zona_de_resultados").innerText=mensagem;
}

function verificaSeExiste(lista_a_pesquisar, numero_a_procurar){
    lista_de_numeros = lista_a_pesquisar;
    tamanho = lista_a_pesquisar.length;
    encontrou = false;
    i = 0;

    while(encontrou == false && i < tamanho) {
        numero_lido = lista_de_numeros[i];
        if(numero_lido==numero_a_procurar){

            encontrou = true;
        }
        i = i + 1;
        console.log(i);
    }
    if (encontrou==true){

        return true;
    }
    else{

        return false;
    }
}