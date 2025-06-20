"use client";

import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { trackLeadMagnetSubmit } from '@/lib/analytics';

// Extend Window interface for reCAPTCHA
declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

interface LeadMagnetProps {
  title?: string;
  subtitle?: string;
  offerType?: 'audit' | 'consultation' | 'guide';
  className?: string;
}

export default function LeadMagnet({ 
  title = "Get Your FREE PPC Account Audit", 
  subtitle = "I'll personally review your Google Ads & Meta Ads accounts and provide actionable insights to improve performance within 48 hours.",
  offerType: _offerType = 'audit',
  className = "" 
}: LeadMagnetProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    monthlySpend: '',
    primaryGoal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA script only when user starts interacting with form
  const loadRecaptcha = () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || recaptchaLoaded || document.getElementById('recaptcha-script')) return;

    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);
  };

  const executeRecaptcha = async (): Promise<string | null> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || !window.grecaptcha) return null;
    return await window.grecaptcha.execute(siteKey, { action: 'submit' });
  };

  const benefits = [
    "Comprehensive account analysis",
    "Specific optimization recommendations", 
    "Competitor benchmarking insights",
    "Quick-win opportunities identified"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(''); // Clear any previous errors
    
    // Load reCAPTCHA when user starts typing
    if (!recaptchaLoaded) {
      loadRecaptcha();
    }
  };

  const handleFocus = () => {
    // Load reCAPTCHA when user focuses on any form field
    if (!recaptchaLoaded) {
      loadRecaptcha();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha();

      // Convert lead magnet data to contact form format
      const contactData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        budget: formData.monthlySpend,
        message: `Lead Magnet Request - FREE PPC Account Audit

Primary Goal: ${formData.primaryGoal}
Monthly Ad Spend: ${formData.monthlySpend}
Company: ${formData.company}

This user requested a free PPC account audit through the lead magnet on the homepage.`,
        recaptchaToken
      };

      // Submit to the same API as contact form
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit. Please try again.');
      }

      // Track successful submission
    trackLeadMagnetSubmit(formData);
      console.log('Lead magnet submitted successfully:', result);

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
        monthlySpend: '',
        primaryGoal: ''
      });
      
    } catch (err) {
      console.error('Lead magnet submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Request Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for your interest! I'll analyze your account and send you a detailed audit report within 48 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <Card className={`p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">What You'll Get:</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            />
          </div>
          
          <div>
            <select
              name="monthlySpend"
              value={formData.monthlySpend}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              required
              aria-label="Monthly ad spend"
            >
              <option value="">Monthly Ad Spend *</option>
              <option value="<5k">Less than $5K</option>
              <option value="5k-15k">$5K - $15K</option>
              <option value="15k-30k">$15K - $30K</option>
              <option value="30k-50k">$30K - $50K</option>
              <option value="50k+">$50K+</option>
            </select>
          </div>
          
          <div>
            <select
              name="primaryGoal"
              value={formData.primaryGoal}
              onChange={handleInputChange}
              onFocus={handleFocus}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              required
              aria-label="Primary goal"
            >
              <option value="">Primary Goal *</option>
              <option value="increase-revenue">Increase Revenue</option>
              <option value="reduce-cpa">Reduce Cost per Acquisition</option>
              <option value="improve-roas">Improve ROAS</option>
              <option value="scale-campaigns">Scale Campaigns</option>
              <option value="audit-performance">Audit Current Performance</option>
            </select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get My FREE Audit'}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            No spam. Unsubscribe at any time. Results delivered within 48 hours.
          </p>
        </form>
      </div>
    </Card>
  );
} 