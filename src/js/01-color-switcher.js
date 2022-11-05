// const startBtn = document.querySelector('button[data-start]');
// const stopBtn = document.querySelector('button[data-stop]');
// const body = document.querySelector('body')


// startBtn.addEventListener('click', colorSwitch)
// stopBtn.addEventListener('click', colorSwitchStop)

// function colorSwitch() {
//     timer = setInterval(bgColor, 1000)
//     startBtn.setAttribute("disabled");
//     stopBtn.removeAttribute("disabled");
// }

// function colorSwitchStop() {
//     clearInterval(timer)
//     stopBtn.setAttribute("disabled");
//     startBtn.removeAttribute("disabled");
// }

// function bgColor() {
//     body.style.backgroundColor = getRandomHexColor();
// }

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

class ColorSwitcher {
    constructor({startBtn, stopBtn, body}) {
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
        this.body = body;
    }

    start() {
        this.startBtn.addEventListener('click', this.colorSwitch)
        this.stopBtn.addEventListener('click', this.colorSwitchStop)
    }


    colorSwitch() {
        this.timer = setInterval(this.bgColor, 1000)
        this.startBtn.setAttribute("disabled");
        this.stopBtn.removeAttribute("disabled");
    }
    
    colorSwitchStop() {
        clearInterval(this.timer)
        this.stopBtn.setAttribute("disabled");
        this.startBtn.removeAttribute("disabled");
    }
    
    bgColor() {
        this.body.style.backgroundColor = this.getRandomHexColor();
    }
    
    getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
}

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}

new ColorSwitcher(refs).start();