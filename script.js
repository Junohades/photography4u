// ==== Background slideshow on scroll ====
const slideshowSection = document.querySelector('.slideshow-section');

// Array of background images
const images = [
    'images/Slideshow/img1.jpg',
    'images/Slideshow/img2.jpg',
    'images/Slideshow/img3.jpg',
    'images/Slideshow/img4.jpg'
    'images/Slideshow/img5.jpg'
    'images/Slideshow/img6.jpg'
    'images/Slideshow/img7.jpg'
    'images/Slideshow/img8.jpg'
];

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


