document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging step

    let menuToggle = document.querySelector(".menu-toggle");
    let navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        console.log("Menu Toggle and Nav Links Found!"); // Debugging step

        menuToggle.addEventListener("click", function () {
            console.log("Hamburger Clicked!"); // Debugging step
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or nav links NOT found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});











let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to show a specific slide
function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });

    currentIndex = index;
}

// Automatically cycle through slides
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); // Change slide every 5 seconds

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Initialize the slider by showing the first slide
showSlide(currentIndex);
