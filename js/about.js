//about.html
var swiper = new Swiper(".mySwiper", {
    effect: "slide",
    loop: true,
    spaceBetween: 30,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const carousel = document.querySelector(".carousel");

let angle = 0;

setInterval(() => {
  angle += 0.3;
  carousel.style.transform = `rotateY(${angle}deg)`;
}, 30);



function toggleMenu() {
    const nav = document.querySelector('.nav-anim');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
}
// Close nav when a link is clicked on mobile
const links = document.querySelectorAll('.nav-anim a');
const span = document.querySelector('.nav-anim span');
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Desktop: move the highlight span
        if (span) {
            span.style.top = `${index * 50}px`;
        }
        // Mobile: close the menu
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-anim').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('open');
        }
    });
});