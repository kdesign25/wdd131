function toggleMenu() {
    let items = document.querySelectorAll(".menu-item");
    items.forEach(item => {
      item.style.display = (item.style.display === "none" || item.style.display === "") ? "block" : "none";
    });
  }
  menuButton.classList.add('hide')
  