const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('.menu');

function toggleMenu() { 
  console.log("hello")
    if (menu.classList.contains("hide")){
      menu.classList.remove('hide')
    } else {
      menu.classList.add('hide')
    } 
  }
menuButton.onclick = toggleMenu;
