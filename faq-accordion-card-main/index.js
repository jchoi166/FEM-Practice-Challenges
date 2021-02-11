console.log("hello world")

document.querySelectorAll('.accordion__question').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling

        button.classList.toggle('accordion__question--active')

        if (button.classList.contains('accordion__question--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0
        }
    })
})