# NEW_MAMAHOLDING — Site vitrine

**Un site vitrine moderne et professionnel pour MAMAHOLDING S.A.**

## 📌 À propos
Ce dépôt contient le site web officiel de MAMAHOLDING, développé avec **Next.js**, **React**, **TypeScript** et **Tailwind CSS**. Le site présente les activités du groupe (CAC, TRINCO, ECOFOOD), l'actualité, et permet aux visiteurs de prendre contact.

## 🚀 Démarrage rapide
Prérequis : Node.js 18+ et npm

1. Installer les dépendances :

```bash
npm install
```

2. Lancer en développement :

```bash
npm run dev
```

3. Builder pour la production :

```bash
npm run build
npm start
```

## 🧭 Structure principale
- `app/` — Pages et routes (Next.js App Router)
- `components/` — Composants réutilisables (Navbar, Footer, Hero...)
- `public/` — Assets publics (images, manifest)
- `styles/` / `globals.css` — Styles globaux
- `README.md` — Document principal (celui-ci)

## ⚙️ Variables d'environnement
Créer `.env.local` pour configurer les variables publiques :

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
```

(N'utilisez jamais de secrets côté client dans ce fichier.)

## 📦 Déploiement
- Recommandé : **Vercel** (integration Next.js simplifiée)
- Autres : Netlify, Cloudflare Pages, hébergement Node.js

Procédure standard :
- `npm install`
- `npm run build`
- `npm run start` (ou laissez le provider builder lancer la build automatiquement)

## ✅ Ce qu'il reste à faire (recommandations)
- Remplacer les textes et images de démonstration par les contenus officiels
- Vérifier les informations de contact et le RGPD (politique de confidentialité)
- Mettre en place un monitoring / error reporting (Sentry, Logflare)

## 🤝 Contribution
- Fork & PR welcome
- Merci d'ouvrir des issues pour signaler des bugs ou demander des améliorations

---

**MAMAHOLDING S.A.** — Site créé pour la promotion des services du groupe. Pour toute aide : support@mamaholding.com
