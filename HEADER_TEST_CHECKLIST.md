# Tests d'intégration - Header OBJYX

## Checklist de vérification complète

### Phase 1 : Vérification des fichiers

- [ ] `sections/header.liquid` existe
- [ ] `assets/section-header-objyx.css` existe
- [ ] `snippets/header-icons.liquid` existe
- [ ] `snippets/header-mobile-menu.liquid` existe
- [ ] `locales/fr.json` contient les traductions header
- [ ] `locales/en.default.json` contient les traductions header

### Phase 2 : Vérification Shopify

- [ ] Aller dans Theme Customizer
- [ ] Vérifier que "OBJYX - Header" apparaît dans les sections
- [ ] Configurer un menu principal (main-menu)
- [ ] Uploadload un logo (si possible)

### Phase 3 : Tests Desktop (750px+)

#### Logo et branding
- [ ] Logo s'affiche correctement
- [ ] Logo est cliquable et dirige vers l'accueil
- [ ] Si pas de logo, affiche le nom de la boutique

#### Barre supérieure
- [ ] "Service Client" visible et cliquable
- [ ] "Suivre ma commande" visible et cliquable
- [ ] Liens ouvrent les bonnes pages

#### Navigation
- [ ] Menu horizontal visible avec items
- [ ] Items en MAJUSCULES
- [ ] Au hover : underline + changement couleur
- [ ] Page active : underline + changement couleur

#### Recherche
- [ ] Champ visible et focusable
- [ ] Icône loupe visible
- [ ] Placeholder "Rechercher" affiché
- [ ] Soumission du formulaire fonctionne
- [ ] Validation (pas d'envoi si vide)

#### Compte
- [ ] Icône compte visible
- [ ] Si non connecté : lien vers /account/login
- [ ] Si connecté : lien vers /account
- [ ] Texte alt correctement affiché

#### Panier
- [ ] Icône panier visible
- [ ] Badge compteur affiché si articles
- [ ] Compteur correct
- [ ] Clic ouvre le panier
- [ ] Badge disparaît si panier vide

#### Sticky
- [ ] Header reste visible au scroll
- [ ] Shadow légère au scroll
- [ ] Pas de sautillement

### Phase 4 : Tests Mobile (< 750px)

#### Affichage
- [ ] Logo centré
- [ ] Menu burger visible
- [ ] Icônes (compte, panier) visibles
- [ ] Pas de débordement horizontal

#### Menu burger
- [ ] Clic burger ouvre le menu
- [ ] Menu glisse depuis la gauche
- [ ] Overlay semi-transparent visible
- [ ] Bouton X visible et fonctionnel

#### Menu mobile
- [ ] Tous les items visibles
- [ ] Items en majuscules
- [ ] Au clic : fermeture du menu
- [ ] Liens navigables
- [ ] Scroll interne si liste longue

#### Fermeture du menu
- [ ] Clic sur X ferme le menu
- [ ] Clic sur overlay ferme le menu
- [ ] Clic sur un lien ferme le menu
- [ ] Touche Échap ferme le menu
- [ ] Scroll du body réactivé à la fermeture

#### Actions
- [ ] Recherche visible (hidden ou visible selon design)
- [ ] Compte cliquable
- [ ] Panier cliquable avec badge

### Phase 5 : Tests d'accessibilité

#### Navigation clavier
- [ ] Tab navigue dans tous les éléments interactifs
- [ ] Shift+Tab revient en arrière
- [ ] Entrée active les liens et boutons
- [ ] Échap ferme le menu mobile

#### Focus visibilité
- [ ] Focus outline visible sur tous les boutons
- [ ] Focus outline visible sur les liens
- [ ] Focus outline visible sur les inputs
- [ ] Couleur du focus suffisamment visible

#### Aria labels
- [ ] Icone account : aria-label présent
- [ ] Icone panier : aria-label présent
- [ ] Menu toggle : aria-label présent
- [ ] Éléments h1/h2 : présents et pertinents
- [ ] Page actuelle : aria-current="page"

#### Lecteur d'écran
- [ ] Logo décrit correctement
- [ ] Menu annoncé comme "Navigation principale"
- [ ] Items du menu annoncés
- [ ] Compte/Panier annoncés
- [ ] Compteur panier annoncé

### Phase 6 : Tests de responsivité

#### Points de rupture
- [ ] 320px (petit mobile)
- [ ] 480px (mobile)
- [ ] 768px (tablette)
- [ ] 990px (transition)
- [ ] 1200px (desktop)
- [ ] 1600px (grand desktop)

#### Éléments
- [ ] Logo redimensionne
- [ ] Texte lisible
- [ ] Pas de scroll horizontal
- [ ] Espaces corrects
- [ ] Images responsive

### Phase 7 : Tests de performance

#### Chargement
- [ ] CSS charge sans "flash"
- [ ] SVG charge instantanément
- [ ] Images optimisées
- [ ] Pas de décalage de layout (CLS)

#### Interactions
- [ ] Animations fluides (60 fps)
- [ ] Menu burger réactif
- [ ] Hover effects instantanés
- [ ] Scroll fluide

### Phase 8 : Tests de compatibilité navigateurs

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Phase 9 : Tests d'intégration Shopify

#### Collections/Produits
- [ ] Liens vers collections fonctionnent
- [ ] Pagination fonctionne
- [ ] Filtres fonctionnent

#### Panier
- [ ] Ajout au panier met à jour le badge
- [ ] Suppression au panier met à jour le badge
- [ ] Lien panier ouvre le panier

#### Compte
- [ ] Connexion fonctionne
- [ ] Déconnexion fonctionne
- [ ] Lien "Mon compte" fonctionne

#### Recherche
- [ ] Recherche retourne les résultats
- [ ] Paginationdans les résultats fonctionne
- [ ] Recherche vide montre les favoris

### Phase 10 : Tests de sécurité

- [ ] Pas de contenu XSS injecté
- [ ] Pas de SQL injection
- [ ] Liens externes sécurisés
- [ ] Formulaires CSRF protected (Shopify)

### Phase 11 : Tests SEO

- [ ] Logo a un alt text
- [ ] H1 présent et pertinent
- [ ] Structure HTML sémantique
- [ ] Schema.org markup présent

### Phase 12 : Cas limites

#### Nom de boutique long
- [ ] Affichage correct
- [ ] Pas de débordement
- [ ] Lisible

#### Menu avec beaucoup d'items
- [ ] Tous visibles en desktop
- [ ] Scrollable en mobile
- [ ] Pas de débordement

#### Produits avec beaucoup de variants
- [ ] Panier fonctionne correctement
- [ ] Badge correct

#### Connexion/Déconnexion
- [ ] État correct après action
- [ ] Cache actualisé

#### Recherche vide
- [ ] Validation fonctionne
- [ ] Message clair

---

## Procédure de test rapide

```bash
# 1. Lancer le serveur dev
shopify theme dev

# 2. Ouvrir le navigateur
# http://localhost:9292

# 3. Ouvrir DevTools (F12)
# Console -> vérifier pas d'erreurs
# Réseau -> vérifier assets chargés

# 4. Tester desktop
# Vérifier tous les éléments

# 5. Mode responsive (F12)
# Tester à 480px, 768px, 1200px

# 6. Keyboard navigation
# Naviguer avec Tab

# 7. Screen reader
# Avec NVDA (Windows) ou VoiceOver (Mac)
```

## Résultats attendus

✅ **Succès** :
- Tous les tests passer
- Pas d'erreurs en console
- Performance > 85 Lighthouse
- Accessibilité > 90 Lighthouse
- Best Practices > 90 Lighthouse

⚠️ **Avertissements** :
- Problèmes de performance mineurs
- Avertissements CSS non critiques

❌ **Échecs** :
- Erreurs Liquid/HTML
- Elementos manquants
- Fonctionnalités inaccessibles

---

**Date de test recommandée** : Avant la mise en production
**Fréquence** : Après chaque modification
**Testeur** : QA + Utilisateurs réels
