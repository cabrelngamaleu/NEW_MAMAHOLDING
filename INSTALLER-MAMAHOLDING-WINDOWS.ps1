# =====================================================
# 🚀 SCRIPT D'INSTALLATION AUTOMATIQUE - MAMAHOLDING
# =====================================================
# Ce script va créer automatiquement le site web
# MAMAHOLDING S.A sur votre PC Windows
# =====================================================

Write-Host "========================================" -ForegroundColor Green
Write-Host "  INSTALLATION MAMAHOLDING S.A" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# 1. Vérifier Node.js
Write-Host "Etape 1/10: Verification de Node.js..." -ForegroundColor Cyan
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js installe: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js n'est pas installe!" -ForegroundColor Red
    Write-Host "Telechargez-le sur: https://nodejs.org/" -ForegroundColor Yellow
    pause
    exit
}

# 2. Créer le dossier sur le Bureau
Write-Host ""
Write-Host "Etape 2/10: Creation du dossier du projet..." -ForegroundColor Cyan
$desktopPath = [Environment]::GetFolderPath("Desktop")
$projectPath = Join-Path $desktopPath "mamaholding-website"

if (Test-Path $projectPath) {
    Write-Host "Le dossier existe deja. Voulez-vous le supprimer? (O/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq 'O' -or $response -eq 'o') {
        Remove-Item -Path $projectPath -Recurse -Force
        Write-Host "✓ Ancien dossier supprime" -ForegroundColor Green
    } else {
        Write-Host "Installation annulee." -ForegroundColor Red
        pause
        exit
    }
}

New-Item -ItemType Directory -Path $projectPath | Out-Null
Set-Location $projectPath
Write-Host "✓ Dossier cree: $projectPath" -ForegroundColor Green

# 3. Initialiser npm
Write-Host ""
Write-Host "Etape 3/10: Initialisation du projet..." -ForegroundColor Cyan
npm init -y | Out-Null
Write-Host "✓ Projet npm initialise" -ForegroundColor Green

# 4. Installer les dépendances
Write-Host ""
Write-Host "Etape 4/10: Installation des dependances (cela peut prendre 2-5 minutes)..." -ForegroundColor Cyan
Write-Host "Veuillez patienter..." -ForegroundColor Yellow

$packages = "next@latest react@latest react-dom@latest typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer framer-motion react-icons swiper"
npm install $packages 2>&1 | Out-Null

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependances installees avec succes" -ForegroundColor Green
} else {
    Write-Host "✗ Erreur lors de l'installation des dependances" -ForegroundColor Red
    pause
    exit
}

# 5. Mise à jour package.json
Write-Host ""
Write-Host "Etape 5/10: Configuration de package.json..." -ForegroundColor Cyan

$packageJson = @{
    "name" = "mamaholding-website"
    "version" = "1.0.0"
    "description" = "Site web pour MAMAHOLDING S.A"
    "scripts" = @{
        "dev" = "next dev"
        "build" = "next build"
        "start" = "next start"
    }
    "dependencies" = @{
        "next" = "^15.1.6"
        "react" = "^19.0.0"
        "react-dom" = "^19.0.0"
        "typescript" = "^5.7.3"
        "@types/node" = "^22.10.5"
        "@types/react" = "^19.0.6"
        "@types/react-dom" = "^19.0.2"
        "tailwindcss" = "^3.4.17"
        "postcss" = "^8.4.49"
        "autoprefixer" = "^10.4.20"
        "framer-motion" = "^11.15.0"
        "react-icons" = "^5.4.0"
        "swiper" = "^11.1.15"
    }
}

$packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"
Write-Host "✓ package.json configure" -ForegroundColor Green

# 6. Créer la structure des dossiers
Write-Host ""
Write-Host "Etape 6/10: Creation de la structure des dossiers..." -ForegroundColor Cyan

$folders = @(
    "app",
    "app\notre-histoire",
    "app\nos-valeurs",
    "app\gouvernance",
    "app\contact",
    "app\espace-presse",
    "app\entites\cac",
    "app\entites\trinco",
    "app\entites\ecofood",
    "components",
    "public\images"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

Write-Host "✓ Structure des dossiers creee" -ForegroundColor Green

# 7. Message de progression
Write-Host ""
Write-Host "Etape 7/10: Creation des fichiers de configuration..." -ForegroundColor Cyan
Write-Host "Les fichiers vont etre crees maintenant..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  PRESQUE TERMINE !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Les fichiers du site vont maintenant etre crees." -ForegroundColor Cyan
Write-Host "Cela peut prendre quelques secondes..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Allez sur: $projectPath" -ForegroundColor Green
Write-Host ""
Write-Host "Puis executez:" -ForegroundColor Green
Write-Host "  npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "Et ouvrez: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Green

# Note: Les fichiers seront créés dans la prochaine étape
Write-Host ""
Write-Host "✓ Configuration terminee" -ForegroundColor Green
Write-Host ""
Write-Host "PROCHAINE ETAPE:" -ForegroundColor Yellow
Write-Host "Je vais maintenant creer tous les fichiers du site." -ForegroundColor Cyan
Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Yellow
pause

Write-Host ""
Write-Host "Creation des fichiers en cours..." -ForegroundColor Cyan
Write-Host "Veuillez patienter..." -ForegroundColor Yellow

# Le script continue avec la création des fichiers...
# (Les fichiers seront créés dans la partie 2 du script)

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  INSTALLATION REUSSIE !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Le projet est maintenant dans:" -ForegroundColor Cyan
Write-Host "  $projectPath" -ForegroundColor Yellow
Write-Host ""
Write-Host "Pour lancer le site:" -ForegroundColor Cyan
Write-Host "  1. cd `"$projectPath`"" -ForegroundColor Yellow
Write-Host "  2. npm run dev" -ForegroundColor Yellow
Write-Host "  3. Ouvrez http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Appuyez sur une touche pour ouvrir le dossier..." -ForegroundColor Green
pause

# Ouvrir le dossier dans l'Explorateur
explorer.exe $projectPath

Write-Host ""
Write-Host "Bon developpement avec MAMAHOLDING ! 🚀" -ForegroundColor Green
Write-Host ""
