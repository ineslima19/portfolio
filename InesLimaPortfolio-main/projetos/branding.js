document.querySelectorAll('.branding-carousel').forEach(carousel => {
  const slides = [...carousel.querySelectorAll('.branding-slide')];
  const previous = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  const counter = carousel.querySelector('.carousel-counter');


const caption = carousel.querySelector('.carousel-caption');

const captions = [
    "",       // Imagem 1
    "",       // Imagem 2
    "JADE",   // Imagem 3
    "FRÉSIA", // Imagem 4
    "AZURE",  // Imagem 5
    "ÉBANO",  // Imagem 6
    "",       // Imagem 7
    "",       // Imagem 8
    ""        // Imagem 9
];

  if (!slides.length) return;

  let current = 0;
  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
    });
    if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  
if (caption) {
    caption.textContent = captions[current] || "";
}

  }


  previous?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(current + 1); }
  });
  showSlide(0);
});

