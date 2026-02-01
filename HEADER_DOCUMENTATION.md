# Header OBJYX - Documentation

## Vue d'ensemble

Le header OBJYX est un en-tête professionnel, moderne et responsive inspiré du Disney Store pour un site e-commerce de jouets pour enfants.

## Caractéristiques

### 1. **Barre supérieure (Top Bar)**
- Fond blanc/clair avec bordure légère
- Liens texte petits et discrets
  - Service Client → `/pages/contact`
  - Suivre ma commande → `/pages/track-order`
- Police fine, alignée à gauche
- Accessible uniquement sur desktop

### 2. **Header principal**
- **Logo** : Centré horizontalement, cliquable vers la page d'accueil
  - Prend en charge les images (paramétrables dans les settings Shopify)
  - Fallback sur le nom de la boutique si pas de logo
- **Navigation** : Menu horizontal basé sur les collections Shopify
  - Utilise `section.settings.menu` (configurable)
  - Style en majuscules avec animations au hover
- **Icônes** : Alignées à droite
  - Compte (Connexion/Mon compte selon le statut client)
  - Panier avec badge de compteur
  - Menu burger sur mobile

### 3. **Recherche**
- Desktop : Champ arrondi avec icône loupe
- Mobile : Caché pour laisser place au menu burger
- Reliée à la recherche Shopify native
- Placeholder : "Rechercher"

### 4. **Accessibilité**
- Labels ARIA pour tous les contrôles interactifs
- Navigation au clavier (Tab, Entrée, Échap)
- Symboles visuels clairs du focus
- Classes `visually-hidden` pour le contenu accessible

### 5. **Responsive**
- **Desktop (750px+)** : Affichage complet avec navigation visible
- **Mobile (-749px)** : Menu burger avec tiroir coulissant
  - Overlay semi-transparent
  - Animation fluide
  - Fermeture au clic extérieur ou Échap

### 6. **Sticky Header**
- Reste visible en scrollant (sticky)
- Ombre douce au scroll
- Expérience utilisateur optimale

## Structure des fichiers

### Fichiers créés/modifiés :

```
sections/
  └── header.liquid          # Section du header (HTML + Liquid)

assets/
  └── section-header-objyx.css   # Styles CSS du header

locales/
  ├── fr.json                     # Traductions FR
  └── en.default.json            # Traductions EN
```

## Utilisation en Shopify

### Configuration du header :

1. **Dans le Customizer** :
   - Logo : `Settings → Logo`
   - Menu : `Sections → OBJYX - Header → Menu principal`

2. **Créer le menu** :
   - Allez dans `Navigation` (Shopify Admin)
   - Créez un menu appelé `main-menu`
   - Ajoutez vos collections/pages

3. **Structure de menu recommandée** :
   ```
   - NOUVEAUTÉS (ou Collection)
   - SOLDE (ou Collection)
   - CARNAVAL (ou Collection)
   - JOUETS & DÉGUISEMENTS (ou Collection)
   - MODE
   - MAISON
   - COLLECTOR (ou Collection)
   - CADEAUX (ou Page)
   - PERSONNAGES (ou Collection)
   - OFFRES (ou Collection)
   ```

## Styles et couleurs

### Palette CSS personnalisable (variables CSS) :

```css
:root {
  --header-bg: #ffffff;              /* Fond blanc */
  --header-text: #333333;            /* Texte foncé */
  --header-border: #f0f0f0;          /* Bordures légères */
  --header-hover: #007bff;           /* Couleur hover (bleu) */
  --header-hover-light: #f5f5f5;     /* Fond hover */
}
```

### Pour personnaliser :
Modifiez les variables CSS dans `assets/section-header-objyx.css` ligne 7-12.

## JavaScript - Fonctionnalités

### Menu mobile :
- Toggle au clic du bouton burger
- Fermeture au clic de la croix
- Fermeture au clic sur l'overlay
- Fermeture au clic sur un lien
- Fermeture à la touche Échap
- Prévention du scroll body

### Sticky header :
- Ajoute une ombre au scroll
- Retire la ombre au retour en haut

### Validations :
- Validation du formulaire de recherche
- Empêche la soumission si le champ est vide

## Localisation

Les termes clés sont traduits dans les fichiers de locale :

### Français (fr.json) :
- Service Client / Suivre ma commande
- Rechercher / Mon compte / Connexion
- Panier avec compteur

### Anglais (en.default.json) :
- Customer Service / Track My Order
- Search / My Account / Sign In
- Shopping Cart with counter

Pour ajouter d'autres langues, reproduisez la structure `header` dans les autres fichiers JSON.

## Classes CSS principales

```css
.header-topbar                    /* Barre supérieure */
.header-main                      /* Header principal */
.header-main__logo               /* Logo */
.header-main__nav                /* Navigation desktop */
.header-main__menu               /* Liste du menu */
.header-main__actions            /* Zone icônes */
.header-main__search             /* Barre de recherche */
.header-main__cart-badge         /* Badge panier */
.header-mobile-menu              /* Menu mobile */
.header-mobile-menu-overlay      /* Overlay menu mobile */
```

## Performance et optimisation

✅ **Optimisé pour la performance** :
- CSS critique inline
- Pas de dépendances externes
- SVG inlines pour les icônes
- Images responsives avec srcset
- Code Liquid éfficace

## Compatibilité

- ✅ Shopify Dawn (compatible)
- ✅ Shopify Debut
- ✅ Tous les thèmes basés sur Dawn
- ✅ Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- ✅ Mobile-first responsive design

## Hiérarchie Z-Index

```css
.header-main              /* z-index: 100 */
.header-mobile-menu-overlay  /* z-index: 150 */
.header-mobile-menu       /* z-index: 200 */
```

## Points d'intégration Shopify

### Variables Liquid utilisées :
- `settings.logo` - Image du logo
- `settings.logo_width` - Largeur du logo
- `shop.name` - Nom de la boutique
- `shop.customer_accounts_enabled` - Comptes client activés
- `customer` - Objet client (si connecté)
- `cart.item_count` - Compteur d'articles
- `routes.root_url` - URL d'accueil
- `routes.account_url` - URL du compte
- `routes.account_login_url` - URL de connexion
- `routes.cart_url` - URL du panier
- `routes.search_url` - URL de recherche
- `request.page_type` - Type de page actuelle
- `linklists[section.settings.menu].links` - Liens du menu

### Attributs ARIA :
- `aria-label` - Descriptions pour lecteurs d'écran
- `aria-current="page"` - Page active
- `aria-expanded` - État menu ouvert/fermé
- `aria-controls` - Contrôle lié

## Améliorations futures possibles

- [ ] Intégration mega menu pour les collections
- [ ] Animations CSS avancées
- [ ] Support du mode sombre
- [ ] Compteur de favoris (si nécessaire)
- [ ] Affichage des notifications
- [ ] Localisation supplémentaire

## Support et maintenabilité

Le code est :
- **Commenté** : Sections clairement identifiées
- **Modulaire** : Facilement customisable
- **Propre** : Pas de framework externe
- **Moderne** : CSS3, ES6, Web Standards

## License

Développé pour OBJYX - Thème Shopify personnalisé.
