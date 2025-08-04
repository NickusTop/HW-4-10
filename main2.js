// 3
const arenaDiv = document.querySelector('.arena-div');
const arenaButton = document.querySelector('.arena-button');
const ulAnimation = document.querySelector('.ul-animation');
const pCounts = document.querySelector('.p-counts');
const startButton = document.querySelector('.start-button');

let score = 0;
let gameStarted = false;

startButton.addEventListener('click', startGame);
arenaButton.addEventListener('click', clickButton);

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        score = 0;
        pCounts.textContent = `Очки: ${score}`;
        arenaButton.style.display = 'block';
        randomPositionButton();
    }
}
function randomPositionButton() {
    setInterval(() => {
        if (gameStarted) {
            const maxWidth = arenaDiv.clientWidth - 30;
            const maxHeight = arenaDiv.clientHeight - 30;
            const randomX = Math.floor(Math.random() * maxWidth);
            const randomY = Math.floor(Math.random() * maxHeight);
            
            arenaButton.style.left = `${randomX}px`;
            arenaButton.style.top = `${randomY}px`;
        }
    }, 800);
    
}
function clickButton() {
    if (gameStarted && score < 20) {
        score++;
        pCounts.textContent = `Очки: ${score}`;
    } else {
        alert("Гра закінчена! Ви набрали 20 очок.");
        gameStarted = false;
        arenaButton.style.display = 'none';
        pCounts.textContent = `Очки: 0`;
        setInterval(() => {
            window.location.reload();
        }, 2000);
    }
}