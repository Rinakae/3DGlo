const modal = () => {
  
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");

  let idInterval;
  let count = 0;  

  const animate = () => {    
    count = count + 0.5;
    idInterval = requestAnimationFrame(animate);

    if (count < 10) {
      popupContent.style.transform = "translateY("+count +"%)";
      
    } else {
      count = 0;
      cancelAnimationFrame(idInterval);
    }   
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      let width = document.documentElement.clientWidth;            
      if (width < 767) {
        cancelAnimationFrame(idInterval);
      } else {
        animate();
      }

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
