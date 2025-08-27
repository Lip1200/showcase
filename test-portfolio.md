# Test Portfolio Card

## ✅ Fonctionnalités implémentées

### Navigation
- [x] Page d'accueil avec splash screen
- [x] Navigation vers Projects
- [x] Navigation vers About (page détaillée)
- [x] Navigation vers Contact
- [x] PortfolioLayout unifié pour toutes les pages

### Animations
- [x] Splash screen avec effet typewriter
- [x] Animations Framer Motion sur tous les composants
- [x] fadeIn animations avec stagger
- [x] Typewriter effect dans le header

### Thèmes
- [x] Thème Dark (par défaut)
- [x] Thème Light
- [x] Thème Monospaced (style Keita Yamada)
- [x] Toggle de thème en haut à droite
- [x] Variables CSS pour les couleurs

### Contenu
- [x] Données personnelles réelles (Filipe Lip)
- [x] 4 projets avec liens GitHub/web
- [x] Expérience professionnelle complète
- [x] Compétences techniques détaillées
- [x] Informations de contact réelles

### Design
- [x] Container avec bordure style carte
- [x] Police monospace (Inconsolata)
- [x] Style minimaliste inspiré de Keita Yamada
- [x] Layout responsive
- [x] Couleurs sobres et élégantes

## 🔧 Architecture technique

```
app/
├── portfolio-card/
│   ├── page.tsx (Home avec splash)
│   ├── layout.tsx (ThemeProvider global)
│   ├── projects/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
└── components/portfolio-card/
    ├── PortfolioLayout.tsx (Layout unifié)
    ├── Container.tsx (Structure principale)
    ├── Header.tsx (Navigation + nom)
    ├── Splash.tsx (Écran de chargement)
    ├── About.tsx (Page d'accueil)
    ├── Projects.tsx (Liste des projets)
    ├── Contact.tsx (Informations contact)
    ├── DetailedAbout.tsx (À propos détaillé)
    ├── ThemeProvider.tsx (Gestion des thèmes)
    ├── ThemeToggle.tsx (Boutons de thème)
    ├── Typewriter.tsx (Effet machine à écrire)
    ├── data.ts (Données personnelles)
    └── themes.css (Variables CSS thèmes)
```

## 🎨 Style référence

Inspiré de https://p5aholic.me/ :
- Design minimaliste et sobre
- Typographie monospace
- Navigation simple
- Animations subtiles
- Système de thèmes clair/sombre/monospace

## 📱 URLs de test

- Home: http://localhost:3000/portfolio-card
- Projects: http://localhost:3000/portfolio-card/projects  
- About: http://localhost:3000/portfolio-card/about
- Contact: http://localhost:3000/portfolio-card/contact
- Original portfolio: http://localhost:3000/original
