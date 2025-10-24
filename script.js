// ====== Select Elements ======
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

// ====== Scroll Event ======
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Toggle header background
  header.classList.toggle('scrolled', scrollY > 50);

  // Highlight active navbar link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - header.offsetHeight - 10;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ====== Smooth Scroll ======
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offsetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  });
});

// ====== Mobile Menu Toggle ======
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
