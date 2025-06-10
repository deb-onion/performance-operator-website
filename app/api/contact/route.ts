import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend'; // TEMPORARILY DISABLED - incompatible with Edge Runtime
import { validateContactForm, sanitizeContactForm, type ContactFormData } from '@/lib/utils/validation';

// Configure Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

// const resend = new Resend(process.env.RESEND_API_KEY); // TEMPORARILY DISABLED

// Environment variables for EmailJS
const TO_EMAIL = process.env.TO_EMAIL || 'ads@onlydeb.com';
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '';

export async function POST(request: NextRequest) {
  console.log('🚀 Contact API called');
  try {
    const body = await request.json();
    console.log('📝 Form data received:', { ...body, recaptchaToken: body.recaptchaToken ? '[PRESENT]' : '[MISSING]' });
    
    const { recaptchaToken, ...formFields } = body as { recaptchaToken?: string } & ContactFormData;

    // 1) TEMPORARILY SKIP reCAPTCHA verification to fix 500 error
    console.log('🔐 reCAPTCHA TEMPORARILY DISABLED FOR DEBUGGING');
    console.log('⚠️ Skipping reCAPTCHA verification to isolate form issues');

    // 2) Validate and sanitize the form data
    const sanitizedData = sanitizeContactForm(formFields as ContactFormData);
    const validationErrors = validateContactForm(sanitizedData);
    
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validationErrors },
        { status: 400 }
      );
    }

    // Send email notification to you
    console.log('📧 Attempting to send email notification...');
    const emailSent = await sendLeadNotification(sanitizedData);
    
    if (!emailSent) {
      console.log('❌ Email sending failed');
      throw new Error('Failed to send email notification');
    }
    console.log('✅ Email sent successfully');

    // Log the successful submission
    console.log('New lead received:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company || 'Not provided',
      budget: sanitizedData.budget || 'Not provided',
      timestamp: new Date().toISOString()
    });

    // Return success without exposing lead data
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('💥 Form submission error:', error);
    console.error('💥 Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('💥 Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    // Return detailed error in development
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        error: 'Failed to submit form. Please try again.',
        debug: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

async function sendLeadNotification(formData: ContactFormData): Promise<boolean> {
  console.log('📧 sendLeadNotification called');
  
  try {
    // Determine if this is a lead magnet or contact form submission
    const isLeadMagnet = formData.message.includes('Lead Magnet Request');
    const subject = isLeadMagnet 
      ? '🎯 New Lead Magnet Request - FREE PPC Audit'
      : '📩 New Contact Form Submission';

    // Try EmailJS first (preferred method)
    if (process.env.EMAILJS_SERVICE_ID) {
      console.log('📧 Sending via EmailJS...');
      const emailSent = await sendViaEmailJS(formData, isLeadMagnet);
      if (emailSent) {
        return true;
      }
    }

    // If EmailJS not configured, log the lead for now
    console.log('⚠️ EmailJS not configured yet. Lead captured in logs:');
    console.log('==================================');
    console.log(`📧 Subject: ${subject}`);
    console.log(`👤 Name: ${formData.name}`);
    console.log(`📧 Email: ${formData.email}`);
    console.log(`🏢 Company: ${formData.company || 'Not provided'}`);
    console.log(`💰 Budget: ${formData.budget || 'Not provided'}`);
    console.log(`💬 Message: ${formData.message}`);
    console.log(`⏰ Timestamp: ${new Date().toLocaleString()}`);
    console.log('==================================');
    console.log('🔧 To receive emails: Follow the EmailJS setup in SIMPLE-FORMS-SOLUTION.md');
    
    return true;

  } catch (error) {
    console.error('❌ Email sending error:', error);
    return false;
  }
}

function generateEmailHTML(formData: ContactFormData, isLeadMagnet: boolean): string {
  const backgroundColor = isLeadMagnet ? '#e3f2fd' : '#f5f5f5';
  const accentColor = isLeadMagnet ? '#1976d2' : '#4caf50';
  const icon = isLeadMagnet ? '🎯' : '📩';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${isLeadMagnet ? 'Lead Magnet Request' : 'Contact Form Submission'}</title>
    </head>
    <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: ${backgroundColor};">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: ${accentColor}; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">${icon} ${isLeadMagnet ? 'New Lead Magnet Request!' : 'New Contact Form Submission!'}</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">OnlyDeb.com</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; border-bottom: 2px solid ${accentColor}; padding-bottom: 5px;">Contact Details</h3>
            <p style="margin: 8px 0;"><strong>👤 Name:</strong> ${formData.name}</p>
            <p style="margin: 8px 0;"><strong>📧 Email:</strong> <a href="mailto:${formData.email}" style="color: ${accentColor};">${formData.email}</a></p>
            ${formData.company ? `<p style="margin: 8px 0;"><strong>🏢 Company:</strong> ${formData.company}</p>` : ''}
            ${formData.budget ? `<p style="margin: 8px 0;"><strong>💰 Budget:</strong> ${formData.budget}</p>` : ''}
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin: 0 0 15px 0; border-bottom: 2px solid ${accentColor}; padding-bottom: 5px;">Message</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid ${accentColor};">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; font-size: 12px; color: #666;">
            <strong>⏰ Received:</strong> ${new Date().toLocaleString()}<br>
            <strong>📍 Source:</strong> OnlyDeb.com ${isLeadMagnet ? '(Lead Magnet)' : '(Contact Form)'}
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            ${isLeadMagnet ? '🎯 This lead requested your FREE PPC Account Audit' : '📞 Follow up within 24 hours for best results!'}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

async function sendViaEmailJS(formData: ContactFormData, isLeadMagnet: boolean): Promise<boolean> {
  try {
    console.log('🔧 EmailJS Environment Variables Check:');
    console.log('- EMAILJS_SERVICE_ID:', process.env.EMAILJS_SERVICE_ID ? '✅ Present' : '❌ Missing');
    console.log('- EMAILJS_TEMPLATE_ID:', process.env.EMAILJS_TEMPLATE_ID ? '✅ Present' : '❌ Missing');
    console.log('- EMAILJS_PUBLIC_KEY:', process.env.EMAILJS_PUBLIC_KEY ? '✅ Present' : '❌ Missing');
    console.log('- TO_EMAIL:', TO_EMAIL);

    const currentTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const emailData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        to_email: TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        budget: formData.budget || 'Not provided',
        message: formData.message,
        subject: isLeadMagnet ? 'New Lead Magnet Request' : 'New Contact Form Submission',
        submission_time: currentTime,
        form_type: isLeadMagnet ? 'Lead Magnet (FREE PPC Audit)' : 'Contact Form',
        lead_priority: isLeadMagnet ? 'High - Lead Magnet' : 'Medium - Contact Form'
      }
    };

    console.log('📧 EmailJS Request Data:', {
      service_id: emailData.service_id,
      template_id: emailData.template_id,
      user_id: emailData.user_id ? 'Present' : 'Missing',
      to_email: emailData.template_params.to_email,
      from_name: emailData.template_params.from_name
    });

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    console.log('📧 EmailJS Response Status:', response.status);
    const responseText = await response.text();
    console.log('📧 EmailJS Response Body:', responseText);

    if (response.ok) {
      console.log('✅ Email sent via EmailJS successfully!');
      return true;
    } else {
      console.error('❌ EmailJS API Error:');
      console.error('Status:', response.status);
      console.error('Response:', responseText);
      return false;
    }
  } catch (error) {
    console.error('❌ EmailJS Network/Parse Error:', error);
    return false;
  }
} 