const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('.menu');

function toggleMenu() { 
  if (menu.classList.contains("hide")){
    menu.classList.remove('hide')
  } else {
    menu.classList.add('hide')
  } 
}
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

menuButton.onclick = toggleMenu;


ESTO ES COPIADO

document.getElementById("menuButton").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("hidden");
});


