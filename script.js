const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  nav.toggleAttribute('data-visible');
});