import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";




const startBtn = document.querySelector('button');
const timerSet = document.querySelector('#datetime-picker');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

startBtn.setAttribute("disabled", true);
startBtn.addEventListener('click', convertMs(ms))

const date = new Date()

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() > date.getTime()) {
        startBtn.removeAttribute("disabled");
      } else {
        startBtn.setAttribute("disabled", true);
        window.alert("Please choose a date in the future");
        }
    },
};

const timer = flatpickr(timerSet, options);

timerSet.addEventListener('input', (event) => {
    const pickTime = new Date(event.currentTarget.value)
    console.log(pickTime.getTime())

    const ms = pickTime.getTime() - date.getTime();
    // console.log(ms);
    return ms

})

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  




// class NewTimer {

//     startBtn = document.querySelector('button');
//     timerSet = document.querySelector('#datetime-picker');
//     daysLeft = document.querySelector('[data-days]');
//     hoursLeft = document.querySelector('[data-hours]');
//     minutesLeft = document.querySelector('[data-minutes]');
//     secondsLeft = document.querySelector('[data-seconds]');
    
//     start() {
//         this.startBtn.setAttribute("disabled", true);
//         this.startBtn.addEventListener('click', this.convertMs)
//         this.timerSet.addEventListener('input', this.calcMs)
//     }
        
//     date = new Date()
    
//     options = {
//         enableTime: true,
//         time_24hr: true,
//         defaultDate: new Date(),
//         minuteIncrement: 1,
//         onClose(selectedDates) {
//           console.log(selectedDates[0]);
//           if (selectedDates[0].getTime() > this.date.getTime()) {
//             this.startBtn.removeAttribute("disabled");
//           } else {
//             this.startBtn.setAttribute("disabled", true);
//             window.alert("Please choose a date in the future");
//             }
//         },
//     };
    
//     timer = flatpickr(this.timerSet, this.options);
    
//     calcMs(event) {
//         const pickTime = new Date(event.currentTarget.value)
//         console.log(pickTime.getTime())
    
//         const ms = pickTime.getTime() - this.date.getTime();
//         console.log(ms);
//         return ms
//     }
    
//     convertMs(ms) {
//         // Number of milliseconds per unit of time
//         const second = 1000;
//         const minute = second * 60;
//         const hour = minute * 60;
//         const day = hour * 24;
      
//         // Remaining days
//         const days = Math.floor(ms / day);
//         // Remaining hours
//         const hours = Math.floor((ms % day) / hour);
//         // Remaining minutes
//         const minutes = Math.floor(((ms % day) % hour) / minute);
//         // Remaining seconds
//         const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
//         return { days, hours, minutes, seconds };
//       }
      
    


    
// }


// new NewTimer().start()