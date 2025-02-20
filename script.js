// scroll-links
function scrollToElement(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const element = document.getElementById(targetId);
  const offset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', scrollToElement);
});

