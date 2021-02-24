console.log("hello world")

const questionList = document.querySelectorAll('.accordion__question')

questionList.forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling

        button.classList.toggle('accordion__question--active')
        // accordionContent.classList.toggle('accordion__answer--active')

        if (button.classList.contains('accordion__question--active')) {
            accordionContent.style.height = (accordionContent.scrollHeight + 10) + 'px';
            button.children[0].style.transform = "rotate(180deg)"
        } else {
            accordionContent.style.height = 0
            button.children[0].style.transform = "rotate(0deg)"

        }
    })
})