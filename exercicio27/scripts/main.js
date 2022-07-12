function acao_do_botao(){
    console.log("entrei na função");
    /*ir buscar o numero que o user introduziu*/
    numero_introduzido=document.getElementById("numero_de_utilizador").value;
    document.getElementById("zona_de_resultados").style="border: none";
    console.log(numero_introduzido);

    /*for só se quiser repetir uma acao*/
    /*alert aparece um pop up na página a indicar*/
    /* == igual != não igual*/
    

    if(numero_introduzido!="" && isNaN(numero_introduzido) == false){
        /*document.getElementById("zona_de_resultados").style="border: none";*/
        if(numero_introduzido %2 ==0){
            mensagem = "é número par";
        }else{
            mensagem = "é número ímpar";
        }
        /*alert(mensagem);*/
    }else{
        mensagem="introduza um número";
        document.getElementById("zona_de_resultados").style="border: 1px solid red";
    }
    document.getElementById("zona_de_resultados").innerText = mensagem;








}