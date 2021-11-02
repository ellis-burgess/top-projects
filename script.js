const rockPaperScissors = ['rock', 'paper', 'scissors'];
const startButton = document.querySelector('.start');
const playerButtons = document.querySelectorAll('.playerinput');
const computerButtons = document.querySelectorAll('.computerchoice');
const result = document.querySelector('#results');
const scoreTally = document.querySelector('#total-score');

let currentOutcome;
let computerScore;
let playerScore;

startNewGame();

playerButtons.forEach(function (button) {
    button.addEventListener('click', playRound);
});

startButton.addEventListener('click', startNewGame);

function playRound(event) {
    resetButtonsDisplay();

    let playerSelection = this.id;
    let playerButton = document.getElementById(this.id);
    let computerSelection = rockPaperScissors[(Math.floor(Math.random() * 3))];
    let computerButton = document.getElementById(`computer-${computerSelection}`);

    computerButton.style.cssText = 'font-weight: bold;';
    playerButton.style.cssText = 'font-weight: bold;';

    if (computerSelection == playerSelection) {
        result.textContent = `You and the computer both played ${playerSelection}. It's a draw!`;
        outcome = 'draw'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        result.textContent = `You played ${playerSelection}, and the computer played ${computerSelection}. Computer wins!`;
        outcome = 'computer'
    } else {
        result.textContent = `You played ${playerSelection}, and the computer played ${computerSelection}. You win!`;
        outcome = 'player'
    }

    currentOutcome = outcome;
    if (currentOutcome == 'computer') {
        computerScore++;
    } else if (currentOutcome == 'player') {
        playerScore++;
    }

    playGame();

    return;
}

function playGame() {
    scoreTally.textContent = `The computer's score is ${computerScore} and the player's score is ${playerScore}.`;
    if ((playerScore == 5) || (computerScore == 5)) {
        if (playerScore > computerScore) {
            scoreTally.textContent += ` You win!`
        } else {
            scoreTally.textContent += ` You lose!`
        }
        startButton.style.cssText = 'display: block;';
        playerButtons.forEach(function (button) {
            button.removeEventListener('click', playRound);
        });
    }
}

function startNewGame() {
    startButton.style.cssText = 'display: none;';
    playerButtons.forEach(function (button) {
        button.addEventListener('click', playRound);
    });

    resetButtonsDisplay();

    computerScore = 0;
    playerScore = 0;

    scoreTally.textContent = `The computer's score is ${computerScore} and the player's score is ${playerScore}.`;
}

function resetButtonsDisplay() {
    computerButtons.forEach((button) => {
        button.style.cssText = 'font-weight: normal;';
    })

    playerButtons.forEach((button) => {
        button.style.cssText = 'font-weight: normal;';
    })
    return;
}