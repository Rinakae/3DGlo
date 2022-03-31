"use strict";

const sendForm = ({ formId, someElem = []} ) => {

  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо наш менеджер свяжется с вами!";


  function redBorder(element){
            element.style.border = '2px solid red';
            setTimeout(() => {
                element.style.border = '';
            }, 2000);
  }
  
  const validate = (list) => {
    let success = true; 

    list.forEach(input =>{

      switch(input.name) {
        case 'user_email':
          if (!input.hasAttribute("required")) {
            input.required = true;
            redBorder(input);          
            success = false;
            break;
          }             

        case 'user_name':
          if (input.value.length < 2) {
            redBorder(input);                   
            success = false;
          }

        case 'user_phone':
          if (6 > input.value.length < 16) {
            redBorder(input);                   
            success = false;
          }

        case 'user_message':
          input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я]+[\s]+[\d]+[\S]/g, '');
            redBorder(input);                   
            success = false;
        });
      }
      
   return success;
       
  });
};

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });                 
        
        
    } else {
      
      alert('Данные не валидны!!!');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму пожалуйста!!');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      //validate();
      submitForm();
    });
  } catch (error) {
    console.log(error.massage);
  }

};

export default sendForm;