const rockPaperScissors = ['rock', 'paper', 'scissors'];
const startButton = document.querySelector('.start');
const playerInputButtons = document.querySelectorAll('.playerinput');
const computerButtons = document.querySelectorAll('.computerchoice')
const div = document.querySelector('#results-div');
const result = document.querySelector('#results');
const scoreTally = document.querySelector('#total-score');
let currentOutcome;

playGame();

startButton.addEventListener('click', playGame);

function resetButtonsColor() {
    computerButtons.forEach((button) => {
        button.style.cssText = 'color: black;';
    })

    playerInputButtons.forEach((button) => {
        button.style.cssText = 'color: black;';
    })
    return;
}

function chooseComputer() {
    let computerSelection = rockPaperScissors[(Math.floor(Math.random() * 3))];
    let computerButton = `computer-${computerSelection}`;
    console.log(computerButton);
    return [computerSelection, computerButton];
}

function playRound(playerSelection) {
    let computerSelection = chooseComputer();
    let computerButton = document.getElementById(computerSelection[1]);
    let playerButton = document.getElementById(playerSelection);
    let outcome;

    resetButtonsColor();

    computerButton.style.cssText = 'color: red;';
    playerButton.style.cssText = 'color: red;';

    if (computerSelection[0] == playerSelection) {
        result.textContent = `You and the computer both played ${playerSelection}. It's a draw!`;
        outcome = 'draw'
    }
    else if ((playerSelection == 'rock' && computerSelection[0] == 'paper') ||
        (playerSelection == 'paper' && computerSelection[0] == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection[0] == 'rock')) {
        result.textContent = `You played ${playerSelection}, and the computer played ${computerSelection[0]}. Computer wins!`;
        outcome = 'computer'
    } else {
        result.textContent = `You played ${playerSelection}, and the computer played ${computerSelection[0]}. You win!`;
        outcome = 'player'
    }

    return outcome;
}

function playGame() {

    resetButtonsColor();

    let computerScore = 0;
    let playerScore = 0;
    startButton.style.cssText = 'display: none;';
    result.textContent = '';
    scoreTally.textContent = `Select rock, paper, or scissors...`;

    playerInputButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerChoice = button.id;
            currentOutcome = playRound(playerChoice);
    
            if ((computerScore < 5) && (playerScore < 5)) {
                if (currentOutcome == 'computer') {
                    computerScore++;
                } else if (currentOutcome == 'player') {
                    playerScore++;
                }
            }

            scoreTally.textContent = `Your score is ${playerScore}, and the computer's score is ${computerScore}.`;

            if (computerScore == 5) {
                result.textContent = 'Computer wins!'
            } else if (playerScore == 5) {
                result.textContent = `You win!`
            }

            if ((computerScore == 5) || (playerScore == 5)) {
                scoreTally.textContent += ` Click New Game to play again.`;
                startButton.style.cssText = 'display: block;';
            } else {
                startButton.style.cssText = 'display: none;';
            }
        });
    });
}