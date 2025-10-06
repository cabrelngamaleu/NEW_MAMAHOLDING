# 🪟 GUIDE D'INSTALLATION SUR WINDOWS

## 🎯 VOTRE SITUATION

Vous êtes sur **Windows** et le projet a été créé dans un environnement Linux distant.
Pour utiliser le projet sur votre PC Windows, suivez ce guide !

---

## 📥 ÉTAPE 1 : TÉLÉCHARGER LE PROJET

### Le fichier ZIP est prêt !

📦 **Fichier créé** : `mamaholding-website.zip`
📍 **Emplacement** : `/workspace/mamaholding-website.zip`

### Comment télécharger ?

**Si vous êtes dans un environnement cloud/distant :**
- Utilisez votre interface de téléchargement de fichiers
- Ou copiez le dossier via SFTP/SCP

**Téléchargez le fichier** `mamaholding-website.zip` sur votre ordinateur Windows.

---

## 💻 ÉTAPE 2 : PRÉPARER VOTRE PC WINDOWS

### Installer Node.js (Si pas déjà installé)

1. Allez sur : https://nodejs.org/
2. Téléchargez la version **LTS** (Long Term Support)
3. Installez Node.js (suivez l'assistant d'installation)
4. Redémarrez votre PC

### Vérifier l'installation

Ouvrez **PowerShell** ou **CMD** et tapez :
```powershell
node --version
npm --version
```

Vous devriez voir les versions (ex: v18.x.x et 9.x.x)

---

## 📂 ÉTAPE 3 : EXTRAIRE LE PROJET

1. **Créez un dossier** sur votre PC, par exemple :
   ```
   C:\Users\VotreNom\Documents\MesProjets\
   ```

2. **Décompressez** le fichier `mamaholding-website.zip` dans ce dossier

3. Vous aurez :
   ```
   C:\Users\VotreNom\Documents\MesProjets\mamaholding-website\
   ```

---

## 🚀 ÉTAPE 4 : INSTALLER LES DÉPENDANCES

1. **Ouvrez PowerShell** (ou CMD)

2. **Naviguez vers le dossier** du projet :
   ```powershell
   cd C:\Users\VotreNom\Documents\MesProjets\mamaholding-website
   ```

3. **Installez les dépendances** :
   ```powershell
   npm install
   ```

   ⏳ Cette étape peut prendre 2-5 minutes.

---

## 🎉 ÉTAPE 5 : LANCER LE SITE

Une fois les dépendances installées :

```powershell
npm run dev
```

Puis ouvrez votre navigateur et allez sur :
```
http://localhost:3000
```

**🎊 Votre site MAMAHOLDING sera visible !**

---

## 📝 COMMANDES WINDOWS

### Navigation dans les dossiers

```powershell
# Voir où vous êtes
pwd

# Aller dans un dossier
cd C:\chemin\vers\dossier

# Voir les fichiers du dossier actuel
dir

# Ou avec ls (PowerShell)
ls
```

### Lancer le projet

```powershell
# Mode développement (avec hot reload)
npm run dev

# Créer un build de production
npm run build

# Lancer en production
npm start
```

### Arrêter le serveur

Appuyez sur **Ctrl + C** dans le terminal

---

## 🛠️ ALTERNATIVE : CRÉER LE PROJET DIRECTEMENT SUR WINDOWS

Si vous ne pouvez pas télécharger le fichier ZIP, vous pouvez recréer le projet :

### 1. Créer le projet Next.js

```powershell
# Créer un nouveau dossier
mkdir C:\MesProjets
cd C:\MesProjets

# Créer le projet Next.js
npx create-next-app@latest mamaholding-website --typescript --tailwind --app --no-src-dir --import-alias "@/*" --use-npm
```

### 2. Installer les dépendances supplémentaires

```powershell
cd mamaholding-website
npm install framer-motion react-icons swiper
```

### 3. Copier les fichiers

Je peux vous fournir le contenu de chaque fichier que vous copierez manuellement.

---

## 📋 STRUCTURE SUR WINDOWS

Votre projet devrait ressembler à ça sur Windows :

```
C:\Users\VotreNom\Documents\MesProjets\mamaholding-website\
├── app\
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── notre-histoire\
│   ├── nos-valeurs\
│   ├── gouvernance\
│   ├── contact\
│   ├── espace-presse\
│   └── entites\
│       ├── cac\
│       ├── trinco\
│       └── ecofood\
├── components\
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Hero.tsx
├── public\
├── node_modules\
├── package.json
└── [autres fichiers]
```

---

## 🎨 OUVRIR AVEC UN ÉDITEUR

### Visual Studio Code (Recommandé)

1. Téléchargez VS Code : https://code.visualstudio.com/
2. Installez-le
3. Ouvrez VS Code
4. File → Open Folder
5. Sélectionnez : `C:\...\mamaholding-website`

Ou depuis PowerShell :
```powershell
cd C:\...\mamaholding-website
code .
```

---

## ❓ PROBLÈMES COURANTS SUR WINDOWS

### Erreur "execution policy"

Si vous avez une erreur de politique d'exécution :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port 3000 déjà utilisé

```powershell
# Utiliser un autre port
$env:PORT=3001
npm run dev
```

### Node.js pas reconnu

Redémarrez votre PC après l'installation de Node.js

### npm install échoue

```powershell
# Nettoyer le cache
npm cache clean --force

# Réessayer
npm install
```

---

## 📍 CHEMINS WINDOWS vs LINUX

| Linux | Windows |
|-------|---------|
| `/workspace/` | `C:\Users\VotreNom\` |
| `/home/user/` | `C:\Users\VotreNom\` |
| `cd /path/to/folder` | `cd C:\chemin\vers\dossier` |
| `ls` | `dir` ou `ls` (PowerShell) |
| `/` (slash) | `\` (backslash) |

---

## ✅ CHECKLIST

- [ ] Node.js installé (v18+)
- [ ] npm installé
- [ ] Fichier ZIP téléchargé
- [ ] Projet extrait dans un dossier
- [ ] npm install exécuté
- [ ] npm run dev lancé
- [ ] Site visible sur http://localhost:3000

---

## 🆘 BESOIN D'AIDE ?

Si vous rencontrez un problème :

1. Copiez le message d'erreur complet
2. Indiquez quelle commande vous avez tapée
3. Partagez-moi ces informations

---

## 🎉 PROCHAINES ÉTAPES

Une fois le site lancé sur Windows :

1. ✏️ Personnalisez les textes
2. 🖼️ Ajoutez vos images dans `public\images\`
3. 🎨 Modifiez les couleurs si besoin
4. 🌐 Déployez sur Vercel (gratuit)

---

**Bon courage ! Le site sera bientôt sur votre PC Windows ! 🚀**
