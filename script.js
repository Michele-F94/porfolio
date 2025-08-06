// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('active');
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if(scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Simple contact form handler (just prevent reload)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Messaggio inviato! Ti risponderò presto.');
  e.target.reset();
});
