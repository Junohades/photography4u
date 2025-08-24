// ==== Dynamic Background Slideshow with Fade ====
const slides = [
    'images/slideshow/img1.jpg',
    'images/slideshow/img2.jpg',
    'images/slideshow/img3.jpg',
    'images/slideshow/img4.jpg',
    'images/slideshow/img5.jpg',
    'images/slideshow/img6.jpg',
    'images/slideshow/img7.jpg',
    'images/slideshow/img8.jpg'
];

let current = 0;

const bgCurrent = document.querySelector('.slideshow-bg');
const bgNext = document.querySelector('.slideshow-bg-next');

// Initialize
bgCurrent.style.backgroundImage = `url('${slides[current]}')`;

function changeSlide() {
    // Pick next index
    const nextIndex = (current + 1) % slides.length;

    // Set next background
    bgNext.style.backgroundImage = `url('${slides[nextIndex]}')`;
    bgNext.style.opacity = 1;

    // Fade transition
    setTimeout(() => {
        bgCurrent.style.backgroundImage = `url('${slides[nextIndex]}')`;
        bgNext.style.opacity = 0;
        current = nextIndex;
    }, 1000); // matches CSS transition
}

// Start slideshow
setInterval(changeSlide, 5000);


let lastIndex = -1;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / docHeight;

    const index = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
    );

    if (index !== lastIndex) {
        slideshowSection.style.backgroundImage = `linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
        ), url('${images[index]}')`;
        lastIndex = index;
    }
});

// ==== Return-to-top button ====
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==== Smooth scroll for anchor links ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});





