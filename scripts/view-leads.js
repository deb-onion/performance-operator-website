#!/usr/bin/env node

/**
 * Simple script to view leads from Cloudflare Pages Functions logs
 * This helps you see lead submissions in real-time without checking browser console
 */

console.log(`
🎯 ONLYDEB LEAD VIEWER
=====================

This script shows you how to view your leads in real-time.

📊 OPTION 1: Cloudflare Dashboard (Web Interface)
1. Go to: https://dash.cloudflare.com/
2. Click "Pages" in sidebar
3. Select your "onlydeb-com" project  
4. Click "Functions" tab
5. Click "Real-time Logs"
6. Filter by "contact" to see form submissions

📊 OPTION 2: Cloudflare CLI (Terminal)
Run this command in your terminal:
   npx wrangler pages deployment tail

📊 OPTION 3: Check Logs by Time
1. Go to Cloudflare Pages > Functions > View past logs
2. Select time range when forms were submitted
3. Look for logs containing "New lead received:"

🔍 What to Look For:
- ✅ "Contact API called" = Form submission started
- ✅ "Email sent successfully" = Email delivered to your inbox
- ❌ "Email sending failed" = Check email configuration
- 📧 "New lead received:" = Lead data captured

⚠️  CURRENT STATUS:
If you see "Email TEMPORARILY DISABLED" in logs, that means:
- ✅ Forms are working and capturing leads
- ❌ Emails are NOT being sent to your inbox
- 🔧 You need to configure SendGrid (see EMAIL-SETUP.md)

🚀 NEXT STEPS:
1. Follow EMAIL-SETUP.md guide
2. Configure SendGrid API key  
3. Add environment variables to Cloudflare
4. Test a form submission
5. Check your email inbox! 📬

Need help? Check the EMAIL-SETUP.md file for detailed instructions.
`);

// If running with Node.js, try to fetch recent logs (requires wrangler CLI)
if (typeof process !== 'undefined' && process.argv) {
  console.log('\n🔧 Checking if Wrangler CLI is installed...');
  
  const { exec } = require('child_process');
  
  exec('npx wrangler --version', (error, stdout, stderr) => {
    if (error) {
      console.log('❌ Wrangler CLI not found. Install with: npm install -g wrangler');
      console.log('   Then run: npx wrangler pages deployment tail');
    } else {
      console.log('✅ Wrangler CLI found:', stdout.trim());
      console.log('\n🚀 To view live logs, run:');
      console.log('   npx wrangler pages deployment tail');
    }
  });
} 