// main.js
import { playRound, resetGame } from './gameLogic.js';

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetGameBtn = document.querySelector('.reset');


rockBtn.addEventListener('click', () => playRound('Rock'));
paperBtn.addEventListener('click', () => playRound('Paper'));
scissorsBtn.addEventListener('click', () => playRound('Scissors'));


resetGameBtn.addEventListener('click', resetGame);








