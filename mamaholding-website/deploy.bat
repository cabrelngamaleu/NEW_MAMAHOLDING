@echo off
echo ========================================
echo   DEPLOIEMENT MAMAHOLDING - O2Switch
echo ========================================
echo.

echo [1/4] Installation des dependances...
call npm install
if %errorlevel% neq 0 (
    echo ERREUR: Echec de l'installation des dependances
    pause
    exit /b 1
)

echo.
echo [2/4] Build du projet...
call npm run build
if %errorlevel% neq 0 (
    echo ERREUR: Echec du build
    pause
    exit /b 1
)

echo.
echo [3/4] Verification des fichiers...
if not exist "out\index.html" (
    echo ERREUR: Fichier index.html manquant dans le dossier out/
    pause
    exit /b 1
)

if not exist "out\.htaccess" (
    echo ERREUR: Fichier .htaccess manquant dans le dossier out/
    pause
    exit /b 1
)

echo.
echo [4/4] Deploiement termine !
echo.
echo ========================================
echo   FICHIERS PRETS POUR O2SWITCH
echo ========================================
echo.
echo Le dossier 'out/' contient tous les fichiers a uploader.
echo.
echo ETAPES SUIVANTES:
echo 1. Connectez-vous a votre espace O2Switch
echo 2. Uploadez TOUT le contenu du dossier 'out/'
echo 3. Assurez-vous que le fichier .htaccess est inclus
echo 4. Testez votre site web
echo.
echo Consultez deploy-o2switch.md pour plus de details.
echo.
pause
