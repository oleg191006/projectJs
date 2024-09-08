// gameLogic.js
import { arrWeapon, winningScore } from './constant.js';
import { updateScores, showMessage } from './ui.js';

let playerScore = 0;
let computerScore = 0;


export function playRound(humanChoice) {
    const computerChoice = arrWeapon[Math.floor(Math.random() * arrWeapon.length)];

    if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
        playerScore++;
        showMessage(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === computerChoice) {
        showMessage('It\'s a draw!');
    } else {
        computerScore++;
        showMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    checkWinner();
    updateScores(playerScore, computerScore);
}

export function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores(playerScore, computerScore);
}

function checkWinner() {
    if (playerScore === winningScore) {
        showMessage('Congratulations! You won the game!', 'win');
    } else if (computerScore === winningScore) {
        showMessage('Oops! You lost the game. Try again!', 'lose');
    } else if (playerScore > 5 || computerScore > 5) {
        playerScore = 0;
        computerScore = 0;
        pRes.style.color = 'white';
    }
}
