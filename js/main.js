const navTrigger = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu')
const navBtn = document.querySelector('.nav_btn')

navTrigger.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav-is-open')
})

navBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav-is-open')
})


const mainButton = document.querySelector('#main_button');
const navButton = document.querySelector('#nav_button');

function toggleButtonVisibility() {
    if (window.innerWidth >= 960) { // lg breakpoint
        mainButton.classList.remove('hidden');
        navButton.classList.add('hidden');
    } else {
        mainButton.classList.add('hidden');
        navButton.classList.remove('hidden');
    }
}

toggleButtonVisibility();
window.addEventListener('resize', toggleButtonVisibility);

//swiper

// const swiper = new Swiper('.swiper', {
//     loop:true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     //breakpoints
//     slidesPerView: 3,
//     spaceBetween: 20,
//     breakpoints: {
//         320:{
//             slidesPerView: 1,
//         },
//         960:{
//             slidesPerView: 2,
//         },
//         1200:{
//             slidesPerView: 3,
//         },
//     }
// })

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000, 
    delay:100,
});

sr.reveal('.hero__text', {origin: 'top'})

sr.reveal('.step__title')
sr.reveal('.steps__step', {distance: '100px', interval: 100, delay: 100})

sr.reveal('.about__text', {origin:'left'})
sr.reveal('.about__img', {origin:'right', delay:100})

sr.reveal('.testimonial__title')
sr.reveal('.testimonial__bg', {delay:100})
sr.reveal('.testimonial__slider', {delay:200})


sr.reveal('.work__title')
sr.reveal('.work__subtitle', {delay:100})
sr.reveal('.work__grid', {delay:200})

sr.reveal('.stats')
sr.reveal('.stats__items', {distance: '100px', interval: 100})

sr.reveal('.news__title')
sr.reveal('.news__subtitle', {delay:100})
sr.reveal('.news__item', {distance:'100px', interval: 100, delay: 200})

sr.reveal('.tim__title')
sr.reveal('.tim__subtitle', {delay:100})
sr.reveal('.tim__item', {distance:'100px', interval: 100, delay: 200})

sr.reveal('.contact__container')
sr.reveal('.contact__text', {delay:100})

sr.reveal('.footer__item', {interval:100, distance: '100px'})
sr.reveal('.footer__copyright')