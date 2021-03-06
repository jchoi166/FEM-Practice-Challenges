import "../sass/index.scss"

console.log('its not working?')


// Navbar functionality 

const navLinks = document.querySelector(".nav-bar__links") 
const navHam = document.querySelector(".nav-bar__collapsed") 

navHam.addEventListener("click", () => {
    navLinks.classList.toggle("mobile")
    // body.style.overflow = "hidden"
    // document.body.classList.toggle("body-mobile")
    
})

