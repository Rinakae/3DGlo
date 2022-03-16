const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  //const closeBtn = menu.querySelector(".close-btn");
  //const menuItems = menu.querySelectorAll("ul>li>a");
  const serviceBlockBtn = document.querySelector('a[href^="#service-block"');
  
  const toggleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", toggleMenu);

  menu.addEventListener("click", (e) => {

    if (e.target.classList.contains('close-btn')) {
      e.preventDefault();
      menu.classList.toggle('active-menu');
    }

    if (e.target.closest('ul>li>a')) {
      e.preventDefault();      
      const anchor = e.target.getAttribute('href');        
      document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      toggleMenu();
    }

  });

  serviceBlockBtn.addEventListener("click", (event) => {
    event.preventDefault();    
    document.querySelector("#service-block").scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });

};

export default menu;

/*
  
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleMenu();
  } );

  menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
      handleMenu();

      event.preventDefault();      
        
        });

    });

  });
*/  