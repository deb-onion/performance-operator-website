# 📧 EmailJS Setup - 5 Minutes to Working Forms!

## Step 1: Create EmailJS Account (2 minutes)

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** 
3. Use your **ads@onlydeb.com** email address
4. Verify your email and log in

## Step 2: Add Email Service (1 minute)

1. Click **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose **"Gmail"** (since you have Google Workspace)
4. Connect your **ads@onlydeb.com** account
5. EmailJS will handle the authentication
6. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template (1 minute)

1. Click **"Email Templates"** 
2. Click **"Create New Template"**
3. Replace the default template with this:

```html
Subject: {{subject}} - OnlyDeb.com

New lead from OnlyDeb.com!

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Budget: {{budget}}

Message:
{{message}}

---
Received: {{date}}
```

4. Click **"Save"** and copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key (30 seconds)

1. Go to **"Account"** > **"General"**
2. Copy your **Public Key** (looks like: `user_xxxxxxxxxx`)

## Step 5: Add to Cloudflare (1 minute)

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select your **onlydeb-com** project
3. Go to **Settings** > **Environment Variables** 
4. Add these 3 variables:

```
EMAILJS_SERVICE_ID = service_xxxxxxx
EMAILJS_TEMPLATE_ID = template_xxxxxxx  
EMAILJS_PUBLIC_KEY = user_xxxxxxxxxx
```

5. Save and deploy automatically

## Step 6: Test! (30 seconds)

1. Go to your website: https://onlydeb.com
2. Fill out any form 
3. Submit it
4. Check **ads@onlydeb.com** inbox! 📬

---

## 🎯 What You'll Get

After setup, every form submission sends you an email like:

```
Subject: New Contact Form Submission - OnlyDeb.com

New lead from OnlyDeb.com!

Name: John Doe
Email: john@company.com  
Company: ABC Corp
Budget: 15k-50k

Message:
Hi, I need help with my Google Ads campaigns...

---
Received: January 10, 2025
```

## 🔍 Troubleshooting

### No emails arriving?
1. Check spam/junk folder
2. Verify environment variables in Cloudflare
3. Check EmailJS dashboard for send history

### Still not working?
1. Test EmailJS directly from their dashboard
2. Verify Gmail connection is active
3. Check Cloudflare Functions logs for errors

---

## ✅ Current Status

- ✅ **Custom forms preserved** - beautiful design intact
- ✅ **EmailJS integration** - ready to go
- ✅ **Google Workspace** - using your existing email
- ✅ **Free tier** - 200 emails/month
- ✅ **Edge Runtime compatible** - works with Cloudflare

**Total setup time: 5 minutes**  
**Monthly cost: FREE**  
**Emails go to: ads@onlydeb.com** ✉️ 