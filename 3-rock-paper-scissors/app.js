const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");
const generalElement = document.getElementById("resultG");
const contador = document.getElementById("counter");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

var playerC = 0;
var pcC = 0;
var general = "";

function startGame(event) {
  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  const winner = setWinner(playerChoice, computerChoice);

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);
 // Aumentar contador
  counter(winner);
 // Calcular resultado general
  general = setGeneral();

  // Mostrar ganador de esta ronda  
  resultElement.textContent = `${winner} esta ronda con ${playerChoice} contra ${computerChoice}`;
  
  // Mostrar resultado general
  generalElement.textContent = general

  // Mostrar puntajes
  contador.textContent= `Tu puntaje ${playerC} vs pc ${pcC}`;

   // resetear puntaje
  if(general != "")
  {
    
    reset()
  }
}

const possibleChoices = ["Roca", "Papel", "Tijeras"];


function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {
  console.log("playerChoice", playerChoice);
  console.log("computerChoice", computerChoice);
  if (
    (playerChoice === "Roca" && computerChoice === "Tijeras") ||
    (playerChoice === "Papel" && computerChoice === "Roca") ||
    (playerChoice === "Tijeras" && computerChoice === "Papel")
  ) {
    return "GANASTE";
  } else if (playerChoice === computerChoice) {
    return "EMPATASTE";
  } else {
    return "PERDISTE";
  }
}

  //Contador
  function counter(winner)
  {
    if(winner === "GANASTE")
    {
      playerC = playerC + 1;
    }

    if(winner === "PERDISTE")
    {
      pcC = pcC + 1;
    }
  }

  //Ganador general
  function setGeneral()
  {
    if(playerC === 3)
    {
      return "GANASTE";
    }

    if(pcC === 3)
    {
      return "PERDISTE";
    }

    return "";
  }

  //Reset de los puntajes
  function reset()
  {
    playerC = 0
    pcC = 0
  }

