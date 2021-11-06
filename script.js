const rockPaperScissors = ['rock', 'paper', 'scissors'];
const startButton = document.querySelector('.start');
const playerButtons = document.querySelectorAll('.playerinput');
const computerButtons = document.querySelectorAll('.computerchoice');
const result = document.querySelector('#results');
const scoreTally = document.querySelector('#total-score');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const scoreDisplay = document.getElementById('score');
const iconAttButton = document.getElementById('icon-attribution-button');
const iconAttDiv = document.getElementById('icon-popup');

let currentOutcome;
let computerScore;
let playerScore;

startNewGame();

iconAttButton.addEventListener('click', displayAttribution);

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

    computerButton.style.cssText = 'background: #dea6d2;';
    playerButton.style.cssText = 'background: #dea6d2;';

    if (computerSelection == playerSelection) {
        result.textContent = `It's a draw! Try again...`;
        outcome = 'draw'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        result.textContent = `The computer wins this round...`;
        outcome = 'computer'
    } else {
        result.textContent = `You win this round!`;
        outcome = 'player'
    }

    currentOutcome = outcome;
    if (currentOutcome == 'computer') {
        computerScore++;
    } else if (currentOutcome == 'player') {
        playerScore++;
    }

    scoreDisplay.style.cssText = 'display: flex;';

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    playGame();

    return;
}

function playGame() {
    scoreTally.textContent = `Your score is ${playerScore} and the computer's score is ${computerScore}.`;
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

    scoreDisplay.style.cssText = 'display: none;';

    computerScore = 0;
    playerScore = 0;

    playerScoreDisplay.textContent = '';
    computerScoreDisplay.textContent = '';

    result.textContent = '';
    scoreTally.textContent = 'Play rock, paper, or scissors to begin...';
}

function resetButtonsDisplay() {
    computerButtons.forEach((button) => {
        button.style.cssText = 'background: #E9C4E1;';
    })

    playerButtons.forEach((button) => {
        button.style.cssText = 'background: #E9C4E1;';
    })
    return;
}

function displayAttribution() {
    iconAttDiv.classList.toggle('hidden');
}