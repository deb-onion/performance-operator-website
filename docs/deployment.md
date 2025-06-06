# Deployment Guide

## Cloudflare Pages Deployment

### Prerequisites
- Cloudflare account
- GitHub repository with the project
- Domain name (optional)

### Setup Steps

1. **Connect Repository**
   - Go to Cloudflare Dashboard > Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Select the performance-operator repository

2. **Build Configuration**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   ```

3. **Environment Variables**
   Add these in Cloudflare Pages settings:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NODE_VERSION=18
   ```

4. **Custom Domain (Optional)**
   - Go to Pages > Custom domains
   - Add your domain
   - Update DNS records as instructed

### Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server (for testing)
npm start

# Development server
npm run dev
```

### Performance Optimization

1. **Image Optimization**
   - Add optimized images to `/public` folder
   - Use Next.js Image component for automatic optimization

2. **Caching**
   - Static assets are automatically cached by Cloudflare
   - API routes can be cached with appropriate headers

3. **Analytics Setup**
   - Add Google Analytics tracking ID
   - Configure conversion tracking
   - Set up Google Tag Manager (optional)

### SEO Configuration

1. **Sitemap**
   - Automatically generated at `/sitemap.xml`
   - Submit to Google Search Console

2. **Robots.txt**
   - Automatically generated at `/robots.txt`
   - Allows all crawlers by default

3. **Meta Tags**
   - Configured in `src/lib/seo.ts`
   - Update social media images
   - Add verification codes

### Monitoring

1. **Analytics**
   - Google Analytics 4
   - Cloudflare Analytics
   - Core Web Vitals monitoring

2. **Error Tracking**
   - Built-in error logging
   - Consider adding Sentry for production

3. **Performance**
   - Lighthouse CI
   - Cloudflare Speed insights
   - Real User Monitoring

### Security

1. **Headers**
   - Security headers configured in `next.config.js`
   - HTTPS enforced by Cloudflare

2. **Form Protection**
   - Input validation and sanitization
   - Rate limiting (configure in Cloudflare)

### Maintenance

1. **Updates**
   - Regular dependency updates
   - Security patches
   - Content updates

2. **Backups**
   - Git repository serves as backup
   - Export analytics data regularly

3. **Testing**
   - Test all forms and CTAs
   - Verify tracking implementation
   - Check mobile responsiveness

## Go-Live Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Analytics tracking works
- [ ] Mobile responsive design
- [ ] SEO meta tags configured
- [ ] Sitemap submitted to search engines
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Contact information updated
- [ ] Social media links working
- [ ] Performance optimized (Lighthouse score 90+)
- [ ] Error tracking configured
- [ ] Backup strategy in place 