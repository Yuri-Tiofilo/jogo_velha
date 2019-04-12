var cont = 0;
var verifica = [, , , , , , , ,];
const x = "x";
const o = "o";
var vencer = true;

function colocar(id, i) {
    let elemento = document.getElementById(id);
    if (vencer != false) {
        if (!elemento.firstElementChild) {
            cont++;
            if (cont % 2 == 0) {
                elemento.innerHTML = '<img src="./_img/0.png">'
                verifica[i] = 'o'

            } else {
                elemento.innerHTML = '<img src="./_img/X.png">'
                verifica[i] = 'x'
            }
        }
    }
    verificar(id);
}
function verificar(id) {

    if ((verifica[0] == verifica[1]) && (verifica[1] == verifica[2]) && (verifica[0] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[0] == verifica[4] && verifica[4] == verifica[8] && (verifica[0] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[0] == verifica[3] && verifica[3] == verifica[6] && (verifica[0] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[1] == verifica[4] && verifica[4] == verifica[7] && (verifica[1] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[2] == verifica[5] && verifica[5] == verifica[8] && (verifica[2] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[3] == verifica[4] && verifica[4] == verifica[5] && (verifica[3] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[6] == verifica[7] && verifica[7] == verifica[8] && (verifica[6] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[6] == verifica[4] && verifica[4] == verifica[2] && (verifica[6] == 'x')) {
        document.getElementById("mensagem").innerHTML = "X ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if ((verifica[0] == verifica[1]) && (verifica[1] == verifica[2]) && (verifica[0] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[0] == verifica[4] && verifica[4] == verifica[8] && (verifica[0] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[0] == verifica[3] && verifica[3] == verifica[6] && (verifica[0] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[1] == verifica[4] && verifica[4] == verifica[7] && (verifica[1] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[2] == verifica[5] && verifica[5] == verifica[8] && (verifica[2] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[3] == verifica[4] && verifica[4] == verifica[5] && (verifica[3] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[6] == verifica[7] && verifica[7] == verifica[8] && (verifica[6] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (verifica[6] == verifica[4] && verifica[4] == verifica[2] && (verifica[6] == 'o')) {
        document.getElementById("mensagem").innerHTML = "O ganhou! Reinicie o jogo para jogar novamente!";
        vencer = false;
    }
    else if (cont == 9) {
       
        document.getElementById("mensagem").innerHTML = "Deu velha! Reinicie o jogo para jogar novamente!";
       
        
    }
}
function reniciar() {
    cont = 0;
    verifica = [, , , , , , , ,];
    location.reload();
}