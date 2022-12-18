import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


// const label = document.querySelectorAll('.label')

// // const valueOfLabel = label.textContent.toUpperCase();
// // label.textContent = valueOfLabel;

const input = document.querySelector('#datetime-picker')

const btnStart = document.querySelector('[data-start]');

const refs = {
  days: document.querySelector('.timer [data-days]'),
  hours: document.querySelector('.timer [data-hours]'),
  minutes: document.querySelector('.timer [data-minutes]'),
  seconds: document.querySelector('.timer [data-seconds]'),
};

// -----
const changesOfButton = {
btnIsNotActive() {
    btnStart.setAttribute("disabled", "disabled");
},
 btnIsActive() {
    btnStart.removeAttribute("disabled")
},
}
changesOfButton.btnIsNotActive(); 
// --


  let timeOutId = null;
// -----
const options = {
  enableTime: true,
  time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  
  onClose(selectedDates) {

      let dateNow = Date.now();
      let userDate = selectedDates[0].getTime();
    //   let deltaTime = userDate - dateNow;
      
      if (userDate <= dateNow) {
        // window.alert("Please choose a date in the future")
        Notiflix.Report.failure('',"Please choose a date in the future");
      }
      else {
        changesOfButton.btnIsActive();
        
        btnStart.addEventListener('click', () => {

          changesOfButton.btnIsNotActive();
          
          timeOutId = setInterval(() => {
            let diffBetwenOfDays;
            let currentTime = Date.now();
            diffBetwenOfDays = userDate - currentTime;
            console.log('Відлік почався');

if (diffBetwenOfDays < 1000 ) { 
   clearInterval(timeOutId)
          } 

  let { days, hours, minutes, seconds } = (convertMs(diffBetwenOfDays));
            updateContent(days, hours, minutes, seconds)
            console.log(`${days} days :: ${hours} hours:: ${minutes} min:: ${seconds}sec`);
          }, 1000);
          
          
          })
    }
  },
};

flatpickr('#datetime-picker', options);
// const fp = flatpickr('#datetime-picker', options);

function convertMs(ms) {
//   Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return {
    days: days === 0 ? '00' : days < 10 ? addLeadingZero(days) : days,
    hours,
    minutes,
    seconds
  };
}

function addLeadingZero(value) {
return String(value).padStart(2, '0')
}


function updateContent(days, hours, minutes, seconds) {

  refs.days.textContent = days;
refs.hours.textContent = hours;
refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds; 
};

