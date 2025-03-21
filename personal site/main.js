document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        if (navLinks.classList.contains("active")) {
            navLinks.style.opacity = "0"; // Fade out before hiding
            setTimeout(() => {
                navLinks.classList.remove("active");
            }, 300); // Match transition duration
        } else {
            navLinks.classList.add("active");
            setTimeout(() => {
                navLinks.style.opacity = "1";
            }, 10); // Small delay for smoother effect
        }
    });
});
