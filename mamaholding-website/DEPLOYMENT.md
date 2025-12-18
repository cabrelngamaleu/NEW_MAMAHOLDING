CI / Deployment to o2switch

This project includes a GitHub Actions workflow that builds the site on GitHub (so it does not need to build on the o2switch server where `next build` fails due to memory limits) and deploys the built artifact to the server over SSH.

Required GitHub secrets (Repository > Settings > Secrets > Actions):
- SERVER_HOST: server IP or hostname (e.g., ssh.example.com)
- SERVER_USER: server user (e.g., ghew9261)
- SERVER_SSH_KEY: private SSH key (the public key must be added to `~/.ssh/authorized_keys` for SERVER_USER on the server)
- SERVER_SSH_PORT: optional (default 22)

How it works:
1. On push to `main`, Actions runs `npm ci` and `npm run build` on GitHub.
2. The workflow packs `.next`, `public`, `package.json` and `package-lock.json` into an archive.
3. The archive is copied to `/home/ghew9261/deploy_temp/` on the server using SCP.
4. Via SSH, the archive is extracted and `.next` + `public` and `package.json` are copied into `/home/ghew9261/repositories/NEW_MAMAHOLDING/mamaholding-website`.
5. The workflow runs `npm ci --production` on the server (so you don't need to transfer `node_modules`).
6. The workflow touches `server.js` to trigger a restart of the Node app in cPanel.

Notes & troubleshooting:
- Ensure the SSH public key for the key you paste into `SERVER_SSH_KEY` is present in the server user's `~/.ssh/authorized_keys`.
- Make sure the user has write permissions to `/home/ghew9261/repositories/NEW_MAMAHOLDING/mamaholding-website`.
- The workflow uses `touch server.js` to trigger a restart in cPanel; if your setup requires a manual restart or a different command, we can adjust the workflow to call it.
- If you prefer, we can change the target paths to match a different deployment directory.

If you want, I can help you add the secrets to GitHub and test one deployment.

Quick steps to generate + install deploy key (if you prefer I do it locally, note: ssh-keygen on this environment failed; please run the commands below on your machine):

1) Generate key locally (PowerShell / Git Bash):
   - Interactive (recommended):
     `ssh-keygen -t ed25519 -C "deploy@mamaholding" -f deploy_o2switch`
     Press Enter twice for an empty passphrase.
   - This creates `deploy_o2switch` (private) and `deploy_o2switch.pub` (public).

2) Install the public key on the server (option A - via cPanel Terminal):
   - Copy the content of `deploy_o2switch.pub` and in cPanel Terminal run:
     ```bash
     mkdir -p ~/.ssh
     echo "PASTE_YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
     chmod 700 ~/.ssh
     chmod 600 ~/.ssh/authorized_keys
     ```
   - Or (option B) paste the public key into the repo file `.github/deploy_key.pub` and run the script in cPanel Terminal:
     ```bash
     cd ~/repositories/NEW_MAMAHOLDING/mamaholding-website
     ./install_deploy_key.sh
     ```

3) Add the private key into GitHub Secrets:
   - Go to your repo → Settings → Secrets → Actions → New repository secret
   - Name: `SERVER_SSH_KEY`
   - Value: paste the **entire** contents of `deploy_o2switch` (the private key)

4) Add the other secrets: `SERVER_HOST`, `SERVER_USER`, optional `SERVER_SSH_PORT`.

When you paste the public key here (or confirm you installed it on the server), I will add a small test commit to trigger the workflow and watch the Actions run. If anything fails, I will debug the logs for you.
