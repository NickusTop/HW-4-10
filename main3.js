const timeInput = document.querySelector(".time-input");
const messageButton = document.querySelector(".message-button");

messageButton.addEventListener("click", clickButton);

function clickButton() {
    const time = parseInt(timeInput.value);
    if (isNaN(time) || time <= 0) {
        alert("Будь ласка введіть коректний час у секундах!");
        return;
    }
    timeInput.value = "";
    setTimeout(() => {
        alert("Час вийшов!");
    }, time * 1000);
}