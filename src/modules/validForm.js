const validForm = () => {
  
  const formName = document.querySelectorAll(".form-name");
  const formEmail = document.querySelectorAll(".form-email");
  const formPhone = document.querySelectorAll(".form-phone");
  
  formName.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();

      if (event.target.value.match(/[^а-яА-Я-\s]/g)) {
        alert("Введите имя используя кириллицу");
        input.value = "";
        return false;
      } 
    });
  });

  formEmail.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      
      let reg = /^\w+([\.\~\!\*\'-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (event.target.value.match(reg)) {
        input.style.color = "green";       
      } else {
        input.style.color = "red";      
      }

    });
  });

  formPhone.forEach(input => {
    input.addEventListener("input", (event) => {
      event.preventDefault();
        
      if (event.target.value.match(/[^\d\()\-]/g)) {
        alert("Введите номер телефона в формате 8(02)111-22-33");
        input.value = "";
        return false;
      } 

    });
  });
    
};

export default validForm;