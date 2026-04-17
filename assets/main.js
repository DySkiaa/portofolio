// scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < trigger) {
            card.classList.add('show');
        }
    });
});

// navbar toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});