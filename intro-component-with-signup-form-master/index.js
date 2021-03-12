console.log('im here')

const button = document.querySelector(".form-button")
const form = document.querySelector(".form")

const fname = document.getElementById("fname")
const fnameError = document.querySelector("#fname + span")

const lname = document.getElementById("lname")
const lnameError = document.querySelector("#lname + span")

const email = document.getElementById("email")
const emailError = document.querySelector("#email + span")

const pword = document.getElementById("pword")
const pwordError = document.querySelector("#pword + span")

const inputList = document.getElementsByTagName("input")

console.log(inputList)

form.addEventListener("submit", () => {
    event.preventDefault()
    console.log("its working!")

    // if (fname.validity.valueMissing) {
    //     fnameError.textContent = "* Please type in your name"
    //     // fname.value = "Please type in your name"
    // } 
    
})