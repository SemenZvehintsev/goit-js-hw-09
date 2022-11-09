import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('button');
const timerSet = document.querySelector('#datetime-picker');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

startBtn.setAttribute("disabled", true);
startBtn.addEventListener('click', timerOn)

let pickTime;
let date;
let timerGo;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() > date.getTime()) {
        startBtn.removeAttribute("disabled");
      } else {
        startBtn.setAttribute("disabled", true);
        window.alert("Please choose a date in the future");
        }
    },
};

let timer = flatpickr(timerSet, options);

timerSet.addEventListener('input', (event) => {
    date = new Date();
    pickTime = new Date(event.currentTarget.value);
})

function timerOn() {
  timerGo = setInterval(convertMs, 1000)
  startBtn.setAttribute("disabled", true);
  timerSet.setAttribute("disabled", true);
}

function timerStop() {
  if (Number(secondsLeft.textContent)
  === 0 && Number(hoursLeft.textContent)
  === 0 && Number(minutesLeft.textContent)
  === 0 && Number(daysLeft.textContent)
  === 0) {
    clearInterval(timerGo)
    timerSet.removeAttribute("disabled");
  }
}

function convertMs() {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    date = new Date();
    const ms = pickTime.getTime() - date.getTime();
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    daysLeft.textContent = days;
    hoursLeft.textContent = hours;
    minutesLeft.textContent = minutes;
    secondsLeft.textContent = seconds;
    timerStop()
}