const pAn = document.querySelector(".p-animation");
const divAn = document.querySelector(".div-animation");
const startButton = document.querySelector(".start-button");
const ulAnimation = document.querySelector(".ul-animation");

let pAnInterval;
let divAnInterval;
let countsInterval;

startButton.addEventListener("click", stopAnimation);
ulAnimation.addEventListener("click", startAnimations);

function stopAnimation() {
    clearInterval(pAnInterval);
    clearInterval(divAnInterval);
    clearInterval(countsInterval);
    pAn.style.color = "white";
    pAn.style.fontSize = "30px";
    divAn.style.backgroundColor = "white";
    divAn.style.width = "100px";
    divAn.style.height = "100px";
}
let counts = 0;
    countsInterval = setInterval(() => {
        console.log("Hello, world!");
        counts++;
        if (counts >= 5) {
            console.log("Кінець!");
            clearInterval(countsInterval);
        }
    }, 1000);
function startAnimations() {

    let fontSize = 30;
    let increasing = true;

    pAnInterval = setInterval(() => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        pAn.style.color = randomColor;
        pAn.style.fontSize = `${fontSize}px`;

        if (increasing) {
            fontSize += 2;
            if (fontSize >= 40) increasing = false;
        } else {
            fontSize -= 2;
            if (fontSize <= 20) increasing = true;
        }
    }, 1000);

    let size = 100;
    let growing = true;

    divAnInterval = setInterval(() => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        divAn.style.backgroundColor = randomColor;

        if (growing) {
            size += 5;
            if (size >= 120) growing = false;
        } else {
            size -= 5;
            if (size <= 100) growing = true;
        }

        divAn.style.width = `${size}px`;
        divAn.style.height = `${size}px`;

    }, 1000);
}
