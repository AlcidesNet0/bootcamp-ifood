// Capturando o elemento onde o texto será inserido, depois criando um parágrafo e adicionando uma classe a ele
const levelResult = document.getElementById("levelResult");
const textResult = document.createElement("p");
textResult.className = "bg-success-subtle";

// Capturando os botões 

const resetButton = document.getElementById("resetButton");
const showText = document.getElementById("showText");

// Adicionando uma ação ao evento 'click' do botão de reset, recarregando a página

resetButton.addEventListener("click", () => {
    location.reload();
})

// Função que utiliza um 'if'/'else if' para determinar o nível do heroi a partir do valor do XP;

let level;

function XPResult(XP) {
    if (XP <= 1000 && XP >= 1) {
      return (level = "Ferro");
    } 
    else if (XP <= 2000 && XP >= 1001) {
      return (level = "Bronze");
    } 
    else if (XP <= 5000 && XP >= 2001) {
      return (level = "Prata");
    } 
    else if (XP <= 7000 && XP >= 5001) {
      return (level = "Ouro");
    } 
    else if (XP <= 8000 && XP >= 7001) {
      return (level = "Platina");
    } 
    else if (XP <= 9000 && XP >= 8001) {
      return (level = "Ascendente");
    } 
    else if (XP <= 10000 && XP >= 9001) {
      return (level = "Imortal");
    } 
    else if (XP > 10000) {
      return (level = "Radiante");
    } else {
        return (level = "Iniciante");
    }
  }

// Essa função tem o propósito de inserir o texto que aparecerá no parágrafo, além de organizar melhor o código

function createTextResult(heroName, XP) {
    textResult.innerHTML = `O Herói de nome ${heroName} está no nível ${XPResult(XP)}`
    return textResult;
  }

// Ao clicar no botão de "ver o nível", os valores dos 'inputs' são capturados e repassados para as funções acima, para então, ser adicionado na 'div'
// que exibirá o texto;
  showText.addEventListener("click", () => {
    const heroName = document.forms[0].heroName.value;
    const XPoints = Number(document.forms[0].XPoints.value);
    levelResult.appendChild(createTextResult(heroName, XPoints));
  })