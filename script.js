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




// ====== Contact Form Mailto (Added Section) ======
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  if (!form) return; // safety check if the contact form isn't on the current page

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields before sending.");
      return;
    }

    const subject = encodeURIComponent("New Portfolio Message from " + name);
    const body = encodeURIComponent(
      `Hello Neha,\n\n` +
      `You have a new message from your portfolio website:\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n\n` +
      `💬 Message:\n${message}\n\n` +
      `Best regards,\n${name} \n${email} `
    );

    const mailtoLink = `mailto:nehadhabale2512@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });
});
