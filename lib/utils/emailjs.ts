import emailjs from '@emailjs/browser';

// EmailJS configuration - these are safe to expose in frontend
const EMAILJS_SERVICE_ID = 'service_o9hv1n8';
const EMAILJS_TEMPLATE_ID = 'template_7fepv1s';
const EMAILJS_PUBLIC_KEY = '75fJDlV2xrqFj28hi';

export interface EmailData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  isLeadMagnet: boolean;
  timestamp: string;
}

export async function sendEmailViaEmailJS(data: EmailData): Promise<boolean> {
  try {
    console.log('📧 Sending email via EmailJS from browser...');
    
    const templateParams = {
      to_email: 'ads@onlydeb.com',
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      budget: data.budget,
      message: data.message,
      subject: data.isLeadMagnet ? 'New Lead Magnet Request' : 'New Contact Form Submission',
      submission_time: data.timestamp,
      form_type: data.isLeadMagnet ? 'Lead Magnet (FREE PPC Audit)' : 'Contact Form',
      lead_priority: data.isLeadMagnet ? 'High - Lead Magnet' : 'Medium - Contact Form'
    };

    console.log('📧 Template params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('✅ EmailJS success:', response);
    return true;
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return false;
  }
} 