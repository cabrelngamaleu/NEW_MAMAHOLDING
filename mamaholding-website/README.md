# 🏢 Site Web MAMAHOLDING S.A

Site web moderne et professionnel pour **MAMAHOLDING S.A**, leader du commerce en gros, développé avec Next.js 15, React 19, TypeScript et Tailwind CSS.

## 🎯 À Propos du Projet

Ce site vitrine présente MAMAHOLDING S.A et ses trois entités commerciales :
- **CAC** - Commerce et distribution
- **TRINCO** - Solutions industrielles  
- **ECOFOOD** - Produits alimentaires

## ✨ Fonctionnalités

### Pages Principales
- ✅ **Page d'accueil** - Slider animé, sections dynamiques
- ✅ **Notre Histoire** - Timeline interactive du groupe
- ✅ **Nos Valeurs** - Présentation des valeurs de l'entreprise
- ✅ **Gouvernance** - Structure organisationnelle
- ✅ **CAC** - Page dédiée à l'entité CAC
- ✅ **TRINCO** - Page dédiée à l'entité TRINCO
- ✅ **ECOFOOD** - Page dédiée à l'entité ECOFOOD
- ✅ **Espace Presse** - Actualités et communiqués
- ✅ **Contact** - Formulaire de contact et informations

### Caractéristiques Techniques
- 🎨 **Design moderne** avec animations fluides (Framer Motion)
- 📱 **Responsive** - Optimisé mobile, tablette et desktop
- ⚡ **Performance** - Next.js 15 avec App Router
- 🎯 **SEO optimisé** - Métadonnées complètes
- 🎭 **Animations** - Transitions et effets visuels
- 🎨 **Charte graphique** - Rouge, Vert et Blanc
- 🔤 **Typographie** - Google Fonts (Poppins)

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation des dépendances

```bash
cd mamaholding-website
npm install
```

### Lancement en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
mamaholding-website/
├── app/                          # Pages et routes (App Router Next.js)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux
│   ├── notre-histoire/          # Page Notre Histoire
│   ├── nos-valeurs/             # Page Nos Valeurs
│   ├── gouvernance/             # Page Gouvernance
│   ├── entites/                 # Pages des entités
│   │   ├── cac/                 # Page CAC
│   │   ├── trinco/              # Page TRINCO
│   │   └── ecofood/             # Page ECOFOOD
│   ├── espace-presse/           # Page Espace Presse
│   └── contact/                 # Page Contact
├── components/                   # Composants réutilisables
│   ├── Navbar.tsx               # Navigation principale
│   ├── Footer.tsx               # Pied de page
│   └── Hero.tsx                 # Slider d'accueil
├── public/                       # Fichiers statiques
│   └── images/                  # Images du site
├── package.json                  # Dépendances
├── tsconfig.json                # Configuration TypeScript
├── tailwind.config.ts           # Configuration Tailwind
├── next.config.js               # Configuration Next.js
└── README.md                    # Ce fichier
```

## 🎨 Charte Graphique

### Couleurs Principales
- **Rouge** : #DC143C (Couleur principale)
- **Vert** : #22C55E (Couleur secondaire)
- **Blanc** : #FFFFFF
- **Gris foncé** : #1F2937 (Textes)
- **Gris clair** : #F9FAFB (Backgrounds)

### Typographie
- **Police principale** : Poppins (Google Fonts)
- Poids disponibles : 300, 400, 500, 600, 700, 800, 900

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15.1.6
- **UI Library** : React 19.0.0
- **Langage** : TypeScript 5.7.3
- **Styling** : Tailwind CSS 3.4.17
- **Animations** : Framer Motion 11.15.0
- **Icons** : React Icons 5.4.0
- **Slider** : Swiper 11.1.15

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- 📱 **Mobile** : < 768px
- 📱 **Tablette** : 768px - 1024px
- 💻 **Desktop** : > 1024px

## 🎯 SEO et Performance

- ✅ Métadonnées optimisées pour chaque page
- ✅ Open Graph tags pour les réseaux sociaux
- ✅ Semantic HTML
- ✅ Images optimisées
- ✅ Lazy loading
- ✅ Fast page load

## 🔧 Configuration

### Variables d'environnement (optionnel)

Créez un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_SITE_URL=https://mamaholding.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@mamaholding.com
NEXT_PUBLIC_PHONE=+XXX XX XX XX XX
```

## 📝 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    red: '#DC143C',      // Votre rouge
    green: '#22C55E',    // Votre vert
    // ...
  },
}
```

### Modifier les contenus

Les contenus sont directement dans les pages :
- `app/page.tsx` - Contenu de la page d'accueil
- `app/notre-histoire/page.tsx` - Historique
- `app/nos-valeurs/page.tsx` - Valeurs
- etc.

### Ajouter des images

Placez vos images dans `public/images/` et utilisez-les avec Next.js Image :

```tsx
import Image from 'next/image'

<Image 
  src="/images/votre-image.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
/>
```

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Autres plateformes
- **Netlify** : Compatible
- **Cloudflare Pages** : Compatible
- **AWS Amplify** : Compatible
- **Serveur Node.js** : Compatible

## 📊 Statistiques du Projet

- **Pages** : 10+
- **Composants** : 15+
- **Animations** : Framer Motion
- **Lignes de code** : ~3000+

## 🎓 Structure des Composants

### Navbar
- Navigation responsive
- Menu dropdown
- Logo MAMAHOLDING
- Animation au scroll

### Footer
- Liens rapides
- Informations de contact
- Réseaux sociaux
- Copyright

### Hero
- Slider automatique
- 3 slides animés
- Call-to-action
- Navigation manuelle

## 🐛 Résolution de Problèmes

### Erreur de build

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles Tailwind non appliqués

Vérifiez que tous les chemins sont inclus dans `tailwind.config.ts`.

## 📞 Support

Pour toute question ou assistance :
- **Email** : support@mamaholding.com
- **Site Web** : https://mamaholding.com

## 📄 Licence

© 2024 MAMAHOLDING S.A. Tous droits réservés.

---

## 🎯 Prochaines Étapes (Recommandations)

1. **Ajouter vos vraies images** dans `/public/images/`
2. **Personnaliser les textes** avec vos informations réelles
3. **Configurer le formulaire de contact** avec un backend
4. **Ajouter Google Analytics** pour le suivi
5. **Optimiser le SEO** avec des mots-clés spécifiques
6. **Tester sur différents appareils**
7. **Déployer sur Vercel** ou votre hébergeur

## 🎨 Personnalisations Possibles

- 🌍 Ajouter le multilingue (FR/EN)
- 📧 Intégrer un système d'emailing
- 🔐 Ajouter un espace client sécurisé
- 📱 Créer une PWA (Progressive Web App)
- 🤖 Intégrer un chatbot
- 📊 Dashboard d'administration

---

**Développé avec ❤️ pour MAMAHOLDING S.A**
