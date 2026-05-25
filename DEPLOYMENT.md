# Portfolio Deployment Guide

This guide explains how to deploy your portfolio website to Netlify.

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended for beginners)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add Netlify deployment configuration"
   git push origin main
   ```

2. **Go to [Netlify](https://netlify.com)**
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Choose GitHub and select your repository

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (or higher)

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at a Netlify URL

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI globally**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify in your project**
   ```bash
   netlify init
   ```

4. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

## ⚙️ Configuration Files

### `netlify.toml`
This file contains your Netlify configuration:
- Build settings
- Redirects for SPA routing
- Security headers
- Cache policies

### Build Scripts
Added to `package.json`:
- `npm run build:netlify` - Build for Netlify
- `npm run netlify:dev` - Local Netlify development
- `npm run netlify:build` - Build using Netlify CLI

## 🔧 Custom Domain (Optional)

1. **In Netlify dashboard:**
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter your domain name

2. **Configure DNS:**
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify's nameservers for full DNS management

## 📱 Environment Variables

If you need environment variables:

1. **In Netlify dashboard:**
   - Go to Site settings > Environment variables
   - Add your variables

2. **In your code:**
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

## 🚀 Continuous Deployment

Netlify automatically deploys when you push to your main branch. To customize:

1. **Go to Site settings > Build & deploy**
2. **Configure build hooks or deploy contexts**
3. **Set up branch-specific deployments**

## 🔍 Troubleshooting

### Build Failures
- Check Node.js version (use 18+)
- Ensure all dependencies are installed
- Check build logs in Netlify dashboard

### Routing Issues
- Ensure `netlify.toml` has proper redirects
- Check that `dist` folder contains built files

### Performance
- Images are automatically optimized
- CSS/JS are minified and cached
- CDN is automatically configured

## 📊 Analytics & Monitoring

Netlify provides:
- **Analytics**: Page views, visitors, performance
- **Forms**: Handle contact forms without backend
- **Functions**: Serverless functions if needed
- **Edge functions**: Global performance optimization

## 🔒 Security Features

Configured in `netlify.toml`:
- XSS protection
- Content type sniffing prevention
- Frame options
- Referrer policy
- Permissions policy

## 📝 Next Steps

After deployment:
1. **Test your site** thoroughly
2. **Set up custom domain** if desired
3. **Configure analytics** for insights
4. **Set up monitoring** for uptime
5. **Optimize performance** using Netlify insights

---

For more help, check out [Netlify's documentation](https://docs.netlify.com/) or their [community forum](https://community.netlify.com/).
