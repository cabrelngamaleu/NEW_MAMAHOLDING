# 🚀 COMMENT LANCER VOTRE SITE MAMAHOLDING

## ✅ Le site est PRÊT !

Toutes les pages ont été compilées avec succès :
- ✅ Page d'accueil (/)
- ✅ Notre Histoire
- ✅ Nos Valeurs  
- ✅ Gouvernance
- ✅ CAC
- ✅ TRINCO
- ✅ ECOFOOD
- ✅ Espace Presse
- ✅ Contact
- ✅ Pages d'erreur

---

## 🎯 MÉTHODE 1 : Lancer en Mode Développement

### Sur Windows :
```cmd
cd C:\workspace\mamaholding-website
npm run dev
```

### Sur Mac/Linux :
```bash
cd /workspace/mamaholding-website
npm run dev
```

### Puis ouvrez votre navigateur :
```
http://localhost:3000
```

**Le serveur reste actif** - Pour l'arrêter, appuyez sur `Ctrl+C`

---

## 🌐 MÉTHODE 2 : Lancer en Mode Production

```bash
cd /workspace/mamaholding-website
npm run build
npm start
```

Puis ouvrez : `http://localhost:3000`

---

## 🚀 MÉTHODE 3 : Déployer en Ligne (GRATUIT)

### Option A : Vercel (Recommandé)

1. Créez un compte gratuit sur https://vercel.com
2. Installez Vercel CLI :
```bash
npm install -g vercel
```
3. Déployez :
```bash
cd /workspace/mamaholding-website
vercel
```
4. Suivez les instructions
5. **Votre site sera en ligne en 2 minutes !**

### Option B : Netlify

1. Compte gratuit sur https://netlify.com
2. Drag & drop le dossier `mamaholding-website`
3. Site en ligne !

### Option C : GitHub Pages

1. Créez un repo GitHub
2. Poussez le code
3. Activez GitHub Pages
4. Site en ligne !

---

## 📱 TESTER SUR DIFFÉRENTS APPAREILS

Une fois le site lancé sur `http://localhost:3000` :

### Tester sur Mobile :
- Ouvrez les DevTools de Chrome (F12)
- Cliquez sur l'icône mobile
- Sélectionnez iPhone, Samsung, etc.

### Tester sur Tablette :
- DevTools → iPad Pro, iPad, etc.

### Tester sur Desktop :
- Changez la résolution
- Testez différentes tailles de fenêtre

---

## 🔧 COMMANDES UTILES

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Créer un build de production
npm run build

# Lancer la production
npm start

# Nettoyer et réinstaller
rm -rf .next node_modules
npm install
```

---

## 🌟 CE QUE VOUS VERREZ

### Page d'accueil (/)
- ✨ Slider automatique avec 3 slides
- 📊 Section "Qui sommes-nous"
- 🎯 Chiffres clés animés
- 💎 Nos 4 valeurs principales
- 🏢 3 entités (CAC, TRINCO, ECOFOOD)
- 📰 Actualités récentes
- 📞 Call-to-action

### Navigation
- Menu principal avec dropdowns
- Logo MAMAHOLDING cliquable
- Menu mobile hamburger
- Footer complet avec liens

### Pages Entités
- Bannière colorée
- Services et atouts
- Chiffres clés
- Call-to-action

### Et bien plus !

---

## 📝 PERSONNALISATION RAPIDE

### 1. Changer les informations de contact

Éditez `components/Footer.tsx` et `app/contact/page.tsx` :
```tsx
// Cherchez et remplacez :
'+XXX XX XX XX XX' → '+237 XX XX XX XX'
'contact@mamaholding.com' → 'votre-email@mamaholding.com'
'Adresse du siège social' → '123 Rue Example, Douala'
```

### 2. Ajouter vos images

Placez vos images dans `public/images/` :
```
public/
  images/
    logo.png
    cac-photo.jpg
    trinco-photo.jpg
    ecofood-photo.jpg
    equipe.jpg
```

### 3. Modifier les textes

Ouvrez les fichiers dans `app/` et modifiez les textes :
- `app/page.tsx` - Accueil
- `app/notre-histoire/page.tsx` - Histoire
- `app/nos-valeurs/page.tsx` - Valeurs
- etc.

---

## 🆘 EN CAS DE PROBLÈME

### Le site ne se lance pas :
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Erreur de build :
```bash
npm run build
```
Lisez l'erreur et corrigez le fichier indiqué.

### Port 3000 déjà utilisé :
```bash
# Utilisez un autre port
PORT=3001 npm run dev
```

---

## ✅ CHECKLIST AVANT DE DÉPLOYER

- [ ] Toutes les informations de contact sont correctes
- [ ] Les images sont de bonne qualité
- [ ] Les textes sont personnalisés
- [ ] Le site fonctionne sur mobile/tablette/desktop
- [ ] Le formulaire de contact est configuré
- [ ] Les liens sociaux sont corrects
- [ ] Pas d'erreurs dans la console

---

## 🎉 VOTRE SITE EST PRÊT !

**Prochaines étapes :**

1. 🚀 Lancez `npm run dev`
2. 🌐 Ouvrez `http://localhost:3000`
3. ✏️ Personnalisez les contenus
4. 🖼️ Ajoutez vos images
5. ☁️ Déployez sur Vercel
6. 📢 Partagez votre site !

---

**Bonne chance avec MAMAHOLDING S.A ! 🎊**
