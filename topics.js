const track = document.getElementById('sliderTrack');
const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 3; 

function updateSlider() {
    cards.forEach((card, index) => {
        
        card.classList.remove('active', 'right-side');
        
        if (index === currentIndex) {
            card.classList.add('active');
            card.style.zIndex = "100";
        } else {
            if (index > currentIndex) {
                card.classList.add('right-side');
                card.style.zIndex = 100 - index;
            } else {
                card.style.zIndex = index;
            }
        }
    });

    const offset = (currentIndex - Math.floor(cards.length / 2)) * -60;
    track.style.transform = `translateX(${offset}px)`;
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

updateSlider();

