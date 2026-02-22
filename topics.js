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

    const isMobile = window.innerWidth <= 768;
    const offsetMultiplier = isMobile ? -30 : -60;
    const offset = (currentIndex - Math.floor(cards.length / 2)) * offsetMultiplier;
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

// ── Touch / Swipe Support ──────────────────────────────────────────
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 40; // minimum px distance to count as a swipe

track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0 && currentIndex < cards.length - 1) {
            // Swiped left → next card
            currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
            // Swiped right → previous card
            currentIndex--;
        }
        updateSlider();
    }
}, { passive: true });

// Re-calculate offset on window resize (handles rotation)
window.addEventListener('resize', () => {
    updateSlider();
});

updateSlider();
