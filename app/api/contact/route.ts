import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateContactForm, sanitizeContactForm, type ContactFormData } from '@/lib/utils/validation';

// Configure Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

// Secret key for reCAPTCHA validation should be set in environment variable
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '';

export async function POST(request: NextRequest) {
  console.log('🚀 Contact API called');
  try {
    const body = await request.json();
    console.log('📝 Form data received:', { ...body, recaptchaToken: body.recaptchaToken ? '[PRESENT]' : '[MISSING]' });
    
    const { recaptchaToken, ...formFields } = body as { recaptchaToken?: string } & ContactFormData;

    // 1) Verify reCAPTCHA token (if present & secret configured)
    console.log('🔐 reCAPTCHA check - Secret key present:', !!RECAPTCHA_SECRET_KEY);
    if (RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        console.log('❌ reCAPTCHA token missing');
        return NextResponse.json(
          { error: 'reCAPTCHA validation failed. Please try again.' },
          { status: 400 }
        );
      }

      console.log('🔍 Verifying reCAPTCHA token...');
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(recaptchaToken)}`,
      });

      const recaptchaResult = (await recaptchaResponse.json()) as { success: boolean; score?: number };
      console.log('🔍 reCAPTCHA result:', recaptchaResult);

      if (!recaptchaResult.success || (recaptchaResult.score !== undefined && recaptchaResult.score < 0.5)) {
        console.log('❌ reCAPTCHA verification failed');
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please retry.' },
          { status: 400 }
        );
      }
      console.log('✅ reCAPTCHA verification passed');
    } else {
      console.log('⚠️ reCAPTCHA disabled - no secret key');
    }

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

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
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
    // Check if Resend is configured
    console.log('🔑 Environment variables check:');
    console.log('- RESEND_API_KEY:', !!process.env.RESEND_API_KEY);
    console.log('- FROM_EMAIL:', process.env.FROM_EMAIL || 'NOT SET');
    console.log('- TO_EMAIL:', process.env.TO_EMAIL || 'NOT SET');
    
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️ RESEND_API_KEY not found. Email notification skipped.');
      console.log('📄 Lead data:', formData);
      return true; // Return true for development
    }

    // Email content for you
    const emailSubject = `New Lead: ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
    
    const emailContent = `
New Lead from Website Contact Form

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Monthly Ad Budget: ${formData.budget || 'Not provided'}

Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString()}
From: Website Contact Form
    `.trim();

    const htmlContent = `
      <h2>New Lead from Website Contact Form</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Monthly Ad Budget:</strong> ${formData.budget || 'Not provided'}</p>
      
      <h3>Message:</h3>
      <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${formData.message}</p>
      
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 14px;">
        Submitted at: ${new Date().toLocaleString()}<br>
        From: Website Contact Form
      </p>
    `;

    console.log('📨 Sending email via Resend API...');
    const emailData = {
      from: process.env.FROM_EMAIL || 'website@yourdomain.com',
      to: [process.env.TO_EMAIL || 'ads@onlydeb.com'],
      subject: emailSubject,
      text: emailContent,
      html: htmlContent,
    };
    console.log('📨 Email config:', { ...emailData, text: '[REDACTED]', html: '[REDACTED]' });

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('❌ Resend API error:', error);
      return false;
    }

    console.log('✅ Email sent successfully:', data);
    return true;

  } catch (error) {
    console.error('💥 Email sending failed:', error);
    console.error('💥 Email error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('💥 Email error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return false;
  }
} 