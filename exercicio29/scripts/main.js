function VerificaPremio(){
    alert("entrei na funçao");

    /*vou buscar a aposta*/

    apostainserida=document.getElementById("aposta").value;
    aposta=apostainserida.split(";");

    chaveinserida=document.getElementById("chave").value;
    chave=chaveinserida.split(";");

    estrelasapostainserida= document.getElementById("estrelas_aposta").value;
    estrelas_aposta=estrelasapostainserida.split(";");

    estrelaschaveinserida= document.getElementById("estrelas_chave").value;
    estrelas_chave=estrelaschaveinserida.split(";");

    encontrados = 0;
    
    /*+i=i+1 é igual a i++*/
    for(i=0; i<5; i++){
        numero_lido=aposta[i];

        if(
            numero_lido==chave[0] ||
            numero_lido==chave[1] ||
            numero_lido==chave[2] ||
            numero_lido==chave[3] ||
            numero_lido==chave[4]  
            ){
            encontrados++;
        }
    }

    estrelas_encontradas=0;
    
    for(i=0; i<2; i++){
        estrela_lida=estrelas_aposta[i];

        if(estrela_lida==estrelas_chave[0] ||
            estrela_lida==estrelas_chave[1]
                ){
                estrelas_encontradas++;
            }
    }

    if(encontrados==5 && estrelas_encontradas==2){
        console.log("Ganhaste o 1º prémio");
    }

    else if(encontrados==5 && estrelas_encontradas==1){
        console.log("Ganhaste o 2º prémio");
    }

    else if(encontrados==5 && estrelas_encontradas==0){
        console.log("Ganhaste o 3º prémio");
    }

    else if(encontrados==4 && estrelas_encontradas==2){
        console.log("Ganhaste o 4º prémio");
    }

    else if(encontrados==4 && estrelas_encontradas==1){
        console.log("Ganhaste o 5º prémio");
    }

    else if(encontrados==3 && estrelas_encontradas==2){
        console.log("Ganhaste o 6º prémio");
    }

    else if(encontrados==4 && estrelas_encontradas==0){
        console.log("Ganhaste o 7º prémio");
    }

    else if(encontrados==2 && estrelas_encontradas==2){
        console.log("Ganhaste o 8º prémio");
    }

    else if(encontrados==3 && estrelas_encontradas==1){
        console.log("Ganhaste o 9º prémio");
    }

    else if(encontrados==3 && estrelas_encontradas==0){
        console.log("Ganhaste o 10º prémio");
    }

    else if(encontrados==1 && estrelas_encontradas==2){
        console.log("Ganhaste o 11º prémio");
    }

    else if(encontrados==2 && estrelas_encontradas==1){
        console.log("Ganhaste o 12º prémio");
    }

    else if(encontrados==2 && estrelas_encontradas==0){
        console.log("Ganhaste o 13º prémio");
    }

    else{
        console.log("Nao tens premio");
    }

    alert(encontrados);

    alert(estrelas_encontradas);
}