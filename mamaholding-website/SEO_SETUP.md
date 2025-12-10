# Configuration SEO Complète - MAMAHOLDING

## 📋 Table des matières
1. [Images Open Graph](#1-images-open-graph)
2. [Google Search Console](#2-google-search-console)
3. [Schema.org](#3-schemaorg)
4. [Sitemap & Robots.txt](#4-sitemap--robotstxt)
5. [Checklist SEO](#5-checklist-seo)

---

## 1. Images Open Graph

### Images manquantes à créer

Créez ces images et placez-les dans le dossier `/public/images/` :

#### **og-image.jpg** (1200x630px)
- Dimensions: 1200 x 630 pixels
- Format: JPG ou PNG
- Poids max: 8 MB (recommandé: < 300 KB)
- Contenu suggéré:
  - Logo MAMAHOLDING
  - Slogan: "Leader du Commerce en Gros depuis 2004"
  - Couleurs brand: Rouge (#DC2626)

#### **twitter-image.jpg** (1200x675px)
- Dimensions: 1200 x 675 pixels
- Format: JPG ou PNG
- Poids max: 5 MB
- Contenu similaire à og-image.jpg

### Outils pour créer les images

**Option 1: Canva (Gratuit)**
1. Allez sur [https://www.canva.com](https://www.canva.com)
2. Créez un design personnalisé (1200 x 630px pour OG)
3. Utilisez le template "Social Media Post"
4. Ajoutez le logo, texte, et couleurs de la marque
5. Exportez en JPG

**Option 2: Figma (Gratuit)**
1. Créez un frame de 1200 x 630px
2. Designez l'image OG
3. Exportez en JPG/PNG

**Option 3: Adobe Express (Gratuit)**
1. Utilisez les templates prédéfinis
2. Personnalisez avec vos éléments
3. Téléchargez

**Option 4: Générateur automatique**
Utilisez un service comme:
- [https://www.opengraph.xyz/](https://www.opengraph.xyz/)
- [https://placid.app/](https://placid.app/)

### Placement des images

```
public/
  images/
    og-image.jpg       ← Image principale Open Graph (1200x630)
    twitter-image.jpg  ← Image Twitter Card (1200x675)
    favicon.ico        ← Favicon du site
    logo.png           ← Logo existant
```

---

## 2. Google Search Console

### Configuration

1. **Créer un compte Google Search Console**
   - Allez sur [https://search.google.com/search-console](https://search.google.com/search-console)
   - Cliquez sur "Ajouter une propriété"
   - Entrez: `https://mamaholding.net`

2. **Vérifier votre propriété**

   **Méthode 1: Balise HTML (Recommandée)**
   - Dans Search Console, choisissez "Balise HTML"
   - Copiez le code de vérification (ex: `abc123xyz`)
   - Ouvrez `app/layout.tsx`
   - Remplacez `GOOGLE_VERIFICATION_CODE` par votre code
   ```typescript
   verification: {
     google: 'abc123xyz', // Votre code ici
   }
   ```

   **Méthode 2: Fichier HTML**
   - Téléchargez le fichier HTML de vérification
   - Placez-le dans `/public/`
   - Vérifiez l'accès: `https://mamaholding.net/google-verification-file.html`

3. **Soumettre le sitemap**
   - Dans Search Console > Sitemaps
   - Soumettez: `https://mamaholding.net/sitemap.xml`

4. **Configurer les paramètres**
   - Définissez le domaine préféré (avec ou sans www)
   - Configurez le ciblage géographique: **Cameroun**
   - Vérifiez l'indexation mobile

### Monitorer les performances

Vérifiez régulièrement:
- ✅ Couverture d'indexation
- ✅ Performances (clics, impressions, CTR)
- ✅ Expérience utilisateur (Core Web Vitals)
- ✅ Liens (internes et externes)
- ✅ Problèmes de sécurité

---

## 3. Schema.org

### Déjà implémenté ✅

Le fichier `components/SchemaOrg.tsx` contient:

1. **Organization Schema**
   - Nom, adresse, contacts
   - Entités (CAC, TRINCO, ECOFOOD)
   - Réseaux sociaux
   - Date de création (2004)

2. **Website Schema**
   - URL du site
   - Description
   - Action de recherche

3. **Breadcrumb Schema**
   - Navigation structurée

### Tester le Schema.org

1. **Google Rich Results Test**
   - Allez sur [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Testez: `https://mamaholding.net`
   - Vérifiez qu'il n'y a pas d'erreurs

2. **Schema Markup Validator**
   - [https://validator.schema.org/](https://validator.schema.org/)
   - Collez votre URL ou le code JSON-LD

### Personnaliser le Schema

Pour ajouter plus d'informations, éditez `components/SchemaOrg.tsx`:

```typescript
// Exemple: Ajouter des certifications
"award": [
  "ISO 9001",
  "Certification qualité XXX"
],

// Exemple: Ajouter des services
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Services MAMAHOLDING",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Commerce en gros"
      }
    }
  ]
}
```

---

## 4. Sitemap & Robots.txt

### Sitemap.xml ✅

Déjà configuré dans `app/sitemap.ts`.

**Fréquences de mise à jour:**
- Homepage: `weekly` (priorité: 1.0)
- Entités: `weekly` (priorité: 0.9)
- Contact: `monthly` (priorité: 0.8)
- Pages légales: `yearly` (priorité: 0.3)

**Pour forcer la régénération:**
```bash
npm run build
```

### Robots.txt ✅

Déjà configuré dans `app/robots.ts`.

**Vérifier le fichier:**
Visitez: `https://mamaholding.net/robots.txt`

**Personnaliser (si nécessaire):**
Éditez `app/robots.ts`:
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: 'https://mamaholding.net/sitemap.xml',
  }
}
```

---

## 5. Checklist SEO

### ✅ Métadonnées de base
- [x] Titre unique par page (< 60 caractères)
- [x] Description unique (< 160 caractères)
- [x] Keywords pertinents
- [x] URL canonique
- [x] Métadonnées Open Graph
- [x] Twitter Cards

### 📸 Images Open Graph
- [ ] Créer `og-image.jpg` (1200x630)
- [ ] Créer `twitter-image.jpg` (1200x675)
- [ ] Placer les images dans `/public/images/`
- [ ] Tester avec [https://www.opengraph.xyz/](https://www.opengraph.xyz/)

### 🔍 Google Search Console
- [ ] Créer un compte
- [ ] Vérifier la propriété
- [ ] Soumettre le sitemap
- [ ] Configurer le ciblage géographique (Cameroun)
- [ ] Vérifier l'indexation mobile

### 📋 Schema.org
- [x] Organisation
- [x] Site web
- [x] Breadcrumb
- [ ] Tester avec Rich Results Test
- [ ] Tester avec Schema Validator

### 🗺️ Sitemap & Robots
- [x] Sitemap.xml généré
- [x] Robots.txt configuré
- [ ] Soumettre à Google Search Console
- [ ] Soumettre à Bing Webmaster Tools

### 🎯 Optimisations supplémentaires
- [ ] Temps de chargement < 3 secondes
- [ ] Core Web Vitals optimisés
- [ ] Images optimisées (WebP/AVIF)
- [ ] Lazy loading activé
- [ ] Mobile-friendly (responsive)
- [ ] HTTPS activé
- [ ] Certificat SSL valide

### 📊 Analytics & Suivi
- [x] Google Analytics 4 configuré
- [x] Meta Pixel installé
- [x] LinkedIn Insight Tag installé
- [ ] Google Search Console lié à GA4
- [ ] Objectifs de conversion configurés

### 🌍 Contenu
- [ ] Contenu unique et pertinent
- [ ] Balises H1, H2, H3 structurées
- [ ] Textes alt sur toutes les images
- [ ] Liens internes cohérents
- [ ] URLs SEO-friendly (slugs clairs)

---

## 🚀 Prochaines Étapes

### Court terme (Cette semaine)
1. Créer les images OG manquantes
2. Configurer Google Search Console
3. Remplacer le code de vérification Google
4. Tester tous les schémas avec les outils de validation

### Moyen terme (Ce mois)
1. Analyser les Core Web Vitals
2. Optimiser les images existantes
3. Créer du contenu de blog régulier
4. Obtenir des backlinks de qualité

### Long terme (Ce trimestre)
1. Améliorer le positionnement sur les mots-clés cibles
2. Développer une stratégie de contenu
3. Mettre en place le suivi des conversions
4. Optimiser le taux de conversion

---

## 📚 Ressources Utiles

### Outils SEO gratuits
- **Google Search Console**: [https://search.google.com/search-console](https://search.google.com/search-console)
- **Google PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- **Schema.org Validator**: [https://validator.schema.org/](https://validator.schema.org/)
- **Open Graph Debugger**: [https://www.opengraph.xyz/](https://www.opengraph.xyz/)

### Documentation
- Next.js SEO: [https://nextjs.org/learn/seo/introduction-to-seo](https://nextjs.org/learn/seo/introduction-to-seo)
- Schema.org: [https://schema.org/](https://schema.org/)
- Google SEO Guide: [https://developers.google.com/search/docs](https://developers.google.com/search/docs)

---

## ✅ Vérification finale

Avant le lancement en production:

```bash
# 1. Construire le site
npm run build

# 2. Tester en local
npm start

# 3. Vérifier les URLs
# - https://localhost:3000/sitemap.xml
# - https://localhost:3000/robots.txt

# 4. Tester les métadonnées
# Visitez chaque page et inspectez le <head>
```

Utilisez l'extension Chrome **"SEO Meta in 1 Click"** pour vérifier rapidement toutes les métadonnées de chaque page.
