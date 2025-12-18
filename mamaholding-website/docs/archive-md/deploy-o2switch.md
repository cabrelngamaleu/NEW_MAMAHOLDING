# 🚀 Guide de Déploiement sur O2Switch

## 📋 Prérequis

- Compte O2Switch actif
- Accès FTP/SFTP à votre hébergement
- Node.js installé sur votre machine locale

## 🔧 Configuration du Projet

Votre projet est déjà configuré pour le déploiement statique avec :
- ✅ `output: 'export'` dans `next.config.js`
- ✅ Fichier `.htaccess` optimisé pour Apache
- ✅ Images non optimisées pour compatibilité statique

## 📦 Étapes de Déploiement

### 1. Build du Projet

```bash
# Dans le dossier du projet
cd mamaholding-website

# Installer les dépendances (si pas déjà fait)
npm install

# Générer le build de production
npm run build
```

Cette commande va créer un dossier `out/` contenant tous les fichiers statiques.

### 2. Préparation des Fichiers

Après le build, vous aurez :
```
out/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── images/
├── .htaccess
└── [autres pages].html
```

### 3. Upload sur O2Switch

#### Option A : Via FTP/SFTP (Recommandé)

1. **Connectez-vous à votre espace O2Switch**
   - Utilisez un client FTP comme FileZilla
   - Hôte : `ftp.votre-domaine.com` ou l'IP fournie par O2Switch
   - Port : 21 (FTP) ou 22 (SFTP)
   - Identifiants : ceux fournis par O2Switch

2. **Naviguez vers le dossier public**
   - Allez dans `/www/` ou `/public_html/` selon votre configuration

3. **Uploadez tous les fichiers**
   - Sélectionnez TOUT le contenu du dossier `out/`
   - Glissez-déposez vers le dossier public de votre hébergement
   - ⚠️ **Important** : Uploadez aussi le fichier `.htaccess`

#### Option B : Via le Gestionnaire de Fichiers O2Switch

1. Connectez-vous à votre espace client O2Switch
2. Allez dans "Gestionnaire de fichiers"
3. Naviguez vers le dossier public
4. Uploadez le contenu du dossier `out/`

### 4. Vérification

1. Visitez votre site : `https://votre-domaine.com`
2. Testez toutes les pages principales
3. Vérifiez que les images se chargent correctement
4. Testez la navigation

## 🔧 Configuration Domaine

### Si vous utilisez un sous-domaine

1. Dans votre espace O2Switch, créez un sous-domaine
2. Pointez-le vers le bon dossier
3. Uploadez les fichiers dans ce dossier

### Si vous changez de domaine

1. Modifiez les URLs dans votre code si nécessaire
2. Rebuild le projet
3. Re-uploadez les fichiers

## 🚨 Dépannage

### Problème : Pages 404

**Solution :** Vérifiez que le fichier `.htaccess` est bien uploadé et que les règles de réécriture fonctionnent.

### Problème : Images ne se chargent pas

**Solution :** Vérifiez que le dossier `_next/static/` est bien uploadé avec tous ses sous-dossiers.

### Problème : Styles CSS manquants

**Solution :** Vérifiez que tous les fichiers dans `_next/static/css/` sont présents.

### Problème : Site lent

**Solution :** Le fichier `.htaccess` inclut déjà la compression GZIP et la mise en cache.

## 🔄 Mise à Jour du Site

Pour mettre à jour votre site :

1. Modifiez votre code localement
2. Relancez `npm run build`
3. Uploadez seulement les fichiers modifiés (ou tout le dossier `out/`)

## 📱 Optimisations Incluses

- ✅ Compression GZIP activée
- ✅ Cache des fichiers statiques (1 an)
- ✅ Headers de sécurité
- ✅ Redirection HTTPS (à activer si certificat SSL)
- ✅ Gestion des erreurs 404
- ✅ Protection des fichiers sensibles

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs d'erreur dans votre espace O2Switch
2. Testez le site en local avec `npm run build && npx serve out`
3. Contactez le support O2Switch si nécessaire

## 📊 Performance

Votre site sera optimisé avec :
- Chargement rapide grâce à la compression
- Cache navigateur optimisé
- Images optimisées
- Code minifié par Next.js

---

**🎉 Votre site MAMAHOLDING est maintenant prêt pour O2Switch !**
