$(document).ready(function(){
    $('.item_menu, .um_botao_fixe').on('click', function(){
        $('.caixa_drop').slideToggle(1000);
    });

    //$('button').on('mouseenter')

    $('.direita').click(function(){
        $('.caixa-4').animate({'margin-left':'250px'})
    });
    
});