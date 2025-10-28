const slider = document.querySelector('.slider');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const cardWidth = 320; // width (300px) + margin (10px * 2)
let currentIndex = 0; // which "set" of cards is visible

const totalCards = document.querySelectorAll('.card').length;
const visibleCards = Math.floor(document.querySelector('.slider-container').offsetWidth / cardWidth);
const maxIndex = totalCards - visibleCards;

// move slider to current index
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// right arrow
rightBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});

// left arrow
leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});
// =====================
// SECOND SLIDER (AUTO)
// =====================
const slider2 = document.querySelector('.slider2');
const leftBtn2 = document.getElementById('leftBtn2');
const rightBtn2 = document.getElementById('rightBtn2');

const cardWidth2 = 320;
let currentIndex2 = 0;

const totalCards2 = slider2.querySelectorAll('.card').length;
const visibleCards2 = Math.floor(document.querySelector('.slider-container2').offsetWidth / cardWidth2);
const maxIndex2 = totalCards2 - visibleCards2;

// move slider 2
function updateSlider2() {
    slider2.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
}

// auto-slide every 2 seconds
setInterval(() => {
    currentIndex2++;
    if (currentIndex2 > maxIndex2) currentIndex2 = 0; // reset to start
    updateSlider2();
}, 2000);

// manual control (optional)
rightBtn2.addEventListener('click', () => {
    currentIndex2++;
    if (currentIndex2 > maxIndex2) currentIndex2 = 0;
    updateSlider2();
});

leftBtn2.addEventListener('click', () => {
    currentIndex2--;
    if (currentIndex2 < 0) currentIndex2 = maxIndex2;
    updateSlider2();
});
