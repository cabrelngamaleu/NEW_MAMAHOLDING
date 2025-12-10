# Configuration des Analytics pour MAMAHOLDING

Ce guide vous aide à configurer Google Analytics 4, Meta Pixel et LinkedIn Insight Tag pour suivre les performances de votre site web.

## 📊 1. Google Analytics 4 (GA4)

### Configuration
1. **Créer un compte Google Analytics**
   - Allez sur [https://analytics.google.com/](https://analytics.google.com/)
   - Cliquez sur "Commencer" si vous n'avez pas de compte
   - Créez une propriété GA4 (nouvelle génération)

2. **Obtenir votre Measurement ID**
   - Dans GA4, allez dans **Admin** (icône d'engrenage)
   - Sélectionnez votre propriété
   - Cliquez sur **Flux de données** > **Web**
   - Copiez votre **ID de mesure** (format: `G-XXXXXXXXXX`)

3. **Configurer dans l'application**
   - Ouvrez `lib/analytics.config.ts`
   - Remplacez `GA_MEASUREMENT_ID: 'G-XXXXXXXXXX'` par votre ID réel

### Fonctionnalités trackées
- ✅ Pages vues automatiques
- ✅ Événements utilisateur
- ✅ Conversions
- ✅ Données démographiques

---

## 📱 2. Meta Pixel (Facebook/Instagram)

### Configuration
1. **Créer un Meta Pixel**
   - Allez sur [https://business.facebook.com/events_manager](https://business.facebook.com/events_manager)
   - Créez un nouveau pixel si vous n'en avez pas
   - Donnez-lui un nom (ex: "MAMAHOLDING Website")

2. **Obtenir votre Pixel ID**
   - Dans Events Manager, sélectionnez votre pixel
   - Copiez le **Pixel ID** (15-16 chiffres)

3. **Configurer dans l'application**
   - Ouvrez `lib/analytics.config.ts`
   - Remplacez `META_PIXEL_ID: '000000000000000'` par votre Pixel ID

### Événements trackés
- ✅ PageView (automatique)
- ✅ Lead (formulaire de contact)
- ✅ ViewContent
- Personnalisable dans le code

### Tester le Pixel
1. Installez l'extension Chrome "Meta Pixel Helper"
2. Visitez votre site
3. Vérifiez que le pixel se déclenche correctement

---

## 💼 3. LinkedIn Insight Tag

### Configuration
1. **Créer un Insight Tag**
   - Allez sur [https://www.linkedin.com/campaignmanager/](https://www.linkedin.com/campaignmanager/)
   - Sélectionnez votre compte publicitaire
   - Allez dans **Insight Tag** > **View Tag**

2. **Obtenir votre Partner ID**
   - Copiez le **Partner ID** (6-7 chiffres)
   - Format exemple: `1234567`

3. **Configurer dans l'application**
   - Ouvrez `lib/analytics.config.ts`
   - Remplacez `LINKEDIN_PARTNER_ID: '0000000'` par votre Partner ID

### Fonctionnalités
- ✅ Suivi des conversions
- ✅ Remarketing
- ✅ Insights démographiques B2B
- ✅ Suivi des leads

### Tester l'Insight Tag
1. Installez l'extension Chrome "LinkedIn Insight Tag Helper"
2. Visitez votre site
3. Vérifiez que le tag se déclenche

---

## 🔧 Fichier de Configuration

Votre fichier `lib/analytics.config.ts` devrait ressembler à ceci une fois configuré :

```typescript
export const ANALYTICS_CONFIG = {
  GA_MEASUREMENT_ID: 'G-ABC123XYZ',           // Votre ID Google Analytics
  META_PIXEL_ID: '123456789012345',           // Votre Meta Pixel ID
  LINKEDIN_PARTNER_ID: '1234567',             // Votre LinkedIn Partner ID
}

export const ENABLE_ANALYTICS_IN_DEV = false  // false pour éviter de polluer vos stats en dev
```

---

## 🔍 Vérification de l'Installation

### Google Analytics
1. Dans GA4, allez dans **Rapports** > **Temps réel**
2. Visitez votre site
3. Vous devriez voir votre visite en temps réel

### Meta Pixel
1. Dans Events Manager, allez dans **Test Events**
2. Entrez l'URL de votre site
3. Visitez différentes pages
4. Vérifiez que les événements apparaissent

### LinkedIn Insight Tag
1. Dans Campaign Manager, allez dans **Insight Tag**
2. Cliquez sur **Test your tag**
3. Suivez les instructions

---

## 🎯 Événements Personnalisés

### Suivre une soumission de formulaire
```typescript
// Dans votre formulaire de contact
if (typeof window.fbq !== 'undefined') {
  window.fbq('track', 'Lead')
}

// Pour LinkedIn
if (typeof window.lintrk !== 'undefined') {
  window.lintrk('track', { conversion_id: YOUR_CONVERSION_ID })
}
```

### Suivre un clic sur le bouton WhatsApp
```typescript
// Dans WhatsAppButton.tsx
if (typeof window.gtag !== 'undefined') {
  window.gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Button',
  })
}
```

---

## 📈 Métriques Importantes à Suivre

### Google Analytics
- Taux de rebond
- Durée moyenne des sessions
- Pages les plus visitées
- Conversions (formulaires)

### Meta Pixel
- Coût par lead
- Taux de conversion
- Retour sur investissement publicitaire (ROAS)

### LinkedIn Insight Tag
- Démographie des visiteurs B2B
- Secteurs d'activité
- Fonctions professionnelles
- Taux de conversion B2B

---

## 🔐 Confidentialité & RGPD

⚠️ **Important**: Assurez-vous d'avoir :
1. Une politique de confidentialité mise à jour
2. Un bandeau de consentement aux cookies
3. La conformité RGPD pour le marché européen

### Recommandation
Utilisez un outil de gestion de consentement comme :
- Axeptio
- Cookiebot
- OneTrust

---

## 🆘 Support

### Google Analytics
- Documentation: [https://support.google.com/analytics](https://support.google.com/analytics)
- Community: [https://support.google.com/analytics/community](https://support.google.com/analytics/community)

### Meta Pixel
- Documentation: [https://developers.facebook.com/docs/meta-pixel](https://developers.facebook.com/docs/meta-pixel)
- Support: [https://www.facebook.com/business/help](https://www.facebook.com/business/help)

### LinkedIn Insight Tag
- Documentation: [https://business.linkedin.com/marketing-solutions/insight-tag](https://business.linkedin.com/marketing-solutions/insight-tag)
- Support: Campaign Manager Help Center

---

## ✅ Checklist de Vérification

- [ ] Google Analytics configuré et vérifié en temps réel
- [ ] Meta Pixel installé et testé avec Pixel Helper
- [ ] LinkedIn Insight Tag installé et testé
- [ ] Événements personnalisés ajoutés (formulaires, boutons)
- [ ] Politique de confidentialité mise à jour
- [ ] Bandeau de consentement aux cookies installé
- [ ] Tests effectués sur différents navigateurs
- [ ] Google Search Console connecté à GA4
