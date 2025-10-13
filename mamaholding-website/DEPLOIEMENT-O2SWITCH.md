# 🚀 GUIDE DE DÉPLOIEMENT SUR O2SWITCH

## ✅ Configuration terminée !

Le site est maintenant prêt à être déployé sur o2switch.

---

## 📋 ÉTAPES DE DÉPLOIEMENT

### **ÉTAPE 1 : Créer le build statique**

Dans votre terminal, dans le dossier du projet :

```bash
npm run build
```

Cette commande va créer un dossier `out/` avec tous les fichiers HTML statiques.

---

### **ÉTAPE 2 : Se connecter à o2switch**

1. Allez sur : **https://www.o2switch.fr/**
2. Cliquez sur **"Mon compte"** ou **"Espace client"**
3. Connectez-vous avec vos identifiants o2switch

---

### **ÉTAPE 3 : Accéder au cPanel**

1. Dans votre espace client, cliquez sur **"Accéder au cPanel"**
2. Ou allez directement sur : `https://votredomaine.com:2083`

---

### **ÉTAPE 4 : Ouvrir le gestionnaire de fichiers**

1. Dans cPanel, cherchez **"Gestionnaire de fichiers"** (File Manager)
2. Cliquez dessus

---

### **ÉTAPE 5 : Aller dans le dossier public_html**

1. Double-cliquez sur le dossier **`public_html`**
2. C'est ici que vous allez mettre les fichiers de votre site

---

### **ÉTAPE 6 : Supprimer les fichiers existants (si nécessaire)**

Si vous avez déjà un site, **faites une sauvegarde** puis :
1. Sélectionnez tous les fichiers dans `public_html`
2. Cliquez sur **"Supprimer"** (Delete)

---

### **ÉTAPE 7 : Uploader vos fichiers**

**Option A : Upload via cPanel (Simple)**

1. Dans le gestionnaire de fichiers, cliquez sur **"Upload"** (Téléverser)
2. Sélectionnez **TOUS les fichiers** du dossier `out/` de votre projet
3. Attendez la fin du téléversement

**Option B : Upload via FTP (Plus rapide pour beaucoup de fichiers)**

1. Téléchargez **FileZilla** : https://filezilla-project.org/
2. Dans cPanel, allez dans **"Comptes FTP"** (FTP Accounts)
3. Créez un compte FTP ou utilisez le principal
4. Connectez-vous avec FileZilla :
   - Hôte : `ftp.votredomaine.com`
   - Identifiant : votre login FTP
   - Mot de passe : votre mot de passe FTP
   - Port : 21
5. Naviguez vers `public_html/`
6. Glissez-déposez tout le contenu du dossier `out/` dans `public_html/`

---

### **ÉTAPE 8 : Vérifier les permissions**

1. Dans le gestionnaire de fichiers, sélectionnez tous les fichiers
2. Clic droit → **"Change Permissions"** (Modifier les permissions)
3. Fichiers : **644**
4. Dossiers : **755**

---

### **ÉTAPE 9 : Tester votre site**

Ouvrez votre navigateur et allez sur :
```
https://votredomaine.com
```

🎉 **Votre site MAMAHOLDING est en ligne !**

---

## 🔧 STRUCTURE DES FICHIERS SUR O2SWITCH

Après l'upload, votre `public_html/` devrait ressembler à :

```
public_html/
├── index.html
├── notre-histoire.html
├── nos-valeurs.html
├── gouvernance.html
├── contact.html
├── espace-presse.html
├── entites/
│   ├── cac.html
│   ├── trinco.html
│   └── ecofood.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
```

---

## ⚙️ CONFIGURATION DU DOMAINE

### Si vous avez un nom de domaine

1. Dans cPanel, allez dans **"Domaines"** (Domains)
2. Ajoutez ou modifiez votre domaine principal
3. Pointez-le vers `public_html/`

### Si vous n'avez pas de domaine

Vous pouvez utiliser le sous-domaine temporaire fourni par o2switch :
```
http://votrecompte.o2switch.net
```

---

## 🔄 MISE À JOUR DU SITE

Quand vous modifiez votre site :

1. Faites les modifications localement
2. Lancez `npm run build`
3. Uploadez **seulement** les fichiers modifiés du dossier `out/` vers o2switch

**Ou** pour tout remplacer :
1. Supprimez le contenu de `public_html/`
2. Uploadez tout le nouveau contenu de `out/`

---

## 📧 CONFIGURER LES EMAILS

Pour que le formulaire de contact fonctionne :

### Option 1 : Utiliser un service tiers (Recommandé)

- **EmailJS** : https://www.emailjs.com/ (Gratuit)
- **Formspree** : https://formspree.io/ (Gratuit)
- **Web3Forms** : https://web3forms.com/ (Gratuit)

### Option 2 : Créer un script PHP sur o2switch

1. Créez un fichier `contact.php` dans `public_html/`
2. Configurez l'envoi d'email avec PHP mail()
3. Modifiez le formulaire pour pointer vers ce script

---

## 🌐 CERTIFICAT SSL (HTTPS)

o2switch offre **Let's Encrypt SSL gratuit** !

1. Dans cPanel, allez dans **"SSL/TLS Status"**
2. Cochez votre domaine
3. Cliquez sur **"Run AutoSSL"**
4. Attendez quelques minutes
5. Votre site sera accessible en HTTPS ! 🔒

---

## 📊 STATISTIQUES ET SUIVI

### Google Analytics

1. Créez un compte sur https://analytics.google.com/
2. Obtenez votre ID de suivi (ex: G-XXXXXXXXXX)
3. Ajoutez-le dans votre code (je peux vous aider)

### o2switch Stats

Dans cPanel, vous avez accès à :
- **AWStats** : Statistiques de visite
- **Webalizer** : Analyses de trafic

---

## 🆘 DÉPANNAGE

### Le site ne s'affiche pas

1. Vérifiez que les fichiers sont dans `public_html/` (pas dans un sous-dossier)
2. Vérifiez qu'il y a un fichier `index.html`
3. Effacez le cache de votre navigateur (Ctrl + F5)

### Erreur 404

1. Vérifiez les permissions (644 pour fichiers, 755 pour dossiers)
2. Vérifiez que tous les fichiers sont uploadés

### Les images ne s'affichent pas

1. Vérifiez que le dossier `images/` est bien uploadé
2. Vérifiez les chemins dans le code
3. Vérifiez les permissions du dossier images (755)

### Le site est lent

1. Activez la **compression GZIP** dans cPanel
2. Utilisez le **cache du navigateur**
3. Optimisez vos images

---

## 📱 OPTIMISATIONS POST-DÉPLOIEMENT

### 1. Fichier .htaccess

Créez un fichier `.htaccess` dans `public_html/` :

```apache
# Activer la compression GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache du navigateur
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Forcer HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 2. robots.txt

Créez un fichier `robots.txt` dans `public_html/` :

```
User-agent: *
Allow: /

Sitemap: https://votredomaine.com/sitemap.xml
```

---

## 📞 SUPPORT O2SWITCH

Si vous rencontrez des problèmes :

- **Email** : support@o2switch.fr
- **Téléphone** : +33 4 44 44 60 40
- **Ticket** : Via votre espace client

o2switch a un excellent support en français ! 🇫🇷

---

## ✅ CHECKLIST FINALE

Avant de dire "C'est en ligne !" :

- [ ] Build créé (`npm run build`)
- [ ] Tous les fichiers du dossier `out/` uploadés
- [ ] Fichier `index.html` présent dans `public_html/`
- [ ] Permissions correctes (644/755)
- [ ] SSL activé (HTTPS)
- [ ] Site accessible sur votre domaine
- [ ] Toutes les pages fonctionnent
- [ ] Images visibles
- [ ] Formulaire de contact configuré
- [ ] Google Analytics ajouté (optionnel)

---

## 🎉 FÉLICITATIONS !

Votre site MAMAHOLDING S.A est maintenant **EN LIGNE** sur o2switch !

**Prochaines étapes** :
1. Testez toutes les pages
2. Partagez votre site
3. Configurez les emails
4. Ajoutez du contenu régulièrement

---

**Développé avec ❤️ pour MAMAHOLDING S.A**
**Hébergé avec o2switch 🇫🇷**
