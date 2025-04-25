// Toggle nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Section switching
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    navigateToSection(targetId);
    navMenu.style.display = 'none';
  });
});

// Explore box click
document.querySelectorAll('.explore-box').forEach(box => {
  box.addEventListener('click', () => {
    navigateToSection('about');
  });
});

// Next button scroll
const nextButton = document.getElementById('nextBtn');
nextButton.addEventListener('click', () => {
  const currentIndex = Array.from(sections).findIndex(sec => sec.classList.contains('active'));
  const nextIndex = (currentIndex + 1) % sections.length;
  const nextId = sections[nextIndex].id;
  navigateToSection(nextId);
});

const prevButton = document.getElementById('prevBtn');
prevButton.addEventListener('click', () => {
  const currentIndex = Array.from(sections).findIndex(sec => sec.classList.contains('active'));
  const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
  const prevId = sections[prevIndex].id;
  navigateToSection(prevId);
});


// Switch to target section
function navigateToSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
}

// Visitor Counter
const counterContainer = document.querySelector(".website-counter");
let visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
