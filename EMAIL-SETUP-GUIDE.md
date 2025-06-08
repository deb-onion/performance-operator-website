# Email Setup Guide - Receive Real Leads from Your Forms

## ✅ Current Status

Your forms are now **LIVE** and connected to a real API endpoint at `/api/contact`. When someone submits a form, it will:

1. Validate the data
2. Send you an email notification 
3. Log the lead details
4. Show success message to the user

## 🔧 Email Service Setup

To receive real emails when leads submit your forms, you need to configure an email service. Here are the best options:

### Option 1: Resend (Recommended - Easiest Setup)

**Why Resend?**
- Built specifically for developers
- Excellent deliverability
- Simple setup
- Free tier: 3,000 emails/month

**Setup Steps:**
1. Go to [resend.com](https://resend.com) and create account
2. Add your domain (or use resend.dev for testing)
3. Get your API key from dashboard
4. Create `.env.local` file in your project root:

```bash
# .env.local
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=website@yourdomain.com
TO_EMAIL=ads@onlydeb.com
```

**Domain Setup (Optional but Recommended):**
- Add your domain in Resend dashboard
- Add DNS records they provide
- Use `website@yourdomain.com` as FROM_EMAIL

### Option 2: Gmail SMTP (Free Alternative)

**Setup Steps:**
1. Enable 2-factor authentication on Gmail
2. Generate app password: Google Account > Security > 2-Step Verification > App passwords
3. Create `.env.local` file:

```bash
# .env.local
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
TO_EMAIL=ads@onlydeb.com
```

**Note:** Gmail has daily sending limits (500 emails/day)

### Option 3: SendGrid (Enterprise Option)

For high volume or advanced features:

```bash
# .env.local
SENDGRID_API_KEY=SG.your_api_key_here
FROM_EMAIL=website@yourdomain.com
TO_EMAIL=ads@onlydeb.com
```

## 📧 Email Template

When someone submits a form, you'll receive an email like this:

```
Subject: New Lead: John Doe - Acme Corp

New Lead from Website Contact Form

Name: John Doe
Email: john@acmecorp.com
Company: Acme Corp
Monthly Ad Budget: $15K - $30K

Message:
We're looking to scale our e-commerce business and need help with Facebook and Google ads. Currently spending $10k/month but want to double our revenue in the next 6 months.

---
Submitted at: 12/20/2024, 3:45:22 PM
From: Website Glass Contact Form
```

## 🚀 Quick Test Setup

**For immediate testing (no email service needed):**

The forms will work immediately and you can see submissions in your browser console and server logs. To test:

1. Visit your website
2. Fill out any contact form
3. Check browser console (F12 > Console)
4. Check terminal/server logs

You'll see the full lead details logged, even without email setup.

## 🔒 Environment Variables

Create a `.env.local` file in your project root (same level as `package.json`):

```bash
# Choose ONE email service:

# Option 1: Resend (Recommended)
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=website@yourdomain.com
TO_EMAIL=ads@onlydeb.com

# Option 2: Gmail SMTP
# SMTP_USER=your-gmail@gmail.com
# SMTP_PASS=your-app-password
# TO_EMAIL=ads@onlydeb.com

# Option 3: SendGrid
# SENDGRID_API_KEY=SG.your_api_key_here
# FROM_EMAIL=website@yourdomain.com
# TO_EMAIL=ads@onlydeb.com
```

**Important:** Never commit `.env.local` to Git - it's automatically ignored.

## 🧪 Testing Your Setup

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Test forms:**
   - Visit `/contact` or `/glass-form-demo`
   - Fill out and submit a form
   - Check for email delivery

3. **Check logs:**
   - Browser console for client-side logs
   - Terminal for server-side logs

## 🚨 Troubleshooting

### Form submits but no email received:

1. **Check environment variables:**
   ```bash
   # In your terminal
   npm run dev
   # You should see no errors about missing env vars
   ```

2. **Check console logs:**
   - Open browser console (F12)
   - Submit form and look for errors

3. **Check server logs:**
   - Look at terminal where `npm run dev` is running
   - Should see "New lead received:" messages

### Common Issues:

**"Failed to send email notification"**
- Check API key is correct
- Verify FROM_EMAIL domain is set up (for Resend)
- Check rate limits

**"Network error"**
- Form submission failing
- Check browser console for errors
- Verify API endpoint is running

**Gmail SMTP issues:**
- Make sure 2FA is enabled
- Use app password, not regular password
- Check "Less secure app access" if needed

## 🔄 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables** in your hosting platform's dashboard
2. **Update FROM_EMAIL** to use your actual domain
3. **Test forms** after deployment

### Vercel Environment Variables:
1. Go to your project dashboard
2. Settings > Environment Variables
3. Add each variable from your `.env.local`

### Cloudflare Pages Environment Variables:
1. Go to your project dashboard
2. Settings > Environment Variables
3. Add each variable

## 📊 Lead Management

### Current Lead Capture:
- ✅ Name, Email, Company
- ✅ Budget range
- ✅ Detailed message
- ✅ Timestamp
- ✅ Form source tracking

### Enhance Your Lead Flow:
1. **CRM Integration:** Connect to HubSpot, Pipedrive, etc.
2. **Auto-Responder:** Send immediate response to leads
3. **Lead Scoring:** Prioritize based on budget/company size
4. **Analytics:** Track conversion rates

## 💡 Pro Tips

1. **Respond Fast:** The API logs exact submission time - aim to respond within 1 hour for hot leads

2. **Qualify Leads:** Budget field helps you prioritize - higher budgets get faster response

3. **Track Sources:** Glass form vs regular form analytics help you optimize

4. **Mobile Testing:** Test forms on mobile devices - most traffic is mobile

5. **Backup Plan:** Even if email fails, leads are logged in console/server logs

## 🎯 Next Steps

1. **Set up email service** (Resend recommended)
2. **Test both forms** (`/contact` and `/glass-form-demo`)
3. **Add environment variables**
4. **Deploy to production**
5. **Monitor lead flow**

Your forms are ready to capture real leads immediately! 🚀 