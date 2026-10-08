// Runs in the visitor's browser.
const hero = document.querySelector('.hero');

if (hero) {
  hero.addEventListener('mouseenter', () => {
    hero.style.transform = 'scale(1.02)';
    hero.style.transition = 'transform 0.3s ease';
  });

  hero.addEventListener('mouseleave', () => {
    hero.style.transform = 'scale(1)';
  });
}