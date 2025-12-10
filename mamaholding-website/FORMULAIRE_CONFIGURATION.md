# 📧 Configuration du Formulaire de Contact

## ✅ Ce Qui Est Déjà Fait

- ✅ API Route créée (`/app/api/contact/route.ts`)
- ✅ Formulaire connecté à l'API
- ✅ Validation des données
- ✅ Design responsive et animé
- ✅ Messages de confirmation/erreur
- ✅ Email HTML professionnel avec le branding MAMAHOLDING

---

## 🔧 Configuration Requise (5 minutes)

### Étape 1 : Créer un Fichier `.env.local`

Dans le dossier racine du projet, créez un fichier `.env.local` :

```bash
# Configuration Email pour le formulaire de contact

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application
EMAIL_FROM=votre.email@gmail.com
EMAIL_TO=drh@mamaholding.net
```

---

## 📧 Option 1 : Utiliser Gmail (Recommandé - Gratuit)

### Étape 1.1 : Activer l'Authentification à Deux Facteurs

1. Allez sur [myaccount.google.com](https://myaccount.google.com)
2. Cliquez sur **Sécurité** (menu gauche)
3. Activez **Validation en deux étapes**

### Étape 1.2 : Générer un Mot de Passe d'Application

1. Toujours dans **Sécurité** → **Validation en deux étapes**
2. Descendez jusqu'à **Mots de passe des applications**
3. Cliquez sur **Créer** ou **Générer un mot de passe**
4. Sélectionnez :
   - **Application** : Autre (personnalisé)
   - **Nom** : MAMAHOLDING Website
5. Cliquez sur **Générer**
6. **Copiez le mot de passe de 16 caractères** (format : xxxx xxxx xxxx xxxx)

### Étape 1.3 : Configurer `.env.local`

```bash
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=votre.email@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
EMAIL_FROM=votre.email@gmail.com
EMAIL_TO=drh@mamaholding.net
```

> ⚠️ **Important** : Ne partagez JAMAIS ce mot de passe et ne le commitez JAMAIS sur Git !

---

## 📧 Option 2 : Utiliser Outlook/Office 365

### Configuration `.env.local` :

```bash
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=votre.email@outlook.com
EMAIL_PASS=votre_mot_de_passe
EMAIL_FROM=votre.email@outlook.com
EMAIL_TO=drh@mamaholding.net
```

---

## 📧 Option 3 : Email Professionnel MAMAHOLDING

Si vous avez déjà un serveur email professionnel :

```bash
EMAIL_HOST=mail.mamaholding.net
EMAIL_PORT=587
EMAIL_USER=noreply@mamaholding.net
EMAIL_PASS=votre_mot_de_passe_securise
EMAIL_FROM=noreply@mamaholding.net
EMAIL_TO=drh@mamaholding.net
```

> 💡 **Astuce** : Utilisez un email comme `noreply@mamaholding.net` ou `contact@mamaholding.net` pour l'envoi.

---

## 🧪 Test du Formulaire

### Étape 1 : Redémarrer le Serveur

Après avoir créé `.env.local`, redémarrez :

```bash
# Arrêter le serveur (Ctrl + C)
npm run dev
```

### Étape 2 : Tester l'Envoi

1. Allez sur http://localhost:3000/contact
2. Remplissez le formulaire avec vos vraies informations
3. Cliquez sur **Envoyer le Message**
4. Vérifiez :
   - ✅ Notification de succès s'affiche
   - ✅ Email reçu sur `drh@mamaholding.net`
   - ✅ Email de confirmation reçu sur l'adresse saisie

---

## 📋 Ce Qui Se Passe Lors de l'Envoi

### 1. L'utilisateur soumet le formulaire
```
Nom : Jean Dupont
Email : jean@exemple.com
Message : Je voudrais un devis...
```

### 2. L'API valide les données
- ✅ Vérification des champs obligatoires
- ✅ Validation du format email
- ✅ Protection contre le spam

### 3. Deux emails sont envoyés

**Email 1 : À MAMAHOLDING (drh@mamaholding.net)**
```
De : votre.email@gmail.com
À : drh@mamaholding.net
Sujet : [Site Web MAMAHOLDING] Demande d'information

Contenu :
📧 Nouveau Message du Site Web
👤 Nom : Jean Dupont
✉️ Email : jean@exemple.com
📱 Téléphone : +237 XXX XX XX XX
💬 Message : Je voudrais un devis...
```

**Email 2 : Confirmation à l'utilisateur**
```
De : votre.email@gmail.com
À : jean@exemple.com
Sujet : Confirmation de réception - MAMAHOLDING S.A

Contenu :
✅ Message Bien Reçu !
Bonjour Jean,
Nous avons bien reçu votre message...
Notre équipe vous répondra sous 24-48h...
```

---

## 🔒 Sécurité

### Fichiers Protégés

Le fichier `.env.local` est automatiquement ignoré par Git grâce à `.gitignore`.

**Ne committez JAMAIS :**
- ❌ `.env.local`
- ❌ Mots de passe
- ❌ Clés API

### Variables d'Environnement en Production

Lors du déploiement sur Vercel/Netlify :

1. Ajoutez les variables dans le tableau de bord
2. Format : `EMAIL_HOST`, `EMAIL_USER`, etc.
3. Les mêmes valeurs que `.env.local`

---

## 🐛 Dépannage

### Erreur : "Impossible d'envoyer le message"

**Causes possibles :**
1. ❌ `.env.local` n'existe pas
2. ❌ Mot de passe d'application incorrect
3. ❌ Authentification Gmail non activée
4. ❌ Serveur pas redémarré après création `.env.local`

**Solutions :**
1. ✅ Vérifiez que `.env.local` existe à la racine
2. ✅ Générez un nouveau mot de passe d'application
3. ✅ Activez l'authentification à deux facteurs
4. ✅ Redémarrez : `npm run dev`

### Erreur : "Invalid login"

- Vérifiez `EMAIL_USER` et `EMAIL_PASS`
- Utilisez un mot de passe d'application (pas votre mot de passe Gmail normal)

### L'email n'arrive pas

1. Vérifiez les **spams** de `drh@mamaholding.net`
2. Vérifiez que `EMAIL_TO` est correct
3. Testez avec un autre email de destination

---

## 📊 Avantages de Cette Solution

| Aspect | Détail |
|--------|--------|
| **Coût** | 💰 Gratuit (utilise Gmail) |
| **Fiabilité** | ✅ Nodemailer = Standard industrie |
| **Sécurité** | 🔒 Identifiants côté serveur uniquement |
| **Design** | 🎨 Emails HTML avec branding MAMAHOLDING |
| **Confirmation** | ✅ Email automatique à l'utilisateur |
| **Limite** | 📈 Pas de limite artificielle |

---

## 🚀 Prochaines Étapes

Une fois le formulaire fonctionnel :

1. ✅ Testez avec plusieurs adresses email
2. ✅ Vérifiez les emails de confirmation
3. ✅ Assurez-vous que les emails arrivent bien sur `drh@mamaholding.net`
4. ✅ Préparez le déploiement en production

---

## 💡 Conseil Pro

Pour un email encore plus professionnel :
- Utilisez `contact@mamaholding.net` ou `noreply@mamaholding.net`
- Contactez votre hébergeur email pour obtenir les paramètres SMTP
- Configurez SPF/DKIM pour améliorer la délivrabilité

---

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes :
1. Vérifiez la console du serveur (`npm run dev`)
2. Vérifiez la console du navigateur (F12)
3. Consultez ce guide étape par étape

---

**Le formulaire est maintenant prêt à être utilisé ! 🎉**
