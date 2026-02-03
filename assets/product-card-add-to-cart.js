function handleCardAddToCart(event) {
  const button = event.target.closest('.product-card-objyx__add-to-cart');
  if (!button) return;

  event.preventDefault();
  event.stopPropagation();

  const variantId = button.getAttribute('data-variant-id');
  if (!variantId) {
    showNotification('Choisissez une variante', 'error');
    return;
  }

  button.classList.add('is-adding');
  button.disabled = true;

  const cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
  const useSections = cart && typeof cart.getSectionsToRender === 'function';

  const requestViaRoutes =
    window.routes && window.routes.cart_add_url && typeof window.fetchConfig === 'function';

  const finish = () => {
    button.classList.remove('is-adding');
    button.disabled = false;
  };

  if (requestViaRoutes) {
    const config = fetchConfig('javascript');
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    delete config.headers['Content-Type'];

    const formData = new FormData();
    formData.append('id', variantId);
    formData.append('quantity', 1);

    if (useSections) {
      formData.append(
        'sections',
        cart.getSectionsToRender().map((section) => section.id)
      );
      formData.append('sections_url', window.location.pathname);
      cart.setActiveElement(document.activeElement);
    }

    config.body = formData;

    fetch(`${routes.cart_add_url}`, config)
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          showNotification(data.description || 'Erreur lors de l\'ajout', 'error');
          return;
        }
        if (useSections) {
          cart.renderContents(data);
        } else {
          showNotification('Produit ajouté au panier !');
        }
      })
      .catch((error) => {
        console.error('Erreur:', error);
        showNotification('Erreur lors de l\'ajout au panier', 'error');
      })
      .finally(finish);
    return;
  }

  fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: [{ id: variantId, quantity: 1 }],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status) {
        showNotification(data.description || 'Erreur lors de l\'ajout', 'error');
        return;
      }
      showNotification('Produit ajouté au panier !');
    })
    .catch((error) => {
      console.error('Erreur:', error);
      showNotification('Erreur lors de l\'ajout au panier', 'error');
    })
    .finally(finish);
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', handleCardAddToCart);
});

// Fonction pour afficher une notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `product-card-notification product-card-notification--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4caf50' : '#f44336'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    z-index: 9999;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  document.body.appendChild(notification);

  // Supprimer la notification après 3 secondes
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Animation CSS pour les notifications
if (!document.querySelector('style[data-product-card-notification]')) {
  const style = document.createElement('style');
  style.setAttribute('data-product-card-notification', 'true');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
