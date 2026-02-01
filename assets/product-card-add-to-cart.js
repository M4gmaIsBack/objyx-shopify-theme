document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.product-card-objyx__add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const variantId = this.getAttribute('data-variant-id');
      const button = this;

      // Désactiver le bouton pendant l'ajout
      button.classList.add('is-adding');
      button.disabled = true;

      // Ajouter au panier via l'API Shopify
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: [
            {
              id: variantId,
              quantity: 1
            }
          ]
        })
      })
      .then(response => response.json())
      .then(data => {
        // Succès - montrer une notification
        showNotification('Produit ajouté au panier!');
        
        // Réactiver le bouton après 1 seconde
        setTimeout(() => {
          button.classList.remove('is-adding');
          button.disabled = false;
        }, 1000);
      })
      .catch(error => {
        console.error('Erreur:', error);
        showNotification('Erreur lors de l\'ajout au panier', 'error');
        button.classList.remove('is-adding');
        button.disabled = false;
      });
    });
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
});

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
