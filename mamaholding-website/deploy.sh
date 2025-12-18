#!/usr/bin/env bash
set -e
cd ~/repositories/NEW_MAMAHOLDING/mamaholding-website
npm ci
npm run build
# If needed, you can restart the cPanel Node app from the UI after this script runs
