'use strict';

const downArrow = document.querySelector('.down');
const upArrow = document.querySelector('.up');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

let sessionLengthDisplay = document.querySelector('.length');
let timeLeftDisplay = document.querySelector('.timer');


function stopTimer() {

}



function timeDisplay(seconds) {
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);
  return `${minute}:${second < 10 ? 0 : ''}${second}`
}


function minuteConverter(minutes) {
  const display = `${minutes}:00`;
  timeLeftDisplay.textContent = display;
}


downArrow.addEventListener('click', () => {
  sessionLengthDisplay.textContent = parseInt(sessionLengthDisplay.textContent) - 1;
  minuteConverter(parseInt(sessionLengthDisplay.textContent));
});

upArrow.addEventListener('click', () => {
  sessionLengthDisplay.textContent = parseInt(sessionLengthDisplay.textContent) + 1;
  minuteConverter(parseInt(sessionLengthDisplay.textContent));
});


play.addEventListener('click', () => {
  let countdown = parseInt(sessionLengthDisplay.textContent);

  // clear any existing timers
  clearInterval(countdown);

  let secondsLeft = Math.round((countdown * 60));

  countdown = setInterval(() => {
    secondsLeft--;
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    timeLeftDisplay.textContent = timeDisplay(secondsLeft);
  }, 1000);
});


// pause.addEventListener('click', stopTimer());




// function displayTimeLeft(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;
//   const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
//   document.title = display;
//   timerDisplay.textContent = display;
// }

// function startTimer() {

//   // clear any existing timers
//   // clearInterval(countdown);

//   let secondsLeft = Math.round((countdown * 60));

//   setInterval(() => {
//     secondsLeft--;
//     // check if we should stop it!
//     if (secondsLeft < 0) {
//       clearInterval(countdown);
//       return;
//     }
//     // display it
//     console.log(secondsLeft);
//   }, 1000);
// }