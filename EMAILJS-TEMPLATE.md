# 📧 EmailJS Template - Copy & Paste Ready!

## 🎯 Template for EmailJS Dashboard

When you create your email template in EmailJS, copy and paste this EXACTLY:

---

### **Subject Line:**
```
{{subject}} - New Lead from OnlyDeb.com
```

### **Email Body:**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A new lead from <strong>{{from_name}}</strong> has been received from OnlyDeb.com. Kindly respond at your earliest convenience.</div>
  
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px">📧 {{from_email}}</div>
          <div style="color: #7f8c8d; font-size: 13px">🏢 {{company}}</div>
          <div style="color: #7f8c8d; font-size: 13px">💰 {{budget}}</div>
          <div style="color: #cccccc; font-size: 13px">⏰ {{submission_time}}</div>
          <p style="font-size: 16px; margin-top: 15px; color: #2c3e50">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #3498db;">
    <div style="color: #2c3e50; font-weight: bold; margin-bottom: 10px;">📊 Lead Details</div>
    <div style="font-size: 14px; color: #34495e;">
      <div><strong>Form Type:</strong> {{form_type}}</div>
      <div><strong>Priority:</strong> {{lead_priority}}</div>
      <div><strong>Source:</strong> OnlyDeb.com</div>
    </div>
  </div>
  
  <div style="margin-top: 20px; text-align: center; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
    <div style="color: #27ae60; font-weight: bold; font-size: 14px;">🚀 Quick Actions</div>
    <div style="margin-top: 8px; font-size: 13px; color: #2c3e50;">
      Reply to: <a href="mailto:{{from_email}}" style="color: #3498db;">{{from_email}}</a><br>
      Next step: Schedule discovery call<br>
      Budget range: {{budget}}
    </div>
  </div>
</div>
```

---

## 🔧 Alternative: Simple Clean Template

If you prefer a cleaner look, use this instead:

### **Subject Line:**
```
{{subject}} - OnlyDeb.com Lead
```

### **Email Body:**
```
New lead submission from OnlyDeb.com

CONTACT INFORMATION:
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Budget: {{budget}}

MESSAGE:
{{message}}

---
Form submitted: {{submission_time}}
Source: OnlyDeb.com
Reply to: {{from_email}}
```

---

## 📋 EmailJS Setup Instructions

1. **Go to EmailJS Dashboard**
2. **Click "Email Templates"**
3. **Click "Create New Template"**
4. **Replace ALL content with one of the templates above**
5. **Save the template**
6. **Copy the Template ID** (looks like: `template_xxxxxxx`)

---

## 🎯 Template Variables Explained

These variables get automatically filled from your form:

- `{{subject}}` = "New Contact Form" or "New Lead Magnet Request"
- `{{from_name}}` = Name field from form
- `{{from_email}}` = Email field from form  
- `{{company}}` = Company field from form
- `{{budget}}` = Budget dropdown selection
- `{{message}}` = Message/request details
- `{{submission_time}}` = When form was submitted
- `{{form_type}}` = Contact form vs Lead magnet

---

## ✅ After Setup

Every form submission will send you a professional email to **ads@onlydeb.com** with all the lead details formatted perfectly!

**Example Result:**
```
Subject: New Contact Form - OnlyDeb.com Lead

New lead submission from OnlyDeb.com

CONTACT INFORMATION:
Name: John Smith
Email: john@company.com
Company: ABC Marketing
Budget: 15k-50k

MESSAGE:
Hi, I need help with my Google Ads campaigns. 
Currently spending $20k/month but ROAS is only 2.1. 
Can you help improve performance?

---
Form submitted: January 10, 2025 3:45 PM
Source: OnlyDeb.com  
Reply to: john@company.com
```

Just copy, paste, and you're done! 🚀 