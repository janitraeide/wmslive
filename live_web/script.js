// Remove existing smooth scroll implementation and replace with:

// Initialize Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2, // Adjust scroll speed (seconds)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    touchMultiplier: 2.5, // Adjust mobile scroll speed
});

// Handle anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'), {
            offset: 0 // Adjust if you need spacing from top
        });
    });
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// image paralax effect
const images = document.querySelectorAll('img[data-parallax]'); // Changed to data attribute

images.forEach(image => {
    gsap.set(image, {y:-100})
    gsap.to(image, {
        y:0,
        scrollTrigger: {
            trigger: image,
            scrub: true,
            start: 'top bottom',
            end: 'bottom -200%',
        },
    })
});

// Counter animation for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = Math.floor(current) + '+';
    }, 20);
}
// Trigger counter animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.number');
            numbers.forEach(number => {
                const target = parseInt(number.textContent);
                animateCounter(number, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Partner Carousel - Updated Logic
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let isTransitioning = false;

// Clone first and last slides for proper infinite loop
const slides = document.querySelectorAll('.carousel-slide'); // Move this line after cloning
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

let currentIndex = 1; // Single declaration here

function updateCarousel(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    track.style.transition = 'transform 0.5s ease-in-out';
    direction === 'next' ? currentIndex++ : currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function handleTransitionEnd() {
    // Handle right overflow (clone)
    if (currentIndex >= track.children.length - 1) {
        track.style.transition = 'none';
        currentIndex = 1;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    // Handle left overflow (clone)
    else if (currentIndex <= 0) {
        track.style.transition = 'none';
        currentIndex = track.children.length - 2;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    isTransitioning = false;
}

nextButton.addEventListener('click', () => {
    updateCarousel('next');
});

prevButton.addEventListener('click', () => {
    updateCarousel('prev');
});

track.addEventListener('transitionend', handleTransitionEnd);

// Auto-rotate with direction awareness
setInterval(() => {
    updateCarousel('next');
}, 5000);

// Add touch detection
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) updateCarousel('next');
    if (touchEndX - touchStartX > 50) updateCarousel('prev');
});

// Add window resize handler
window.addEventListener('resize', () => {
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});


// Language switching functionality is now handled in translations.js
