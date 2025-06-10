"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { logError } from '@/lib/utils/errorLogger';
import { validateContactForm, sanitizeContactForm, type ContactFormData, type ValidationError } from '@/lib/utils/validation';
import { trackFormSubmission } from '@/lib/analytics';

interface GlassFormProps {
  title?: string;
  subtitle?: string;
  onSubmitSuccess?: () => void;
  className?: string;
}

export const GlassForm: React.FC<GlassFormProps> = ({
  title = "Let's Connect",
  subtitle = "Ready to scale your business? Send me a message and I'll respond within 24 hours.",
  onSubmitSuccess,
  className = ""
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  // Load reCAPTCHA script once when component mounts (if site key provided)
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return;
    if (document.getElementById('recaptcha-script')) return; // prevent duplicate

    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const executeRecaptcha = async (): Promise<string | null> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || !(window as any).grecaptcha) return null;
    return await (window as any).grecaptcha.execute(siteKey, { action: 'submit' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field-specific errors when user starts typing
    if (errors.some(error => error.field === name)) {
      setErrors(prev => prev.filter(error => error.field !== name));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    
    // Validate form data
    const sanitizedData = sanitizeContactForm(formData);
    const validationErrors = validateContactForm(sanitizedData);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1) Obtain reCAPTCHA token (if configured)
      const recaptchaToken = await executeRecaptcha();

      // Submit form to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...sanitizedData, recaptchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors([{ field: 'general', message: result.error || 'Failed to send message. Please try again.' }]);
        }
        return;
      }

      console.log('Form submitted successfully:', result);
      trackFormSubmission('glass_contact_form');

      // Send email via EmailJS (browser-side)
      if (result.leadData) {
        console.log('📧 Sending email via EmailJS...');
        try {
          const { sendEmailViaEmailJS } = await import('@/lib/utils/emailjs');
          const emailSent = await sendEmailViaEmailJS(result.leadData);
          if (emailSent) {
            console.log('✅ Email sent successfully to ads@onlydeb.com');
          } else {
            console.log('⚠️ Email sending failed, but form was submitted');
          }
        } catch (emailError) {
          console.error('❌ Email sending error:', emailError);
          // Don't fail the form submission if email fails
        }
      }

      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });

      // Call success callback if provided
      onSubmitSuccess?.();
      
    } catch (error) {
      logError(error as Error, { 
        context: 'GlassContactForm', 
        metadata: { formData: { ...sanitizedData, message: '[redacted]' } } 
      });
      setErrors([{ field: 'general', message: 'Network error. Please check your connection and try again.' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: string) => {
    return errors.find(error => error.field === fieldName)?.message;
  };

  const inputClasses = (fieldName: string) => {
    const hasError = getFieldError(fieldName);
    return `
      w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300
      bg-white/10 border-white/20 text-gray-900 placeholder-gray-500
      hover:bg-white/15 hover:border-white/30
      focus:bg-white/20 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/25 focus:outline-none
      ${hasError ? 'border-red-400/50 bg-red-50/10' : ''}
    `.trim();
  };

  const selectClasses = `
    w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300
    bg-white/10 border-white/20 text-gray-900
    hover:bg-white/15 hover:border-white/30
    focus:bg-white/20 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/25 focus:outline-none
    appearance-none cursor-pointer
  `.trim();

  return (
    <div className={`relative ${className}`}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/30 to-blue-100/50 rounded-3xl"></div>
      
      {/* Glass container */}
      <div className="relative backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl shadow-blue-500/10 p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            {subtitle}
          </p>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
            <p className="text-gray-700 mb-8 max-w-sm mx-auto">
              Thanks for reaching out. I'll review your message and respond within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="secondary"
              className="backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error */}
            {errors.find(e => e.field === 'general') && (
              <div className="bg-red-100/50 backdrop-blur-sm border border-red-200/50 text-red-700 px-4 py-3 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {getFieldError('general')}
                </div>
              </div>
            )}
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses('name')}
                  placeholder="Your full name"
                />
                {getFieldError('name') && (
                  <p className="text-red-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {getFieldError('name')}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses('email')}
                  placeholder="your@email.com"
                />
                {getFieldError('email') && (
                  <p className="text-red-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {getFieldError('email')}
                  </p>
                )}
              </div>
            </div>

            {/* Company & Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-800">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses('company')}
                  placeholder="Your company name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-800">
                  Monthly Ad Budget
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5K - $15K</option>
                    <option value="15k-30k">$15K - $30K</option>
                    <option value="30k-50k">$30K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={inputClasses('message')}
                placeholder="Tell me about your business, current marketing challenges, and goals..."
              />
              {getFieldError('message') && (
                <p className="text-red-600 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {getFieldError('message')}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 backdrop-blur-sm"
                size="lg"
                loading={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-600 text-center pt-2">
              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your information is secure and will only be used to respond to your inquiry.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}; 