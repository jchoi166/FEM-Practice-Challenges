import "../sass/index.scss"

console.log('its not working?')

const navLinks = document.querySelector(".nav-bar__links") 
const navHam = document.querySelector(".nav-bar__collapsed") 

navHam.addEventListener("click", () => {
    navLinks.classList.toggle("mobile")
})

