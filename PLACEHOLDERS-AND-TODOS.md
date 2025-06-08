# 🔧 Placeholders & TODOs

This document lists all placeholders, incomplete integrations, and items that still need to be completed or configured for your website.

## 📧 Email Addresses (HIGH PRIORITY)

### Current Placeholders
- **Location**: `app/contact/page.tsx` (lines 14, 15, 237, 245, 326)
- **Location**: `app/work-with-me/page.tsx` (lines 237, 245, 326)
- **Current Value**: `contact@example.com`
- **Action Required**: Replace with your actual business email address

### What to Replace:
```javascript
// Replace this:
contact: "contact@example.com",
href: "mailto:contact@example.com"

// With your actual email:
contact: "your-actual-email@onlydeb.com",
href: "mailto:your-actual-email@onlydeb.com"
```

## 📅 Calendar Integration (HIGH PRIORITY)

### Current Status
- **Location**: `app/work-with-me/page.tsx` (line 226)
- **Current State**: Placeholder comment only
- **Action Required**: Integrate actual calendar booking system

### Implementation Options:
1. **Calendly Integration**
   ```html
   <!-- Replace the placeholder with actual Calendly embed -->
   <div class="calendly-inline-widget" data-url="https://calendly.com/your-username/30min" style="min-width:320px;height:630px;"></div>
   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
   ```

2. **TidyCal Integration**
   ```html
   <!-- Replace with TidyCal embed code -->
   <iframe src="https://tidycal.com/your-username/30min" width="100%" height="600" frameborder="0"></iframe>
   ```

### Related Analytics
- **Location**: `lib/analytics.ts` (line 179)
- **Function**: `trackCalendlyBooking()` is ready but needs actual calendar integration to trigger

## 🖼️ Profile Image (MEDIUM PRIORITY)

### Current Status
- **Location**: `app/about/page.tsx` (line 30)
- **Current State**: Placeholder comment only
- **Action Required**: Add actual profile image

### Implementation:
```jsx
{/* Replace placeholder with actual profile image */}
<div className="relative">
  <img 
    src="/profile.jpg" 
    alt="Your Name - Performance Marketing Operator"
    className="w-full rounded-lg shadow-xl"
  />
</div>
```

### Required Files:
- Add `public/profile.jpg` (high-quality professional photo)
- Update SEO metadata in `lib/seo.ts` (line 90) - currently references `/profile.jpg`

## 🌐 Environment Variables (HIGH PRIORITY)

### Missing .env File
Current examples show placeholder values that need real configuration:

```bash
# Create .env.local file with these variables:
NEXT_PUBLIC_GA_ID=G-QVK20BPH9M  # ✅ Already configured in layout.tsx
NEXT_PUBLIC_SITE_URL=https://onlydeb.com  # Update this URL
```

### Locations Referencing Environment Variables:
- `README.md` (lines 159, 160, 187, 188)
- `DEPLOYMENT.md` (line 50)
- `wrangler.toml` (lines 6, 7) - commented out, needs activation for Cloudflare

## 🔗 Social Media Links (MEDIUM PRIORITY)

### LinkedIn Placeholder
- **Location**: `app/contact/page.tsx` (line 28)
- **Current Value**: `@performanceoperator`
- **Action Required**: Update with actual LinkedIn profile URL

```javascript
// Update this:
{
  title: "LinkedIn",
  description: "Connect for industry updates and insights",
  contact: "@performanceoperator",
  href: "#"  // ⚠️ Currently just "#"
}

// To this:
{
  title: "LinkedIn",
  description: "Connect for industry updates and insights", 
  contact: "Your LinkedIn Handle",
  href: "https://linkedin.com/in/your-actual-profile"
}
```

## 🎨 Brand Customization (LOW PRIORITY)

### Color Scheme Placeholders
- **Location**: `TECHNICAL-GUIDE.md` (lines 766-774)
- **Current State**: Example color variables
- **Action Required**: Only update if you want different brand colors

### Search Engine Verification
- **Location**: `lib/seo.ts` (lines 56-57)
- **Current State**: Placeholder verification codes
- **Action Required**: Add real verification codes when setting up Google Search Console

```javascript
verification: {
  google: 'your-google-verification-code',  // ⚠️ Placeholder
  yandex: 'your-yandex-verification-code',  // ⚠️ Placeholder  
}
```

## 🔧 Form Backend Integration (HIGH PRIORITY)

### Contact Form
- **Location**: `app/contact/page.tsx` (lines 67-80)
- **Current State**: Simulated submission (setTimeout)
- **Action Required**: Implement actual form submission

### Lead Magnet Form  
- **Location**: `components/ui/LeadMagnet.tsx` (lines 39-48)
- **Current State**: Simulated submission (setTimeout)
- **Action Required**: Implement actual form submission

### Implementation Options:
1. **Netlify Forms** (Recommended for static sites)
2. **Formspree** (Easy third-party service)
3. **Custom API endpoint** (requires backend)
4. **Email service integration** (EmailJS, etc.)

## 📊 SEO Images (MEDIUM PRIORITY)

### Missing Image Files
Based on `lib/seo.ts` references, these images should exist but may be missing:
- `public/og-image.jpg` (Open Graph image for social sharing)
- `public/profile.jpg` (Referenced in structured data)

## 🚀 Deployment Configuration (HIGH PRIORITY)

### Cloudflare Pages Environment Variables
- **Location**: `wrangler.toml` (lines 6-7)
- **Current State**: Commented out
- **Action Required**: Uncomment and configure for production

```toml
# Uncomment and configure these:
[env.production.vars]
NEXT_PUBLIC_GA_ID = "G-QVK20BPH9M"  # ✅ Already set
NEXT_PUBLIC_SITE_URL = "https://onlydeb.com"  # Update with actual domain
```

## ✅ Completed Integrations

### Analytics (Completed ✅)
- **Google Analytics 4**: Fully implemented
- **Hotjar**: Fully implemented  
- **Custom Analytics**: Event tracking functions ready

### SEO (Completed ✅)
- **Metadata**: Comprehensive implementation
- **Structured Data**: JSON-LD implemented
- **Sitemap**: Auto-generated
- **Robots.txt**: Configured

## 🎯 Priority Order for Completion

### 🔴 HIGH PRIORITY (Required for Launch)
1. Replace `contact@example.com` with real email
2. Implement calendar booking integration
3. Set up form backend integration
4. Configure environment variables
5. Add missing image files

### 🟡 MEDIUM PRIORITY (Important for Polish)
1. Add professional profile image
2. Update LinkedIn profile link
3. Create OG image for social sharing

### 🟢 LOW PRIORITY (Optional Improvements)
1. Customize brand colors (if desired)
2. Add search engine verification codes
3. Fine-tune Cloudflare deployment settings

## 📝 Notes

- All forms currently work with frontend validation but need backend integration for actual submission
- Analytics tracking is fully functional and will start collecting data immediately upon deployment
- The website is fully functional for browsing and testing, but forms won't actually send emails/store data until backend integration is complete
- All placeholder content is clearly marked and easy to find/replace

## 🔄 Quick Find & Replace Commands

For bulk updates, you can use these find/replace patterns:

```bash
# Replace email placeholder
find . -name "*.tsx" -exec sed -i 's/contact@example\.com/your-actual-email@onlydeb.com/g' {} \;

# Update LinkedIn placeholder (after finding the correct URL)
find . -name "*.tsx" -exec sed -i 's/@performanceoperator/your-linkedin-handle/g' {} \;
```

---

**Last Updated**: Current as of latest codebase scan
**Next Review**: After completing HIGH PRIORITY items 