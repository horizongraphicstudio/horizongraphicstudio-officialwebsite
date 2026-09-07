# Horizon Graphic Studio - GitLab & Vercel Deployment Guide

A complete, step-by-step walkthrough to push the **Horizon Graphic Studio** web application to GitLab and deploy it live on **Vercel** with continuous deployment (CI/CD).

---

## Part 1: Push Code to GitLab

### Current Status of Your Local Project
- **Local Directory:** D:\Horizon Graphic Studio\Horizon_Graphic_Studio
- **Git Branch:** main
- **Committed Code:** 98+ files including Three.js 3D hero, Bento grid, portfolio masonry, INR pricing calculator, and ercel.json SPA configuration.
- **Git Remote Target:** https://gitlab.com/horizon-graphic-studio-group/horizon-graphic-studio.git

---

### Step 1: Ensure the Project Exists on GitLab
1. Open your browser and go to [GitLab](https://gitlab.com).
2. Check that your group **horizon-graphic-studio-group** exists.
3. If the project **horizon-graphic-studio** is not yet created:
   - Click **New project / repository** > **Create blank project**.
   - Project name: horizon-graphic-studio.
   - Project URL: select horizon-graphic-studio-group.
   - Visibility Level: Choose **Private** or **Public**.
   - **Uncheck** "Initialize repository with a README" (since our code is already initialized).
   - Click **Create project**.

---

### Step 2: Generate a GitLab Token with Push Permissions
When using HTTPS with personal access tokens, GitLab requires the **write_repository** scope (or **Code: Push** role).

#### Option A: Project Access Token (Easiest & Recommended)
1. Go to your repository on GitLab:  
   https://gitlab.com/horizon-graphic-studio-group/horizon-graphic-studio/-/settings/access_tokens
2. Enter Token name: ercel-push
3. Set **Role**: Maintainer
4. Check Scopes: **write_repository** and **ead_repository**
5. Click **Create project access token** and copy the generated token.

#### Option B: User Personal Access Token (Fine-Grained)
1. Go to [GitLab Personal Access Tokens](https://gitlab.com/-/user_settings/personal_access_tokens).
2. Under **Project permissions** > **Repository / Code**, make sure **Push** is checked.
3. Click **Create personal access token** and copy the token.

---

### Step 3: Run the Push Command
Open **PowerShell** or **Command Prompt** on your computer and run:

`powershell
# 1. Navigate to your project folder
cd "D:\Horizon Graphic Studio\Horizon_Graphic_Studio"

# 2. Push directly using your token (replace <YOUR_TOKEN> with your actual token)
git push "https://oauth2:<YOUR_TOKEN>@gitlab.com/horizon-graphic-studio-group/horizon-graphic-studio.git" main:main -u
`

Once pushed, your remote is set to origin:
`powershell
git remote set-url origin "https://gitlab.com/horizon-graphic-studio-group/horizon-graphic-studio.git"
`

---

## Part 2: Deploy & Host on Vercel

Vercel provides blazing-fast edge hosting with automatic SSL, global CDN, and automated deployments whenever you push to GitLab.

---

### Step 1: Log in to Vercel
1. Go to [Vercel](https://vercel.com) and click **Sign Up** or **Log In**.
2. You can sign in using **GitLab** directly or using your email.

---

### Step 2: Connect Your GitLab Account
1. From the Vercel Dashboard, click the **Add New...** button in the top right > select **Project**.
2. On the **Import Git Repository** screen:
   - If GitLab is not connected, click **Add GitLab Account** or select GitLab from the provider dropdown.
   - Authorize Vercel to access the horizon-graphic-studio-group group.

---

### Step 3: Import Your Repository
1. In the search box, find **horizon-graphic-studio**.
2. Click the **Import** button next to it.

---

### Step 4: Configure Project Settings
Vercel automatically detects the project framework:

| Setting | Value | Notes |
| :--- | :--- | :--- |
| **Framework Preset** | Vite | Auto-detected |
| **Root Directory** | ./ | Leave as default root |
| **Build Command** | 
pm run build | Produces production bundle |
| **Output Directory** | dist | Default Vite output directory |
| **Install Command** | 
pm install | Installs dependencies |

> **SPA Routing (ercel.json):**  
> We have already pre-configured ercel.json in your repository with rewrite rules so that page refreshes on subroutes never return a 404.

---

### Step 5: Deploy
1. Click the blue **Deploy** button.
2. Vercel will clone the repo, run 
pm install, compile via ite build, and deploy to their global Edge Network (typically takes 30-45 seconds).
3. Once completed, you will see a congratulations screen with confetti and a live URL (e.g. https://horizon-graphic-studio.vercel.app).

---

### Step 6: Custom Domain Setup (Optional)
To point your custom agency domain (e.g. horizongraphicstudio.com):
1. In the Vercel project dashboard, go to **Settings** > **Domains**.
2. Type your domain name and click **Add**.
3. Vercel will display the required DNS records:
   - For apex domain: A record pointing to 76.76.21.21
   - For subdomain (e.g., www): CNAME record pointing to cname.vercel-dns.com
4. Add these DNS records in your domain registrar (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.).
5. SSL certificates will be generated automatically within minutes.

---

### Step 7: Automatic Continuous Deployment (CI/CD)
From this point forward:
- Whenever you make changes locally and run:
  `powershell
  git add .
  git commit -m "update website"
  git push origin main
  `
- GitLab will notify Vercel, and Vercel will automatically build and publish your new updates within seconds!
