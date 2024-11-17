'use strict';

// set current year
document.querySelector(
  '.current-year'
).textContent = `${new Date().getFullYear()}`;

// Mobile navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Close mobile navigation
const allLinks = document.querySelectorAll('.main-nav-link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    headerEl.classList.remove('nav-open');
  });
});

// Sticky navigation

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    else document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(document.querySelector('.section-hero'));

const pills = document.querySelectorAll('.pill');

let activeIndex = -1; // To track the current active pill

const interval = setInterval(() => {
  // Reset the scale of the previously active pill
  if (activeIndex !== -1) {
    pills[activeIndex].style.transform = 'scale(1)';
  }

  // Pick a new random pill
  activeIndex = Math.floor(Math.random() * pills.length);
  pills[activeIndex].style.transform = 'scale(1.1)';
  pills[activeIndex].style.transition = 'transform 0.3s ease';
}, 750);
