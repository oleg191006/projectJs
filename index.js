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
const res=document.getElementById('results-table');
res.style.marginTop='40px';
res.style.fontSize='33px';
res.classList.add('resColor');

function updateScores() {
    const instructionsDiv = document.getElementById('instructions');
    instructionsDiv.innerHTML = `<p>Player: ${playerScore} | Computer: ${computerScore}</p>`;
    instructionsDiv.style.color = "pink";
    instructionsDiv.style.margin='-100px';
    instructionsDiv.style.marginLeft='650px';
    instructionsDiv.style.marginTop='0px';
    instructionsDiv.style.fontSize='26px'
}

function checkWinner() {
    if (playerScore === 5) {
        res.textContent='Congratulations! You won the game!';
        res.classList.remove('hidden');
        res.style.color='gold';
    } else if (computerScore === 5) {
        res.textContent='Oops! You lost the game. Try again!';
        res.classList.remove('hidden');
        res.style.color='red';
    }
  
}

function showResult(message) {
    resultDiv.innerHTML = message;
    resultDiv.style.padding = '50px';
    
}

function hideResult() {
    resultDiv.innerHTML = '';
    resultDiv.style.padding = '1000';
   
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    res.classList.add('hidden');
    
}
const newGame=document.getElementById('playAgain');
newGame.addEventListener('click',resetGame);

initializeGame();




  