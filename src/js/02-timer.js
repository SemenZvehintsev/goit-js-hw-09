import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";




const startBtn =  document.querySelector('button[data-start]');
const timerSet =  document.querySelector('#datetime-picker');

startBtn.setAttribute("disabled", "");
startBtn.addEventListener('click', dateSet)

function dateSet () {
    
}




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const timer = flatpickr(timerSet, options);
