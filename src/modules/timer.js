const timer = (deadLine) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
	
  const getTimerRmaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    
    let hours = Math.floor((timeRemaining / 60 / 60));
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    
    return { timeRemaining, hours, minutes, seconds };
    /*
    {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
    */
  };

  const updateclock = () => {
    let getTime = getTimerRmaining();
    
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining > 0) {
      setTimeout(updateclock, 1000);
    }
    
  };
  updateclock();
  
}; 

export default timer;

