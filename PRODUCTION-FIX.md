# 🚨 URGENT: Fix Live Site Forms & Contact Features

## ❌ Current Issues
1. **Lead Magnet Form**: Now submits real data (FIXED ✅)
2. **Live Site Forms**: Not working due to missing environment variables

## 🔧 IMMEDIATE FIX REQUIRED

### Step 1: Set Environment Variables in Production

**For Cloudflare Pages:**
1. Go to your Cloudflare Dashboard
2. Pages > Your Project > Settings > Environment Variables
3. Add these variables:

```bash
# CRITICAL - REQUIRED FOR FORMS TO WORK
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=ads@onlydeb.com
TO_EMAIL=ads@onlydeb.com

# REQUIRED FOR SPAM PROTECTION
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# SEO & ANALYTICS  
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://onlydeb.com
NODE_VERSION=18
```

### Step 2: Get Your API Keys

**A) Resend API (for email delivery)**
1. Go to [resend.com](https://resend.com)
2. Sign up with `ads@onlydeb.com`
3. Create API key
4. Add `FROM_EMAIL=ads@onlydeb.com`
5. Add `TO_EMAIL=ads@onlydeb.com`

**B) Google reCAPTCHA v3 (spam protection)**
1. Go to [Google reCAPTCHA](https:  //www.google.com/recaptcha/admin)
2. Create new site
3. Choose reCAPTCHA v3
4. Add your domain: `onlydeb.com`
5. Get Site Key (public) and Secret Key (private)

### Step 3: Redeploy Site
After adding environment variables:
1. Go to Cloudflare Pages > Deployments
2. Click "Retry deployment" or push a new commit
3. Wait for build to complete

## 🧪 Test After Fix

### Test Lead Magnet (Homepage):
1. Fill out the "Get FREE PPC Audit" form
2. Submit
3. You should receive email notification
4. Check logs for successful submission

### Test Contact Page:
1. Go to `/contact`
2. Fill out contact form
3. Submit
4. You should receive email

### Test Mobile:
1. Open site on mobile device
2. Test forms work
3. Check all pages load correctly

## 📋 Environment Variables Checklist

Copy these to your production hosting platform:

```bash
# ✅ REQUIRED FOR FORMS
RESEND_API_KEY=re_xxxxxxxxxx
FROM_EMAIL=ads@onlydeb.com  
TO_EMAIL=ads@onlydeb.com

# ✅ REQUIRED FOR SECURITY
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lxxxxxxxxxx
RECAPTCHA_SECRET_KEY=6Lxxxxxxxxxx

# ✅ ANALYTICS & SEO
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://onlydeb.com
NODE_VERSION=18
```

## 🚀 Quick Commands

**For Vercel:**
```bash
vercel env add RESEND_API_KEY
vercel env add FROM_EMAIL
vercel env add TO_EMAIL
vercel env add NEXT_PUBLIC_RECAPTCHA_SITE_KEY
vercel env add RECAPTCHA_SECRET_KEY
```

**For Netlify:**
```bash
netlify env:set RESEND_API_KEY your_key_here
netlify env:set FROM_EMAIL ads@onlydeb.com
netlify env:set TO_EMAIL ads@onlydeb.com
```

## ⚠️ Security Notes

- **NEVER** commit API keys to git
- Use `.env.local` for development
- Set environment variables in hosting platform
- Keep secret keys private
- Regenerate keys if exposed

## 🎯 Expected Results After Fix

✅ Lead magnet submissions arrive in your email  
✅ Contact form submissions work  
✅ No spam/bot submissions  
✅ All pages load on mobile and desktop  
✅ Analytics tracking works  

---

**🚨 ACTION REQUIRED: Set up these environment variables NOW to fix your live site!** 