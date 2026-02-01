# Barre de catégories OBJYX - Installation

## Vue d'ensemble

La barre de catégories affiche automatiquement toutes les **collections Shopify** sous le header principal, avec un design moderne et responsive.

## 📦 Fichiers créés

```
✅ sections/header-categories.liquid          - Section des catégories
✅ assets/section-header-categories.css       - Styles (responsive)
✅ locales/fr.json - Traductions FR (ajout)
✅ locales/en.default.json - Traductions EN (ajout)
```

## 🚀 Installation (3 étapes)

### Étape 1 : Ajouter la section au theme
1. Allez dans **Theme Customizer**
2. Allez sur une page quelconque (ex: Homepage)
3. **Add section** → **OBJYX - Barre de catégories**

### Étape 2 : Positionner la section
Assurez-vous que la section est **sous le header principal**
(Après `OBJYX - Header` et avant le contenu)

### Étape 3 : Créer vos collections
1. Allez dans **Products** → **Collections**
2. Créez les collections que vous voulez afficher :
   - SOLDE
   - CARNAVAL
   - JOUETS & DÉGUISEMENTS
   - MODE
   - MAISON
   - COLLECTOR
   - CADEAUX
   - PERSONNAGES
   - OFFRES

Elles apparaîtront **automatiquement** dans la barre !

## ✨ Fonctionnalités

### Desktop (750px+)
- Menu horizontal centré
- Hover effect couleur + underline
- Page active : surligné en couleur

### Mobile (-749px)
- Slider horizontal scrollable
- Touch-friendly
- Scroll snap pour les gestes

### Comportement automatique
- Les collections s'ajoutent **automatiquement**
- Pas de code à modifier
- Collection "all" est **masquée**
- Page active détectée automatiquement

## 🎨 Personnalisation

### Changer les couleurs
Les couleurs utilisent les mêmes variables CSS que le header :

```css
/* assets/section-header-objyx.css */
--header-hover : Couleur au hover
--header-hover-light : Fond au hover
--header-text : Couleur texte
--header-bg : Fond
```

### Modifier le padding
```css
/* assets/section-header-categories.css ligne 30 */
padding: 1rem 1.5rem;  /* Changer ces valeurs */
```

### Ajouter un séparateur vertical
```css
/* assets/section-header-categories.css ligne 45 */
border-right: 1px solid var(--header-border);
```

## 📊 Aspect visuel

```
┌─────────────────────────────────────────┐
│ Header OBJYX (Navigation principale)    │
├─────────────────────────────────────────┤
│ SOLDE │ CARNAVAL │ JOUETS │ MODE │ ... │
├─────────────────────────────────────────┤
│ Contenu page                            │
└─────────────────────────────────────────┘
```

## 🔗 Variables utilisées

```liquid
collections.all           - Toutes les collections
collection.title          - Nom de la collection
collection.url            - URL de la collection
collection.handle         - Identifiant unique
current_collection.handle - Collection actuelle
```

## 📱 Responsive design

### Breakpoints
- **Mobile** : < 750px (scroll horizontal)
- **Desktop** : 750px+ (centré)

### Comportements
```
Mobile :
├─ Affichage horizontal scrollable
├─ Scroll snap (snap-to-snap)
└─ Texto plus petit (0.8125rem → 0.75rem)

Desktop :
├─ Centré horizontalement
├─ Padding augmenté (1.5rem)
└─ Font size normal (0.9rem)
```

## 🎯 Ordre des catégories

Les catégories s'affichent dans l'ordre de création dans Shopify Admin.

Pour réorganiser :
1. **Products** → **Collections**
2. **Drag & drop** les collections dans l'ordre désiré

## ✅ Checklist

- [ ] Section créée et positionnée
- [ ] Collections créées dans Shopify
- [ ] Collections visibles dans la barre
- [ ] Liens fonctionnent
- [ ] Hover effects visibles
- [ ] Mobile scrollable
- [ ] Page active surlignée

## 🐛 Dépannage

### Les catégories ne s'affichent pas
```
1. Vérifiez que des collections existent
2. Vérifiez que la section est ajoutée
3. Rafraîchissez la page (Ctrl+F5)
```

### L'ordre est mauvais
```
1. Allez dans Products → Collections
2. Réorganisez les collections
3. L'ordre se met à jour automatiquement
```

### La page active n'est pas surlignée
```
1. Vérifiez que vous êtes sur une page de collection
2. Vérifiez la variable current_collection.handle
```

### Le scroll ne fonctionne pas en mobile
```
1. Vérifiez le navigateur (iOS/Android)
2. Testez sur un vrai appareil
3. Vérifiez que `-webkit-overflow-scrolling: touch` est présent
```

## 🔒 Masquer la collection "all"

Par défaut, la collection "all" est masquée.
Si vous voulez l'afficher, enlevez cette ligne :

```liquid
{%- if collection.handle != 'all' -%}
```

## 🎨 Ajouter une icône avant le nom

Modifiez `header-categories.liquid` ligne 16 :

```liquid
<a href="{{ collection.url }}" ...>
  📦 {{ collection.title }}
</a>
```

## 📈 Limite de catégories

Pas de limite technique, mais il est recommandé de :
- **Desktop** : 8-12 catégories maximum
- **Mobile** : 6-8 catégories (pour un bon UX en scroll)

## 🔄 Mise à jour automatique

Les catégories se mettent à jour **automatiquement** quand vous :
- Créez une nouvelle collection
- Renommez une collection
- Supprimez une collection
- Modifiez l'ordre

Aucun code à modifier !

## 📚 Intégration avec le header

La barre de catégories fonctionne en tandem avec le header OBJYX :
- Même palette de couleurs
- Même typographie
- Responsive ensemble
- Animations cohérentes

## 🎁 Bonus : Rendre sticky

Pour rendre la barre sticky (reste visible au scroll) :

1. Ouvrez `sections/header-categories.liquid`
2. Changez ligne 3 :
```liquid
<section class="header-categories sticky">
```

Cela la rendra sticky sous le header !

## 📞 Support

Consultez :
- `HEADER_DOCUMENTATION.md` - Guide complet
- `HEADER_SETUP_GUIDE.md` - Configuration
- `HEADER_TEST_CHECKLIST.md` - Tests

---

**Status** : ✅ Production Ready  
**Durée install** : 5 minutes  
**Difficultés** : Très facile (0 code)
