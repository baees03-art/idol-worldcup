import { gameData } from './data.js';

const categorySelection = document.getElementById('category-selection');
const roundSelection = document.getElementById('round-selection');
const gameBoard = document.getElementById('game-board');
const winnerDisplay = document.getElementById('winner-display');

const categoryButtons = document.querySelectorAll('.category-btn');
const roundButtons = document.querySelectorAll('.round-btn');
const restartButton = document.getElementById('restart-btn');

let currentCategory = '';
let currentRound = 0;
let currentData = [];
let roundItems = [];
let nextRoundItems = [];
let round = 1;


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.dataset.category;
        categorySelection.classList.add('hidden');
        roundSelection.classList.remove('hidden');
    });
});

roundButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentRound = parseInt(button.dataset.round);
        roundSelection.classList.add('hidden');
        startGame();
    });
});

restartButton.addEventListener('click', () => {
    winnerDisplay.classList.add('hidden');
    categorySelection.classList.remove('hidden');
    round = 1;
    nextRoundItems = [];
    currentData = [];
});

function startGame() {
    currentData = [...gameData[currentCategory]];
    shuffleArray(currentData);
    roundItems = currentData.slice(0, currentRound);
    gameBoard.classList.remove('hidden');
    displayNextMatch();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayNextMatch() {
    if (roundItems.length === 0 && nextRoundItems.length === 1) {
        displayWinner(nextRoundItems[0]);
        return;
    }

    if (roundItems.length === 0) {
        roundItems = [...nextRoundItems];
        nextRoundItems = [];
        round++;
    }

    const item1 = roundItems.shift();
    const item2 = roundItems.shift();

    const roundTitle = document.getElementById('round-title');
    const gameContainer = document.getElementById('game-container');

    const totalRounds = currentRound / Math.pow(2, round - 1);
    roundTitle.textContent = `${totalRounds > 2 ? `${totalRounds}강` : '결승전'} - ${round}라운드`;
    
    gameContainer.innerHTML = '';
    gameContainer.appendChild(createGameCard(item1));
    gameContainer.appendChild(createGameCard(item2));
}

function createGameCard(item) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `<img src="${item.img}" alt="${item.name}"><p>${item.name}</p>`;
    card.addEventListener('click', () => {
        nextRoundItems.push(item);
        displayNextMatch();
    });
    return card;
}

function displayWinner(winner) {
    const winnerContainer = document.getElementById('winner-container');
    winnerContainer.innerHTML = `
        <div class="game-card">
            <img src="${winner.img}" alt="${winner.name}">
            <p>${winner.name}</p>
        </div>
    `;
    gameBoard.classList.add('hidden');
    winnerDisplay.classList.remove('hidden');

    // TODO: Add Firebase integration to update rankings
}
