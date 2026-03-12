const track = document.getElementById('sliderTrack');
const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 3;

function getOffset() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        // Desktop: slider-track uses justify-content:center, so no translateX needed
        return 0;
    }

    // Mobile: card width 220px, margin 0 -60px on each side → effective step = 100px
    const trackWidth = track.parentElement.offsetWidth;
    const center = trackWidth / 2;
    const cardWidth = 220;
    const cardMargin = -60; // each side
    const effectiveStep = cardWidth + cardMargin * 2; // 100px
    const activeCardCenter = currentIndex * effectiveStep + cardWidth / 2;
    return center - activeCardCenter;
}

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

    track.style.transform = `translateX(${getOffset()}px)`;
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
const SWIPE_THRESHOLD = 40;

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

// Re-calculate offset on window resize / screen rotation
window.addEventListener('resize', () => {
    updateSlider();
});

updateSlider();


// ── Auth Nav ──────────────────────────────────────────────────────
function updateAuthNav() {
    const loggedIn = localStorage.getItem('ms_logged_in') === 'true';
    document.getElementById('nav-login').style.display = loggedIn ? 'none' : 'inline-block';
    document.getElementById('nav-logout').style.display = loggedIn ? 'inline-block' : 'none';
}
function handleLogout() {
    localStorage.removeItem('ms_logged_in');
    localStorage.removeItem('ms_user_email');
    updateAuthNav();
}
updateAuthNav();

function toggleMenu() {
    const nav = document.querySelector('.nav-anim');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
}
document.querySelectorAll('.nav-anim a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-anim').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('open');
        }
    });
});
