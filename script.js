const rockPaperScissors = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const div = document.querySelector('#results-div');
const result = document.querySelector('#results');
const scoreTally = document.querySelector('#total-score');
let currentOutcome;

playGame();

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
                scoreTally.textContent = `Your current score is ${playerScore}, and the computer's current score is ${computerScore}.`;        
            }

            if (computerScore == 5) {
                alert('Computer wins!');
                return;
            } else if (playerScore == 5) {
                alert('You win!');
                return;
            }
        });
    });
}