const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  let idInterval;
  let stop = modal.style.transform;
  const animate = () => {
    idInterval = requestAnimationFrame(animate);
   // modal.style.display = "block";
    if (stop) {
      modal.style.transform = "translateX(100%)";
    } else {
      cancelAnimationFrame(idInterval);
    }    
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      modal.style.display = "block";
      e.preventDefault();
      idInterval = requestAnimationFrame(animate);
    });
  });
  /*
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";          
    });
  });
*/
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";    
  });  

};

export default modal;
