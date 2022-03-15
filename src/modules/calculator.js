const calculator = () => {
  const calcItem = document.querySelectorAll(".calc-item:nth-child(n + 2)");  

  calcItem.forEach(item => {
    item.addEventListener("input", (event) => {
      event.preventDefault();

      if (!event.target.value.match(/^\d+$/)) {
        alert("Введите, пожалуйста, числовое значение");
        item.value = "";
        return false;
      } 
    });
  });

};

export default calculator;