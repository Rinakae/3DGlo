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
  
  const validInputs = (input) => {
    if ((input.name === "user_name" && input.value.length > 2)
        || (input.name === "user_email" && input.value !== "")
        || (input.name === "user_phone" && (input.value.length > 6) && (input.value.length < 16))
        || (input.name === "user_message" && /([^а-яё\s\d\,\.\"\?\!\:\;\-\)\(]*)$/.test(input.value))) {
          input.classList.add ("success");
          console.log (input.classList);
    } else {
      statusBlock.textContent = errorText;
    }
  };

  const validate = (list) => {
    let success = true; 
    
    list.forEach(input => {

      validInputs(input);

      if (!input.classList.contains("success")) {
        redBorder(input);
        success = false;
      }
    });
    return success;
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
/////////////////
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