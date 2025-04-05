// Menu toggle
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('hide');
}

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

handleResize();
window.addEventListener('resize', handleResize);
menuButton.onclick = toggleMenu;






// Modal viewer for images
const viewer = document.querySelector('.viewer');
const viewerImage = viewer.querySelector('img');
const closeBtn = viewer.querySelector('.close-viewer');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    viewerImage.src = img.src;
    viewer.classList.remove('hide');
  });
});

closeBtn.addEventListener('click', () => {
  viewer.classList.add('hide');
});

viewer.addEventListener('click', (e) => {
  if (e.target === viewer) {
    viewer.classList.add('hide');
  }
});
