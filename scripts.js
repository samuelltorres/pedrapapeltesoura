const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["pedra", "papel", "tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " | Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate!";
  } else if (
    (human === "papel" && machine === "pedra") ||
    (human === "pedra" && machine === "tesoura") ||
    (human === "tesoura" && machine === "papel")
  ) {
    result.innerHTML = "Você ganhou!";

    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
  } else {
    result.innerHTML = "Você perdeu para a Alexa!";

    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
  }
};

/*
  papel > pedra > tesoura > papel

*/
