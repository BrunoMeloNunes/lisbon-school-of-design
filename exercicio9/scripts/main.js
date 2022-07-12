function mostramenu(){
    
    itens_do_menu = document.getElementById("items-menu-mobile");

    if(itens_do_menu.style.display=="block"){
        itens_do_menu.style="display:none";
    }else{
        itens_do_menu.style="display:block";
    }
}

function escondeABrutaOMenu(){

    largura_janela=window.innerWidth;
    console.log(largura_janela);

    if(largura_janela > 600){
        itens_do_menu = document.getElementById("items-menu-mobile");
    itens_do_menu.style="display:none";
    }

    
}