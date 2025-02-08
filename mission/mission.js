const themeSelector = document.querySelector('#theme-select');
const body = document.querySelector("body");
const img  = document.querySelector("img#logo");

function changeTheme() {
    if (themeSelector.value === 'dark'){
        body.classList.add("dark");
        img.src = "byui-logo_white.png"
    } else  {
        body.classList.remove('dark');
        img.src = "byui-logo_blue.webp"
    }
}
themeSelector.addEventListener('change', changeTheme);
