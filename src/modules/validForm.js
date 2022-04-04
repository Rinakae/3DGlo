const validForm = () => {
  
  const formName = document.querySelectorAll(".form-name");
  const formEmail = document.querySelectorAll(".form-email");
  const formPhone = document.querySelectorAll(".form-phone"); 
  const form2Message = document.querySelector(".mess"); 
  
  formName.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^а-яА-Я-\s]/g, "");      
    });
  });

  formEmail.forEach(input => {
    //input.required = true;
    input.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^\w\@\_\.\!\~\*\'-]/g, "");      
    });
  });

  formPhone.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^\d\()\+\-]/g, "");      
    });
  });
   
  form2Message.addEventListener("input", (event) => {
    event.preventDefault();
    event.target.value = event.target.value.replace(/([^а-яё\s\d\,\.\"\?\!\:\;\-\)\(]*)/g, "");
  });
    
};

export default validForm;