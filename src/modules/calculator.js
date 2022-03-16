const calculator = () => {
  const calcItem = document.querySelectorAll(".calc-item:nth-child(n + 2)");  

  calcItem.forEach(item => {
    item.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^\d]/g, "");
    });
  });

};

export default calculator;