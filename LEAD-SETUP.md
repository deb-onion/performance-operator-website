# Lead Capture Setup Guide

## ✅ Your Forms Are Now LIVE!

Both your contact forms (regular and glass form) are now connected to a real API and will capture actual leads.

## Current Status:
- ✅ Forms validate data properly
- ✅ API endpoint created at `/api/contact`
- ✅ Lead data is logged to console
- ✅ Success/error states work properly
- ⚠️ Email delivery needs setup (see below)

## Quick Test:
1. Visit `/contact`
2. Fill out and submit a form
3. Check browser console (F12) - you'll see the lead data
4. Check your terminal - you'll see server logs

## To Receive Emails When Forms Are Submitted:

### Option 1: Resend (Recommended)
1. Create account at resend.com
2. Get API key
3. Create `.env.local` file in project root:
```
RESEND_API_KEY=your_api_key_here
TO_EMAIL=ads@onlydeb.com
FROM_EMAIL=website@yourdomain.com
```

### Option 2: Gmail SMTP
1. Enable 2FA on Gmail
2. Generate app password
3. Create `.env.local` file:
```
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=ads@onlydeb.com
```

## What Happens When Someone Submits:
1. Form validates the data
2. Sends lead info to your API
3. API attempts to email you
4. Logs the lead details
5. Shows success message to user

## Email Content You'll Receive:
```
Subject: New Lead: [Name] - [Company]

Name: John Doe
Email: john@company.com
Company: Acme Corp
Budget: $15K - $30K
Message: [Their full message]

Submitted at: [timestamp]
From: Website Contact Form
```

Your forms are working and capturing leads right now - you just need to set up email delivery to receive notifications! 