
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
  navLinks.classList.toggle('show');
}

navLinks.addEventListener('click', toggleMenu);