const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')


startBtn.addEventListener('click', colorSwitch)
stopBtn.addEventListener('click', colorSwitchStop)

let timer

function colorSwitch() {
    timer = setInterval(bgColor, 1000)
    startBtn.setAttribute("disabled", true);
    stopBtn.removeAttribute("disabled");
}

function colorSwitchStop() {
    clearInterval(timer)
    stopBtn.setAttribute("disabled", true);
    startBtn.removeAttribute("disabled");
}

function bgColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}