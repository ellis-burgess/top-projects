const rockPaperScissors = ['rock', 'paper', 'scissors'];
const startButton = document.querySelector('.start');
const buttons = document.querySelectorAll('.playerinput');
const div = document.querySelector('#results-div');
const result = document.querySelector('#results');
const scoreTally = document.querySelector('#total-score');
let currentOutcome;

result.textContent = `Press New Game to begin.`;

startButton.addEventListener('click', playGame);

function chooseComputer() {
    return rockPaperScissors[(Math.floor(Math.random() * 3))];
}

function playRound(playerSelection) {
    let computerSelection = chooseComputer();
    if (computerSelection == playerSelection) {
        result.textContent = `You and the computer both played ${playerSelection}. It's a draw!`;
        return 'draw'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        result.textContent = `You played ${playerSelection}, and the computer played ${computerSelection}. Computer wins!`;
        return 'computer'
    } else {
        result.textContent = `You played ${playerSelection}, and the computer played ${computerSelection}. You win!`;
        return 'player'
    }
}

function playGame() {

    let computerScore = 0;
    let playerScore = 0;
    result.textContent = '';
    scoreTally.textContent = `Select rock, paper, or scissors...`;

    buttons.forEach((button) => {
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
            }
        });
    });
}