"use strict";

import { animate } from "./helpers";

const modal = () => {
  
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");

  let width = document.documentElement.clientWidth; 
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';      

      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.top = (progress * 10) + '%';
        }
      });
    });    
  });

  if (width < 767) {
    cancelAnimationFrame(animate);
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";    
  }); 
  
};

export default modal;

//let idInterval;
  //let count = 0;  
/*
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
---------------------------------
let width = document.documentElement.clientWidth;            
      if (width < 767) {
        cancelAnimationFrame(idInterval);
      } 
---------------------------------------
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";          
    });
  });
  */