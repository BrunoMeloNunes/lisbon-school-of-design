carro1 = {

    marca : "Fiat",
    modelo : "Punto",
    cilindrada : "1000cc",
    caracteristicas : ['Vidros eletricos', 'AC']
};

carro2 = {

    marca : "Toyota",
    modelo : "Yaris",
    cilindrada : "1200cc",
    caracteristicas : ['Alarme', 'Direcao Assistida']
};

carro3 = {

    marca : "BMW",
    modelo : "320",
    cilindrada : "2000cc",
    caracteristicas : ['Alarme', 'Direcao Assistida', 'Bancos Aquecidos']
};

carro4 = {

    marca : "Audi",
    modelo : "r8",
    cilindrada : "3000cc",
    caracteristicas : ['Bancos Aquecidos', 'Direcao Assistida']
};

carro5 = {

    marca : "Ferrari",
    modelo : "f40",
    cilindrada : "5000cc",
    caracteristicas : ['Bancos em Pele', 'Direcao Assistida']
};

lista_de_carros = [carro1 , carro2 , carro3 , carro4 , carro5];


//lista_de_caracteristicas= ['alarme', 'direcao assistida', 'bancos aquecidos']
//caracteristicas = 'bancos aquecidos'
function encontraCaracteristica(lista_de_caracteristicas, caracteristica){

    // percorrer array de caracteristica

    for(j = 0; j < lista_de_caracteristicas.length; j++){

        //se a caracteristica lida == a caracteristica desejada
        if(lista_de_caracteristicas[j] == caracteristica){
            return true
        }
    }


    return false
}