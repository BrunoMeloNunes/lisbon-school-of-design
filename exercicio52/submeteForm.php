<?php
    $informacao_recebida = $_POST;
    echo "<pre>";
    print_r($informacao_recebida);
    echo "</pre>";


    $nome_recebido = $_POST['nome_inserido'];
    echo "O nome recebido é: $nome_recebido";

    $interesses_recebidos = $_POST['interesses'];

    for($i=0; $i<count($interesses_recebidos);$i++){
        echo $interesses_recebidos[$i]."<br>";
    }




?>