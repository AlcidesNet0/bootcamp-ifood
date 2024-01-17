// Capturando os botões 

const resetButton = document.getElementById("resetButton");
const showText = document.getElementById("showText");

// Capturando o elemento onde o texto será inserido, depois criando um parágrafo

const levelResult = document.getElementById("levelResult");
const textResult = document.createElement("p");

// Declaração das variáveis

let vitorias
let derrotas
let saldoVitorias

// Função que utiliza um 'if'/'else if' para determinar o nível de ranqueada do heroi 
// a partir do seu saldo de vitórias;

function ranked(vitorias, derrotas) {
    let levelRanked = vitorias - derrotas;
    if(levelRanked <= 0) {
        return "Iniciante"
    }
    if(levelRanked < 10 && levelRanked > 0) {
        return "Ferro";
    }
    else if(levelRanked >= 10 && levelRanked <= 20) {
        return "Bronze";
    }
    else if(levelRanked > 20 && levelRanked <= 50) {
        return "Prata";
    }
    else if(levelRanked > 50 && levelRanked <= 80) {
        return "Ouro";
    }
    else if(levelRanked > 80 && levelRanked <= 90) {
        return "Diamante";
    }
    else if(levelRanked > 90 && levelRanked <= 100) {
        return "Lendário";
    }
    else if(levelRanked > 100) {
        return "Imortal";
    }
}

// Essa função tem o propósito de inserir o texto que aparecerá no parágrafo, além de organizar melhor o código

function showTextResult(saldoVitorias, rankedCategory) {
    textResult.innerHTML = `O Heroi tem um saldo de ${saldoVitorias} ${(saldoVitorias === 1) ? "vitória" : "vitórias"} e está no nível ${rankedCategory}`;
    textResult.innerHTML += ` ${(rankedCategory === "Iniciante") ? "" : `<img id="imagem" style ="display: inline;" src="../assets/${rankedCategory}.png" alt="Ícone do ${rankedCategory}">`}`;
    return textResult;
}

// Após o evento do 'click' no botão que mostra o nível, os inputs são capturados e seus valores são passados para as variáveis
// 'vitorias' e 'derrotas', respectivamente. Além disso, a variável 'saldoVitorias' realiza o calculo de subtração e o texto é inserido;

showText.addEventListener("click", () => {
    vitorias = Number(document.forms[0].victoryPoints.value);
    derrotas = Number(document.forms[0].defeatPoints.value);
    saldoVitorias = vitorias - derrotas;
    levelResult.appendChild(showTextResult((saldoVitorias), ranked(vitorias, derrotas)));
});

// Adicionando uma ação ao evento 'click' do botão de reset, recarregando a página

resetButton.addEventListener("click", () => {
    location.reload();
})
