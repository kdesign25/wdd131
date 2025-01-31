const themeSelector = document.querySelector('#theme-select');
function changeTheme() {
console.log(themeSelector.value)
console.log(themeSelector)
var body = document.querySelector("body");
if (themeSelector.value === 'dark'){
  body.classList.add("dark");
  
}
else  {
body.classList.remove('dark');

}

}
themeSelector.addEventListener('change', changeTheme);
