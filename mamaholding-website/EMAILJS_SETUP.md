# Configuration EmailJS pour le Formulaire de Contact

## Étapes de Configuration

### 1. Créer un Compte EmailJS (Gratuit)
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Cliquez sur "Sign Up" pour créer un compte gratuit
- Plan gratuit : 200 emails/mois

### 2. Ajouter un Service Email
1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID** (ex: `service_xxxxx`)

### 3. Créer un Template d'Email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Sujet: 
Nouveau message de {{from_name}} - {{subject}}

Corps du message:
═══════════════════════════════════════════
📧 NOUVEAU MESSAGE DEPUIS LE SITE WEB
═══════════════════════════════════════════

👤 INFORMATIONS DU CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom complet: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Sujet: {{subject}}

📝 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

═══════════════════════════════════════════
Envoyé depuis mamaholding.net
```

4. Sauvegardez et notez votre **Template ID** (ex: `template_xxxxx`)

### 4. Obtenir votre Public Key
1. Allez dans **Account** > **General**
2. Trouvez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurer l'Application
Ouvrez le fichier `lib/emailjs.config.ts` et remplacez :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Remplacez par votre Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Remplacez par votre Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // Remplacez par votre Public Key
}
```

Par vos identifiants réels :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',
  TEMPLATE_ID: 'template_xyz789',
  PUBLIC_KEY: 'UZfXX_ABC123xyz',
}
```

### 6. Tester le Formulaire
1. Lancez l'application : `npm run dev`
2. Allez sur `/contact`
3. Remplissez et envoyez le formulaire
4. Vérifiez la réception de l'email

## Sécurité
- ✅ La Public Key peut être exposée côté client (c'est normal)
- ✅ EmailJS gère les limites de taux et la protection anti-spam
- ✅ Aucune API key secrète n'est exposée

## Limites du Plan Gratuit
- 200 emails par mois
- Support email standard
- Tous les fournisseurs d'email supportés

## Alternative : Formspree
Si vous préférez Formspree :
1. Allez sur [https://formspree.io/](https://formspree.io/)
2. Créez un formulaire
3. Remplacez le code du formulaire avec l'endpoint Formspree

## Support
- Documentation EmailJS : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Email de contact MAMAHOLDING : drh@mamaholding.net
