const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const serviceBlockBtn = document.querySelector('a[href^="#service-block"');
  
  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);

  //menuItems.forEach(menuItem => menuItem.addEventListener("click", handleMenu));

  menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
      handleMenu();

      event.preventDefault();      
        const anchor = menuItem.getAttribute('href');

        document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

    });

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