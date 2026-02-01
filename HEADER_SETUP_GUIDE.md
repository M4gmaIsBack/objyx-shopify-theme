# Configuration du Header OBJYX - Guide d'installation

## Étape 1 : Vérifier les menus Shopify

Avant de configurer le header, vous devez créer un menu principal dans l'admin Shopify.

### Créer le menu principal :

1. Allez à **Navigation** dans l'admin Shopify
2. Créez un nouveau menu appelé **"main-menu"** (exact)
3. Ajoutez vos catégories/collections :

```
NOUVEAUTÉS
├─ Nouvelles Peluches
├─ Nouveaux Jouets
└─ Sorties du Mois

SOLDE
├─ Réductions 50%+
├─ Stock Limité
└─ Clearance

CARNAVAL

JOUETS & DÉGUISEMENTS
├─ Jouets pour Bébé
├─ Jouets 3-6 ans
├─ Jouets 7-10 ans
└─ Jouets 11+

MODE
├─ Vêtements Enfant
├─ Accessoires
└─ Chaussures

MAISON
├─ Décoration
├─ Rangement
└─ Linge

COLLECTOR
├─ Éditions Limitées
├─ Figurines
└─ Sets Spéciaux

CADEAUX

PERSONNAGES
├─ Disney
├─ Marvel
├─ Princesses
└─ Héros

OFFRES
```

## Étape 2 : Configurer le Logo

1. Allez à **Theme Customizer** → **Settings** → **Logo**
2. Téléchargez votre logo OBJYX
3. Réglez la largeur idéale (recommandé: 120-150px)

### Recommandations logo :
- Format : PNG avec transparence
- Dimensions : 1200x600px minimum
- Ratio : Paysage (2:1 ou 3:1)
- Poids : < 100KB

## Étape 3 : Ajouter des Pages (Top Bar)

Le header affiche 2 liens dans la barre supérieure. Créez ces pages :

### Service Client
- **URL de la page** : `/pages/contact`
- **Contenu** : Formulaire de contact ou FAQ

### Suivre ma commande
- **URL de la page** : `/pages/track-order`
- **Contenu** : Outil de suivi de commande

## Étape 4 : Vérifier les paramètres Shopify

### Comptes clients
- **Settings** → **Policies & Permissions** → **Customer Accounts**
- Vérifiez que les comptes clients sont activés

### Recherche
- **Settings** → **Products and Collections** → **Search**
- Vérifiez que la recherche est activée

## Étape 5 : Tester le Header

### Desktop
- [ ] Logo affiche correctement
- [ ] Navigation horizontal visible
- [ ] Recherche fonctionnelle
- [ ] Icônes compte et panier visibles
- [ ] Hover effects fonctionnent

### Mobile (< 750px)
- [ ] Logo centré
- [ ] Menu burger visible
- [ ] Clic menu burger ouvre le tiroir
- [ ] Fermeture du menu au clic
- [ ] Liens navigables

### Accessibilité
- [ ] Navigable au clavier (Tab)
- [ ] Focus visible
- [ ] Labels ARIA lisibles
- [ ] Lecteur d'écran compatible

## Personnalisation - Couleurs

Pour modifier les couleurs du header, éditez le fichier CSS :

```
assets/section-header-objyx.css (lignes 7-12)
```

### Variables CSS modifiables :

```css
--header-bg: #ffffff;              /* Fond header */
--header-text: #333333;            /* Couleur texte */
--header-border: #f0f0f0;          /* Bordures */
--header-hover: #007bff;           /* Hover (bleu par défaut) */
--header-hover-light: #f5f5f5;     /* Fond hover */
```

### Exemples de personnalisation :

**Thème coloré (ciel OBJYX)**
```css
--header-bg: #ffffff;
--header-text: #1a1a1a;
--header-hover: #ff6b9d;           /* Rose enfantin */
--header-hover-light: #fff0f5;
```

**Thème sombre (pour evening)**
```css
--header-bg: #1a1a1a;
--header-text: #ffffff;
--header-hover: #ffd700;           /* Or */
--header-hover-light: #2a2a2a;
```

## Traductions - Langues supplémentaires

Pour ajouter une langue supplémentaire (ex: Spanish), copiez cette structure dans `locales/es.json` :

```json
{
  "header": {
    "topbar": {
      "contact": "Servicio al Cliente",
      "track": "Rastrear Mi Pedido"
    },
    "navigation": {
      "label": "Navegación Principal",
      "toggle": "Abrir Menú",
      "close": "Cerrar Menú"
    },
    "search": {
      "placeholder": "Buscar",
      "label": "Búsqueda"
    },
    "account": {
      "my_account": "Mi Cuenta",
      "login": "Iniciar Sesión"
    },
    "cart": {
      "label": "Carrito",
      "count": "Carrito: {{ count }} artículo"
    }
  }
}
```

## Dépannage

### Le menu ne s'affiche pas
- Vérifiez que le menu "main-menu" existe dans Navigation
- Vérifiez que le menu contient des liens
- Vérifiez que le menu est assigné dans le Theme Customizer

### Logo déformé
- Vérifiez le ratio d'aspect (idéal: 2:1)
- Augmentez la largeur du logo dans Settings

### Recherche ne fonctionne pas
- Vérifiez que la recherche est activée dans Settings
- Vérifiez que la route `/search` existe

### Menu mobile ne ferme pas
- Vérifiez le JavaScript dans les outils de dev
- Testez sur un autre navigateur

### Problèmes d'accessibilité
- Vérifiez les labels ARIA dans le HTML
- Testez avec un lecteur d'écran
- Vérifiez le contraste des couleurs

## Performance

### Optimisations appliquées :
- ✅ CSS critique inline
- ✅ Images responsives
- ✅ Pas de dépendances externes
- ✅ Code Liquid efficace
- ✅ SVG pour les icônes (très léger)

### Bonne pratiques :
- Minimisez les images
- Utilisez lazy loading pour les images de contenu
- Compressez les fichiers CSS/JS
- Testez les performances avec Lighthouse

## Support

Pour toute question ou amélioration :
- Consultez `HEADER_DOCUMENTATION.md`
- Vérifiez les logs du theme
- Testez dans différents navigateurs

---

**Dernière mise à jour** : Février 2026
**Version** : 1.0
**Compatibilité** : Shopify Dawn + dérivés
