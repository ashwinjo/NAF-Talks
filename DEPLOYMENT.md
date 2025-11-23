# Deployment Guide

This guide provides step-by-step instructions for deploying your NAF Conference Notes website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js 18+ installed

## Step-by-Step Deployment

### 1. Configure the Base Path

Open `vite.config.js` and update the `base` property with your GitHub repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/naf-talks/', // ⚠️ IMPORTANT: Replace 'naf-talks' with YOUR repo name
  build: {
    outDir: 'dist',
  },
})
```

**Example:** If your repo is `https://github.com/username/my-conference-notes`, use:
```javascript
base: '/my-conference-notes/',
```

### 2. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: NAF Conference Notes website"

# Create repository on GitHub (visit https://github.com/new)
# Then link your local repo to GitHub:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "**GitHub Actions**" (not "Deploy from a branch")
5. Click **Save**

### 4. Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Alternative Deployment Methods

### Method A: Using gh-pages Package (Already Configured)

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the project
2. Push the `dist` folder to a `gh-pages` branch
3. GitHub Pages will automatically serve from this branch

**Note:** You'll need to change the Pages source to "Deploy from a branch" and select the `gh-pages` branch.

### Method B: Manual Build and Deploy

```bash
# Build the project
npm run build

# The built files are in the 'dist' folder
# You can upload these to any static hosting service
```

## Troubleshooting

### Issue: 404 Error or Blank Page

**Solution 1:** Check Base Path
- Ensure `base` in `vite.config.js` matches your repo name exactly
- Include the leading and trailing slashes: `/repo-name/`

**Solution 2:** Clear Cache
```bash
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

**Solution 3:** Verify GitHub Pages Settings
- Make sure Pages is enabled
- Source is set to "GitHub Actions"
- The workflow completed successfully

### Issue: CSS Not Loading

**Cause:** Incorrect base path in `vite.config.js`

**Solution:**
1. Update the base path
2. Rebuild: `npm run build`
3. Redeploy

### Issue: Workflow Fails

**Check:**
1. Repository has Pages enabled
2. Workflow has correct permissions:
   - Go to Settings > Actions > General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

### Issue: Font Not Loading

**Solution:** The font is loaded from Google Fonts CDN. Ensure your browser can access:
- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com`

## Updating the Site

After making changes to your code:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: description of your changes"

# Push to GitHub
git push

# The GitHub Action will automatically rebuild and redeploy
```

## Custom Domain (Optional)

To use a custom domain like `conference.yourdomain.com`:

1. Add a `CNAME` file to the `public/` directory:
   ```
   conference.yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Type: `CNAME`
   - Name: `conference` (or your subdomain)
   - Value: `YOUR_USERNAME.github.io`

3. In GitHub repository settings:
   - Go to Settings > Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

4. Update `vite.config.js`:
   ```javascript
   base: '/', // Use root when using custom domain
   ```

## Deployment Checklist

Before deploying, ensure:

- [ ] Base path in `vite.config.js` is correct
- [ ] All markdown content is up to date
- [ ] Personal information in About Me section is accurate
- [ ] Social links are correct
- [ ] Site builds without errors: `npm run build`
- [ ] Preview looks good: `npm run preview`
- [ ] .gitignore includes `node_modules` and `dist`
- [ ] GitHub repository is created
- [ ] GitHub Pages is enabled with "GitHub Actions" source

## Performance Optimization

The built site is already optimized, but for even better performance:

1. **Enable Compression** on your hosting (GitHub Pages does this automatically)
2. **Use a CDN** (GitHub Pages uses Fastly CDN)
3. **Monitor with Lighthouse** to check performance scores

## Monitoring

After deployment, monitor:

1. **GitHub Actions** for successful deployments
2. **Browser Console** for any JavaScript errors
3. **Network Tab** to verify all assets load correctly

## Support

If you encounter issues:

1. Check the [README.md](./README.md) troubleshooting section
2. Review the [GitHub Actions logs](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions)
3. Ensure all prerequisites are met
4. Try the manual deployment method as a fallback

---

**Quick Reference:**

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Create production build
npm run preview          # Preview production build

# Deploy
git push                 # Automatic via GitHub Actions
npm run deploy           # Manual via gh-pages package
```

Happy deploying! 🚀

