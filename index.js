let playerScore = 0;
let computerScore = 0;
let resultDiv = null;

function initializeGame() {
    resultDiv = document.getElementById('result');
    hideResult(); // Сховуємо результати при ініціалізації гри
}

function setPlayerSelection(selection) {
    playRound(selection);
}

function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    if (playerSelection === computerSelection) {
        showMessage('It\'s a draw!');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        showMessage(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        showMessage(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    updateScores();
    checkWinner();
}

function showMessage(message) {
    hideResult(); // Сховуємо результати перед виведенням нового повідомлення
    resultDiv.textContent = message;
}

function updateScores() {
    const instructionsDiv = document.getElementById('instructions');
    instructionsDiv.innerHTML = `<p>Player: ${playerScore} | Computer: ${computerScore}</p>`;
    instructionsDiv.style.color = "green";
}

function checkWinner() {
    if (playerScore === 5) {
        alert('Congratulations! You won the game!');
        resetGame();
    } else if (computerScore === 5) {
        alert('Oops! You lost the game. Try again!');
        resetGame();
    }
}

function showResult(message) {
    resultDiv.innerHTML = message;
    resultDiv.style.padding = '50px';
    resultDiv.classList.remove('hidden');
}

function hideResult() {
    resultDiv.innerHTML = '';
    resultDiv.style.padding = '0';
    resultDiv.classList.add('hidden');
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    showMessage('Let\'s play again!');
    hideResult();
}

initializeGame();




  