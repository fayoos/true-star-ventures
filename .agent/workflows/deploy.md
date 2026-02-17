---
description: Deploy updates to Netlify
---

# Deploy Updates to Netlify

Once you've made changes to your website, follow these simple steps to deploy:

## 1. Save all your changes in VS Code

Make sure all files are saved (File → Save All, or Ctrl+K S)

## 2. Open PowerShell in your project folder

Navigate to: `e:\true star ventures\true star ventures\true-star-ventures`

## 3. Run these 3 commands:

```bash
git add .
```
This stages all your changes.

```bash
git commit -m "Your update description here"
```
Replace "Your update description here" with a brief description of what you changed.
Examples:
- "Updated header design"
- "Fixed navigation menu"
- "Added new service section"

```bash
git push
```
This sends your changes to GitHub, and Netlify will automatically rebuild your site!

## That's it! ✅

- Netlify will automatically detect the changes
- It will rebuild your site (takes 1-3 minutes)
- Your site will be live with the new changes

## Check deployment status

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click on your site
3. You'll see the deployment in progress or completed

---

## Quick Reference

Every time you want to deploy changes:
```bash
git add .
git commit -m "Brief description of changes"
git push
```

**That's all!** No need to create repositories, configure settings, or anything else. The connection is already set up.
