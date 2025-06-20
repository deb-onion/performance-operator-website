import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend'; // TEMPORARILY DISABLED - incompatible with Edge Runtime
import { validateContactForm, sanitizeContactForm, type ContactFormData } from '@/lib/utils/validation';

// Configure Edge Runtime for Cloudflare Pages
export const runtime = 'edge';

// const resend = new Resend(process.env.RESEND_API_KEY); // TEMPORARILY DISABLED

// Environment variables for EmailJS
const _TO_EMAIL = process.env.TO_EMAIL || 'ads@onlydeb.com';
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '';

// reCAPTCHA verification function
async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn('⚠️ RECAPTCHA_SECRET_KEY not configured - skipping verification');
    return true; // Allow form submission if reCAPTCHA not configured
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const result = await response.json();
    console.log('🔐 reCAPTCHA verification result:', { 
      success: result.success, 
      score: result.score,
      action: result.action 
    });

    // For reCAPTCHA v3, check both success and score (0.0 - 1.0, higher is more likely human)
    return result.success && result.score >= 0.5;
  } catch (error) {
    console.error('💥 reCAPTCHA verification error:', error);
    return false; // Fail closed - reject if verification fails
  }
}

export async function POST(request: NextRequest) {
  console.log('🚀 Contact API called');
  try {
    const body = await request.json();
    console.log('📝 Form data received:', { ...body, recaptchaToken: body.recaptchaToken ? '[PRESENT]' : '[MISSING]' });
    
    const { recaptchaToken, ...formFields } = body as { recaptchaToken?: string } & ContactFormData;

    // 1) Verify reCAPTCHA token
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
      if (!isValidRecaptcha) {
        console.warn('🚫 reCAPTCHA verification failed');
        return NextResponse.json(
          { error: 'Security verification failed. Please try again.' },
          { status: 400 }
        );
      }
      console.log('✅ reCAPTCHA verification passed');
    } else {
      console.warn('⚠️ No reCAPTCHA token provided');
      // Allow submission without token if reCAPTCHA not configured
      if (RECAPTCHA_SECRET_KEY) {
        return NextResponse.json(
          { error: 'Security verification required. Please refresh and try again.' },
          { status: 400 }
        );
      }
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

    // Log the successful submission for monitoring
    const isLeadMagnet = sanitizedData.message.includes('Lead Magnet Request');
    const subject = isLeadMagnet 
      ? '🎯 New Lead Magnet Request - FREE PPC Audit'
      : '📩 New Contact Form Submission';

    console.log('📧 Lead captured successfully:');
    console.log('==================================');
    console.log(`📧 Subject: ${subject}`);
    console.log(`👤 Name: ${sanitizedData.name}`);
    console.log(`📧 Email: ${sanitizedData.email}`);
    console.log(`🏢 Company: ${sanitizedData.company || 'Not provided'}`);
    console.log(`💰 Budget: ${sanitizedData.budget || 'Not provided'}`);
    console.log(`💬 Message: ${sanitizedData.message}`);
    console.log(`⏰ Timestamp: ${new Date().toLocaleString()}`);
    console.log('==================================');

    // Return success - frontend will handle email sending
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      // Pass back data for frontend EmailJS call
      leadData: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company || 'Not provided',
        budget: sanitizedData.budget || 'Not provided',
        message: sanitizedData.message,
        isLeadMagnet,
        timestamp: new Date().toLocaleString()
      }
    });

  } catch (error) {
    console.error('💥 Form submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit form. Please try again.',
        debug: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: 500 }
    );
  }
}

 