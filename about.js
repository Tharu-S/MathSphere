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
