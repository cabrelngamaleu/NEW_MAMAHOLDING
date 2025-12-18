#!/usr/bin/env bash
set -e
# This script appends the public deploy key (if present in the repo) into ~/.ssh/authorized_keys
# Usage (in cPanel Terminal):
#   cd ~/repositories/NEW_MAMAHOLDING/mamaholding-website
#   ./install_deploy_key.sh

if [ ! -f "./.github/deploy_key.pub" ]; then
  echo "Public key file .github/deploy_key.pub not found. Paste the public key into that file first." >&2
  exit 1
fi

mkdir -p ~/.ssh
chmod 700 ~/.ssh
cat .github/deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
echo "Public key installed into ~/.ssh/authorized_keys"
