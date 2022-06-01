let accordion = document.querySelector('.accordion')
let accordionWrapper = document.querySelector('.accordion-wrapper')

accordionWrapper.addEventListener('click', () => {
    accordion.classList.toggle('active')
})