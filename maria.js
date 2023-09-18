HTML 

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="exemplo.js"></script>
</head>

<body>
    <p>chocolate<strong> branco</strong></p>
    <p id="especial">chocolate<strong> ao leite</strong></p>

</body>
</html

CSS

$(document).ready(function(){

/*
    if (confirm("Deseja salvar as informações?")) {
        alert("Informação salva com sucesso!");
    } else {
        alert("Inserção cancelada!");
    }
*/

    guarda = $("p").text(); //obtenção do conteudo textual
    alert(guarda);
    $("#especial").text("Chocolate preto"); //mudança do conteudo
})
