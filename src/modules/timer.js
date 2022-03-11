const timer = (deadLine) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
	let timerId = null;

  const getTimerRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    
    let hours = Math.floor(timeRemaining / 60 / 60);
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
    let getTime = getTimerRemaining();
    
    timerHours.textContent = ("0" + getTime.hours.toString()).slice(-2);
    timerMinutes.textContent = ("0" + getTime.minutes.toString()).slice(-2);
    timerSeconds.textContent = ("0" + getTime.seconds.toString()).slice(-2);

    if (getTime.timeRemaining <= 0) {
      clearInterval(timerId);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
    
  };
  updateclock();
  timerId = setInterval(updateclock, 1000);
  
}; 

export default timer;

