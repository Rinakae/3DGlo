const getDate = () => {
  const goodDay = document.getElementById("good-day");
  const todayDay = document.getElementById("today-day");
  const todayTime = document.getElementById("today-time");
  const newYear = document.getElementById("new-year");

  let timerID = null;
  let timerIDYear = null;

  const getDateValue = () => {

    let h = new Date().getHours();
    
    if (h <= 6) {
      goodDay.textContent = "Доброй ночи";
    } else if (h <= 11) {
      goodDay.textContent = "Доброе утро";
    } else if (h <= 18) {
      goodDay.textContent = "Добрый день";
    } else {
      goodDay.textContent = "Добрый вечер";
    }

  };

  const getDayToday = () => {
    const week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    let day = new Date().getDay();
    let dayToday = week[day];
    
    todayDay.textContent = `Сегодня: ${dayToday}`;
  };

  const getTimeNow = () => {
    let date = new Date();
        
    let options = {       
      timezone: "UTC",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };

    let clock = date.toLocaleString("en-US", options);
    
    todayTime.textContent = `Текущее время: ${clock}`;
  };

  const getNewYear = () => {
    let dateStop = new Date("1 january 2023").getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let newYDays = Math.floor((timeRemaining / 60 / 60) / 24);

    newYear.textContent = `До нового года осталось ${newYDays} дней`;
  };

  getDateValue();
  getDayToday();
  getTimeNow();
  timerID = setInterval(getTimeNow, 1000);
  getNewYear();
  timerIDYear = setInterval(getNewYear, 86400 * 1000);

};

getDate();