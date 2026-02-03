document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.product-card-objyx');

  cards.forEach((card) => {
    const img = card.querySelector('.product-card-objyx__image');
    if (!img) return;

    const defaultSrc = img.getAttribute('data-default-src') || img.getAttribute('src');
    let images = [];
    try {
      images = JSON.parse(card.dataset.images || '[]');
    } catch (e) {
      images = [];
    }

    let hoverTimer = null;
    let hoverIndex = 0;
    let manualSrc = null;

    const showSrc = (src) => {
      if (src && img.getAttribute('src') !== src) {
        img.setAttribute('src', src);
      }
    };

    const startHoverCycle = () => {
      if (!images || images.length < 2) return;
      clearInterval(hoverTimer);
      hoverIndex = 0;
      hoverTimer = setInterval(() => {
        hoverIndex = (hoverIndex + 1) % images.length;
        showSrc(images[hoverIndex]);
      }, 1200);
    };

    const stopHoverCycle = () => {
      clearInterval(hoverTimer);
      hoverTimer = null;
      showSrc(manualSrc || defaultSrc);
    };

    card.addEventListener('mouseenter', startHoverCycle);
    card.addEventListener('mouseleave', stopHoverCycle);

    const swatches = card.querySelectorAll('[data-variant-image]');
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', (event) => {
        event.preventDefault();
        const variantImage = swatch.getAttribute('data-variant-image');
        if (variantImage) {
          manualSrc = variantImage;
          showSrc(variantImage);
        }
      });
    });
  });
});
