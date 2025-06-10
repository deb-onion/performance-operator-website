# 📧 EMAIL SETUP GUIDE - Get Leads in Your Inbox!

## 🚨 IMPORTANT: Currently your forms work but emails are NOT being sent!

Your forms are capturing leads successfully, but you're not receiving emails because the email service isn't configured. Let's fix this now!

## 🎯 Option 1: SendGrid (RECOMMENDED - FREE)

### Step 1: Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com/free/)
2. Sign up for FREE account (100 emails/day forever)
3. Verify your email address

### Step 2: Get API Key
1. In SendGrid dashboard, go to **Settings** > **API Keys**
2. Click **Create API Key**
3. Choose **Full Access** permissions
4. Copy the API key (starts with `SG.`)

### Step 3: Add Environment Variables
Add these to your Cloudflare Pages environment variables:

```bash
SENDGRID_API_KEY=SG.your_actual_api_key_here
FROM_EMAIL=leads@onlydeb.com
TO_EMAIL=your-actual-email@gmail.com
```

### Step 4: Configure in Cloudflare Pages
1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select your **onlydeb-com** project
3. Go to **Settings** > **Environment Variables**
4. Add the variables above

## 🎯 Option 2: EmailJS (Alternative - FREE)

If you prefer EmailJS:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for free account
3. Create an email service (Gmail, Outlook, etc.)

### Step 2: Get Configuration
1. Create a new email template
2. Get your Service ID, Template ID, and Public Key
3. Add these environment variables:

```bash
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
TO_EMAIL=your-actual-email@gmail.com
```

## 🚀 How to Add Environment Variables in Cloudflare

1. **Login to Cloudflare**: https://dash.cloudflare.com/
2. **Select Pages** from left sidebar
3. **Find your website** (onlydeb-com)
4. **Click Settings** tab
5. **Click Environment Variables**
6. **Add each variable**:
   - Variable name: `SENDGRID_API_KEY`
   - Value: `SG.your_actual_key_here`
   - Environment: **Production**
7. **Repeat for all variables**
8. **Deploy** your site (automatic after adding env vars)

## 📧 What Happens After Setup

Once configured, you'll receive beautiful HTML emails like this:

```
🎯 New Lead Magnet Request - FREE PPC Audit
From: John Doe (john@company.com)
Company: ABC Corp
Budget: $15k-50k/month
Goal: Launch new campaigns

This lead requested your FREE PPC account audit!
```

## 🔍 How to Access Cloudflare Logs

To see your leads in real-time:

1. **Go to Cloudflare Dashboard**
2. **Select your Pages project**
3. **Click Functions** tab
4. **Click Real-time Logs**
5. **Filter by "contact"** to see form submissions

Or use Cloudflare CLI:
```bash
npx wrangler pages deployment tail
```

## 🛠️ Current Status

✅ **Forms working** - capturing leads successfully  
✅ **Data validation** - preventing spam/invalid submissions  
✅ **Lead logging** - all data captured in Cloudflare logs  
❌ **Email delivery** - NOT CONFIGURED (this is what we're fixing)  

## 🚨 Priority Action Items

1. **Set up SendGrid** (5 minutes)
2. **Add environment variables** to Cloudflare (2 minutes)
3. **Test the forms** (1 minute)
4. **Profit!** 💰

## 💡 Pro Tips

- **SendGrid is more reliable** than EmailJS for business use
- **Always test** after setup with a real form submission
- **Check spam folder** initially until sender reputation builds
- **Add your domain** to SendGrid for better deliverability

## 🆘 Need Help?

If you run into issues:
1. Check Cloudflare Functions logs for error messages
2. Verify environment variables are set correctly
3. Test with a simple email first
4. Check spam/junk folders

---

**Remember**: Your Google Workspace is already set up - we just need to configure the sending service! 