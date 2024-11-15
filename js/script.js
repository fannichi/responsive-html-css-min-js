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
