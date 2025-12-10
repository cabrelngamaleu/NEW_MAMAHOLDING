// Configuration EmailJS
// Pour obtenir vos identifiants, créez un compte gratuit sur https://www.emailjs.com/
// 1. Créez un service email (Gmail, Outlook, etc.)
// 2. Créez un template d'email
// 3. Récupérez votre Public Key depuis Account > General

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // À remplacer avec votre Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // À remplacer avec votre Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // À remplacer avec votre Public Key
}

// Template EmailJS recommandé :
// Sujet: Nouveau message de {{from_name}}
// Corps:
// Nom: {{from_name}}
// Email: {{from_email}}
// Téléphone: {{phone}}
// Sujet: {{subject}}
// Message: {{message}}
