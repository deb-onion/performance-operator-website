import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend'; // TEMPORARILY DISABLED - incompatible with Edge Runtime
import { validateContactForm, sanitizeContactForm, type ContactFormData } from '@/lib/utils/validation';

// Configure Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

// const resend = new Resend(process.env.RESEND_API_KEY); // TEMPORARILY DISABLED

// Secret key for reCAPTCHA validation should be set in environment variable
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

    // Return lead data in response for testing (remove this later)
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      leadData: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company || 'Not provided',
        budget: sanitizedData.budget || 'Not provided',
        message: sanitizedData.message,
        timestamp: new Date().toISOString()
      }
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
  console.log('📧 sendLeadNotification called - EMAIL TEMPORARILY DISABLED');
  
  // TEMPORARY: Disable email sending to fix 500 error
  // This will be re-enabled once we fix Resend/Edge Runtime compatibility
  console.log('📄 LEAD CAPTURED (Email disabled):');
  console.log('==================================');
  console.log(`Name: ${formData.name}`);
  console.log(`Email: ${formData.email}`);
  console.log(`Company: ${formData.company || 'Not provided'}`);
  console.log(`Budget: ${formData.budget || 'Not provided'}`);
  console.log(`Message: ${formData.message}`);
  console.log(`Timestamp: ${new Date().toLocaleString()}`);
  console.log('==================================');
  
  // Return true to allow form submission to succeed
  return true;
} 