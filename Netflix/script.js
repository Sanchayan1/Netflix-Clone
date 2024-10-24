// script.js
// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to hero button
document.querySelector('.hero-content button').addEventListener('click', () => {
    // Add functionality for the "Join Free for a Month" button
    alert('Join Free for a Month button clicked!');
});

// Add event listeners to featured items
document.querySelectorAll('.featured-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add functionality for the featured item click
        alert('Featured item clicked!');
    });
});

// Add event listener to footer
document.querySelector('footer').addEventListener('click', () => {
    // Add functionality for the footer click
    alert('Footer clicked!');
});

// Add functionality for scrolling to top
document.querySelector('.hero-content').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add functionality for responsive navigation
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

// Add functionality for modal windows (e.g. for login or signup)
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalWindows = document.querySelectorAll('.modal-window');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalWindow = document.querySelector(`#${trigger.getAttribute('data-modal')}`);
        modalWindow.classList.add('modal-open');
    });
});

modalWindows.forEach(modal => {
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.classList.remove('modal-open');
        }
    });
});

// Add functionality for carousel (e.g. for featured section)
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let carouselIndex = 0;

carouselPrev.addEventListener('click', () => {
    carouselIndex--;
    if (carouselIndex < 0) {
        carouselIndex = carouselItems.length - 1;
    }
    updateCarousel();
});

carouselNext.addEventListener('click', () => {
    carouselIndex++;
    if (carouselIndex >= carouselItems.length) {
        carouselIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });
    carouselItems[carouselIndex].classList.add('active');
}

// Initialize carousel
updateCarousel();