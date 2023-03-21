import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector("input#datetime-picker");
const btnEl = document.querySelector("button[data-start]");
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) { 
            window.alert("Please choose a date in the future")
        } 
        btnEl.disabled = false;
        console.log(selectedDates[0]);

  },
};
flatpickr(inputEl, options);



btnEl.disabled = true;

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
    const selectedTime = Date.now();
    console.log(selectedTime)

    timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectedTime - currentTime;
        console.log(deltaTime)
    }, 1000)
}


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