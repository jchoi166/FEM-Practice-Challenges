console.log("hello world")

document.querySelectorAll('.accordion__question').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling

        button.classList.toggle('accordion__question--active')
        // accordionContent.classList.toggle('accordion__answer--active')

        if (button.classList.contains('accordion__question--active')) {
            accordionContent.style.height = (accordionContent.scrollHeight + 10) + 'px';
        } else {
            accordionContent.style.height = 0
        }
    })
})