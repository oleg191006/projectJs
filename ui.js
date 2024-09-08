// ui.js
const pRes = document.querySelector('.res');
const boardScore = document.querySelector('.board');

export function updateScores(playerScore, computerScore) {
    boardScore.textContent = `Player:${playerScore} | Computer:${computerScore}`;
    boardScore.style.fontSize = '32px';
    boardScore.style.color = 'white';
}

export function showMessage(message, status) {
    pRes.textContent = message;
    if (status === 'win') {
        pRes.style.color = 'rgb(89, 255, 0)';
    } else if (status === 'lose') {
        pRes.style.color = 'rgb(255, 67, 67)';
    } else {
        pRes.style.color = 'white';
    }
}
