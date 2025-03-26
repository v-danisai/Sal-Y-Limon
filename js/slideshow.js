let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Auto-slide every 5 seconds (optional)
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

// Pause on hover (optional)
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
slideshowContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
});

