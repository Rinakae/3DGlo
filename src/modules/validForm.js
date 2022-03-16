const validForm = () => {
  
  const formName = document.querySelectorAll(".form-name");
  const formEmail = document.querySelectorAll(".form-email");
  const formPhone = document.querySelectorAll(".form-phone");
  
  formName.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^а-яА-Я-\s]/g, "");      
    });
  });

  formEmail.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^\w\@\_\.\!\~\*\'-]/g, "");      
    });
  });

  formPhone.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      event.target.value = event.target.value.replace(/[^\d\()\-]/g, "");      
    });
  });
    
};

export default validForm;