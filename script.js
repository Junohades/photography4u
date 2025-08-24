// ==== Background slideshow with crossfade ====
const slideshowSection = document.querySelector('.slideshow-section');

const images = [
    'images/slideshow/img1.jpg',
    'images/slideshow/img2.jpg',
    'images/slideshow/img3.jpg',
    'images/slideshow/img4.jpg',
    'images/slideshow/img5.jpg',
    'images/slideshow/img6.jpg',
    'images/slideshow/img7.jpg',
    'images/slideshow/img8.jpg'
];

let currentIndex = 0;

// Create an overlay div for fade effect
const bgLayer = document.createElement('div');
bgLayer.classList.add('bg-layer');
slideshowSection.appendChild(bgLayer);

// Function to change background
function changeBackground() {
    bgLayer.style.backgroundImage = `url('${images[currentIndex]}')`;
    bgLayer.classList.remove('fade-in');
    void bgLayer.offsetWidth; // re-trigger animation
    bgLayer.classList.add('fade-in');
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial call
changeBackground();

// Change every 5s
setInterval(changeBackground, 5000);


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

