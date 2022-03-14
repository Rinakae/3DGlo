const calculator = () => {
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");

  calcSquare.addEventListener("input", (event) => {
    event.preventDefault();

    if (!event.target.value.match(/^\d+$/)) {
      alert("Введите, пожалуйста, числовое значение");
      calcSquare.value = "";
      return false;
    } 
  });

  calcCount.addEventListener("input", (event) => {
    event.preventDefault();

    if (!event.target.value.match(/^\d+$/)) {
      alert("Введите, пожалуйста, числовое значение");
      calcCount.value = "";
      return false;
    } 
  });

  calcDay.addEventListener("input", (event) => {
    event.preventDefault();

    if (!event.target.value.match(/^\d+$/)) {
      alert("Введите, пожалуйста, числовое значение");
      calcDay.value = "";
      return false;
    } 
  });
   
};

export default calculator;