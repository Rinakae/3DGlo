const firstScreen = () => {
  const form1Name = document.querySelector("#form1-name");
  const form1Email = document.querySelector("#form1-email");
  const form1Phone = document.querySelector("#form1-phone");

  form1Name.addEventListener("input", (event) => {
    event.preventDefault();

    if (event.target.value.match(/[^а-яА-Я-\s]/g)) {
      alert("Введите имя используя кириллицу");
      form1Name.value = "";
      return false;
    } 
  });
  
  form1Email.addEventListener("input", (event) => {
    event.preventDefault();
    
    let reg = /^\w+([\.\~\!\*\'-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (event.target.value.match(reg)) {
      form1Email.style.color = "green";       
    } else {
      form1Email.style.color = "red";      
    }

  });
  
  form1Phone.addEventListener("input", (event) => {
    event.preventDefault();
       
    if (event.target.value.match(/[^\d\()\-]/g)) {
      alert("Введите номер телефона в формате 8(02)111-22-33");
      form1Phone.value = "";
      return false;
    } 
  });
  
};

export default firstScreen;