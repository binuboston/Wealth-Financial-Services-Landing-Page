# Deployment Guide - Dhanovaa Financial Services

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and provides the best integration.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (in Vercel Dashboard)
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   NEXT_PUBLIC_APP_NAME=Dhanovaa Financial Services
   ```

4. **Custom Domain** (Optional)
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Automatic Deployments:**
- Every push to `main` branch auto-deploys to production
- Pull requests get preview deployments
- Zero configuration needed

---

### Option 2: Netlify

**Steps:**

1. **Create `netlify.toml`** (already included in project)
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select repository
   - Build settings auto-detected
   - Deploy

3. **Environment Variables**
   - Site Settings → Environment Variables
   - Add your variables

---

### Option 3: AWS Amplify

**Steps:**

1. **Connect Repository**
   - Open AWS Amplify Console
   - Connect your GitHub/GitLab repository
   - Select branch to deploy

2. **Build Settings** (auto-detected)
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in Amplify Console → Environment Variables

---

### Option 4: Railway

Railway provides one-click deployments with automatic HTTPS.

**Steps:**

1. **Deploy**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Select "Deploy from GitHub repo"
   - Choose repository

2. **Configure**
   - Railway auto-detects Next.js
   - Add environment variables in Settings
   - Get auto-generated domain or add custom domain

---

### Option 5: Self-Hosted (VPS/Cloud Server)

For complete control, deploy on your own server.

#### Using PM2 (Production Process Manager)

1. **Install Node.js on Server**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone & Build**
   ```bash
   git clone <your-repo>
   cd dhanovaa-financial
   npm install
   npm run build
   ```

4. **Create PM2 Ecosystem File** (`ecosystem.config.js`)
   ```javascript
   module.exports = {
     apps: [{
       name: 'dhanovaa',
       script: 'npm',
       args: 'start',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

5. **Start with PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

#### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   COPY package.json package-lock.json ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   RUN npm run build
   
   # Production image
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **Create docker-compose.yml**
   ```yaml
   version: '3.8'
   services:
     web:
       build: .
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
         - NEXT_PUBLIC_APP_URL=https://yourdomain.com
       restart: unless-stopped
   ```

3. **Build and Run**
   ```bash
   docker-compose up -d
   ```

---

## 📋 Pre-Deployment Checklist

- [ ] Update `NEXT_PUBLIC_APP_URL` in environment variables
- [ ] Test production build locally: `npm run build && npm start`
- [ ] Check all images are optimized
- [ ] Verify all API routes work
- [ ] Test responsive design on multiple devices
- [ ] Run accessibility checks
- [ ] Configure analytics (if needed)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure caching headers
- [ ] Enable compression
- [ ] Set up CDN for static assets
- [ ] Configure custom domain and SSL
- [ ] Test SEO metadata on all pages
- [ ] Set up monitoring/uptime checks

---

## 🔐 Environment Variables Reference

### Required
```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=Dhanovaa Financial Services
```

### Optional
```env
# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=xxxxxxxxxx

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CHAT=false

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@dhanovaa.com

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/dhanovaa
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/dhanovaa
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/dhanovaa
```

---

## 📊 Performance Optimization

### After Deployment

1. **Test with Lighthouse**
   ```bash
   npm install -g lighthouse
   lighthouse https://yourdomain.com --view
   ```

2. **Monitor Core Web Vitals**
   - Use Vercel Analytics (built-in on Vercel)
   - Google Search Console
   - PageSpeed Insights

3. **Enable Caching**
   - Configure CDN
   - Set proper cache headers
   - Use ISR (Incremental Static Regeneration) where appropriate

---

## 🔄 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_APP_URL: ${{ secrets.APP_URL }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🐛 Troubleshooting

### Build Errors

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node.js memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Runtime Errors

**404 on refresh**
- Ensure server is configured for client-side routing
- Add rewrites in hosting platform settings

**Images not loading**
- Check image domains in `next.config.mjs`
- Verify image paths are correct

---

## 📞 Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Platform-specific docs:
  - [Vercel](https://vercel.com/docs)
  - [Netlify](https://docs.netlify.com)
  - [AWS Amplify](https://docs.amplify.aws)

---

**Ready to Deploy!** 🚀

Choose your preferred platform and follow the steps above. Vercel is recommended for the easiest setup with zero configuration.
