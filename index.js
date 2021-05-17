//prometo que no proximo faco mais bonitinho separando em mais funcoes 
function numeroAleatorio(){
    random = Math.floor(Math.random() * (6 - 1)) + 1;
    return random;
}

function jogarDados(){
    dadoJogador1 = numeroAleatorio() //fazer essa parte em outra funcao
    dadoJogador2 = numeroAleatorio()
    resultadoJogador = dadoJogador1 + dadoJogador2;

    dadoMaquina1 = numeroAleatorio()
    dadoMaquina2 = numeroAleatorio()
    resultadoMaquina = dadoMaquina1 + dadoMaquina2;

    switch (dadoJogador1){ //ia fazer um switch vanilla para ser 1 ao inves de 4
        case 1:
            document.getElementById("dadoJogador1").src = "lado1.png";
            break;
        case 2:
            document.getElementById("dadoJogador1").src = "lado2.png";
            break;
        case 3:
            document.getElementById("dadoJogador1").src = "lado3.png";
            break;
        case 4:
            document.getElementById("dadoJogador1").src = "lado4.png";
            break; 
        case 5:
            document.getElementById("dadoJogador1").src = "lado5.png";
            break;
        case 6:
            document.getElementById("dadoJogador1").src = "lado6.png";
            break;
    }

    switch (dadoJogador2){
        case 1:
            document.getElementById("dadoJogador2").src = "lado1.png";
            break;
        case 2:
            document.getElementById("dadoJogador2").src = "lado2.png";
            break;
        case 3:
            document.getElementById("dadoJogador2").src = "lado3.png";
            break;
        case 4:
            document.getElementById("dadoJogador2").src = "lado4.png";
            break; 
        case 5:
            document.getElementById("dadoJogador2").src = "lado5.png";
            break;
        case 6:
            document.getElementById("dadoJogador2").src = "lado6.png";
            break;
    }

    switch (dadoMaquina1){
        case 1:
            document.getElementById("dadoMaquina1").src = "lado1.png";
            break;
        case 2:
            document.getElementById("dadoMaquina1").src = "lado2.png";
            break;
        case 3:
            document.getElementById("dadoMaquina1").src = "lado3.png";
            break;
        case 4:
            document.getElementById("dadoMaquina1").src = "lado4.png";
            break;
        case 5:
            document.getElementById("dadoMaquina1").src = "lado5.png";
            break;
        case 6:
            document.getElementById("dadoMaquina1").src = "lado6.png";
            break;
    }

    switch (dadoMaquina2){
        case 1:
            document.getElementById("dadoMaquina2").src = "lado1.png";
            break;
        case 2:
            document.getElementById("dadoMaquina2").src = "lado2.png";
            break;
        case 3:
            document.getElementById("dadoMaquina2").src = "lado3.png";
            break;
        case 4:
            document.getElementById("dadoMaquina2").src = "lado4.png";
            break; 
        case 5:
            document.getElementById("dadoMaquina2").src = "lado5.png";
            break;
        case 6:
            document.getElementById("dadoMaquina2").src = "lado6.png";
            break;
    }

    //e... mostrar a mensagem em outra funcao
    if(resultadoJogador > resultadoMaquina)
    {
        document.getElementById("mostrarMensagem").innerHTML = "O jogador venceu com o total de "+ resultadoJogador+" pontos!";
    } else if (resultadoMaquina > resultadoJogador){
        document.getElementById("mostrarMensagem").innerHTML = "A maquina venceu com o total de "+ resultadoMaquina +" pontos!"; 
    } else {
        document.getElementById("mostrarMensagem").innerHTML = "Foi um empate!!";   
    }
}