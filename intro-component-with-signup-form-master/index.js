console.log('im here')

const form = document.querySelector(".form")

const email = document.getElementById("email")
const emailError = document.querySelector("#email + span")

const listItems = document.querySelectorAll("ul li")

console.log(listItems)
console.log(fname)

form.addEventListener("submit", () => {
    event.preventDefault()
    console.log("its working!")

    let canSubmit = true

    for (let item of listItems) {
        let listItem = item.children[0]
        let errorField = item.children[1]
        if (listItem.tagName === "BUTTON") {
            break
        }
        if (listItem.validity.valueMissing) {
            errorField.textContent += `* Please type in your ${listItem.placeholder}`
            canSubmit = false
        }
    }

    if (email.validity.typeMismatch) {
        emailError.textContent = "* Please type in a valid email address!"
        canSubmit = false
    }
    console.log('fuk')

    if (canSubmit) {
        window.alert('Form Submitted!')
        for (let item of listItems) {
            item.children[0].value = ''
        }
    }
    
})

form.addEventListener("input", event => {
    event.target.nextElementSibling.innerText = ''
})
