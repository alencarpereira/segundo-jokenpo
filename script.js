const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

document.getElementById('resetScore').addEventListener('click', () => {
    humanScore.textContent = '0';
    machineScore.textContent = '0';

    humanScoreNumber = 0;
    machineScoreNumber = 0;
});

let humanScoreNumber = 0
let machineScoreNumber = 0

/*Nomes de  variavéis

 humanScoreNumber --> Camel Case
 GAME_OPTIONS     --> Snake Case

*/

//ENUMS serve para mapear e trocar os nomes do site todo.
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'

}


// variavel do humano
const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}
// função para a maquina ecolher os nomes
const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}
//Para pegar os resultados do humano e da maquina
const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + "Maquina  " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para Alexa"
    }
}

// Função para iniciar a música quando o botão é pressionado
const playButton = document.getElementById("play-music");
const audio = document.getElementById("audio");

let isPlaying = false;

playButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = "🎵"; // Ícone para tocar
    } else {
        audio.play();
        playButton.textContent = "🔇"; // Ícone para pausar
    }

    isPlaying = !isPlaying;
});

// Também é bom garantir que, se a música for pausada por outro motivo,
// o estado visual seja atualizado:
audio.addEventListener("ended", () => {
    isPlaying = false;
    playButton.textContent = "🎵";
});
