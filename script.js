const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const game_result = document.querySelector('.game-result');
const pRes = document.querySelector('.res');
const boardScore = document.querySelector('.board');
let playerScore = 0;
let computerScore = 0;
let humanChoice;


function setPlayerSelection(selection) {
    playRound(selection);
}




function playRound(humanChoice) {

    const arrWeapon = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = arrWeapon[Math.floor(Math.random() * 3)];

    if (humanChoice === 'Rock' && computerChoice === 'Scissors'
        || humanChoice === 'Paper' && computerChoice === 'Rock'
        || humanChoice === 'Scissors' && computerChoice === 'Paper') {
        playerScore++;

        showMessage(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === computerChoice) {
        showMessage('It\'s a draw!');
    } else {
        computerScore++;
        showMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    checkWinner();
    updateScores();
}


function checkWinner() {
    if (playerScore === 5) {
        pRes.textContent = 'Congratulations! You won the game!';
        pRes.style.color = 'rgb(89, 255, 0)';
    } else if (computerScore === 5) {
        pRes.textContent = 'Oops! You lost the game. Try again!';
        pRes.style.color = 'rgb(255, 67, 67)';
    } else if (playerScore > 5 || computerScore > 5) {
        playerScore = 0;
        computerScore = 0;
        pRes.style.color = 'white';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    pRes.textContent = ' ';
    pRes.style.color = 'white';
    updateScores();
}

const resetGameBtn = document.querySelector('.reset');
resetGameBtn.addEventListener('click', resetGame);


function updateScores() {
    boardScore.textContent = `Player:${playerScore}|Computer:${computerScore}`;
    boardScore.style.fontSize = '42px';
    boardScore.style.color = 'white';
}




function initializeGame() {
    pRes.textContent = ' ';
    boardScore.textContent = ' ';
}


function showMessage(message) {
    pRes.textContent = message;

}

console.log('hello');
