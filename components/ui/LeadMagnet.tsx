"use client";

import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { trackLeadMagnetSubmit } from '@/lib/analytics';

interface LeadMagnetProps {
  title?: string;
  subtitle?: string;
  offerType?: 'audit' | 'consultation' | 'guide';
  className?: string;
}

export default function LeadMagnet({ 
  title = "Get Your FREE PPC Account Audit", 
  subtitle = "I'll personally review your Google Ads & Meta Ads accounts and provide actionable insights to improve performance within 48 hours.",
  offerType = 'audit',
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Track lead magnet submission
    trackLeadMagnetSubmit(formData);
    
    console.log('Lead captured:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <Card variant="feature" highlight="success" className={`text-center ${className}`}>
        <div className="p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Thank You! Your Request is Confirmed
          </h3>
          <p className="text-muted-foreground mb-6">
            I'll be in touch within 24 hours with your audit results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/results" variant="outline">
              View Case Studies
            </Button>
            <Button href="/about" variant="ghost">
              Learn More About Me
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="feature" highlight="primary" className={className}>
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {subtitle}
          </p>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            Worth $500 - Free for a limited time
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="font-semibold text-foreground mb-4">What You'll Get:</h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-accent rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>No spam, ever.</strong> I respect your privacy and will only send valuable PPC insights.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Business Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="Company Name*"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
            </div>

            <div>
              <select
                name="monthlySpend"
                value={formData.monthlySpend}
                onChange={handleInputChange}
                required
                aria-label="Monthly ad spend"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              >
                <option value="">Monthly Ad Spend*</option>
                <option value="under-5k">Under $5K</option>
                <option value="5k-15k">$5K - $15K</option>
                <option value="15k-50k">$15K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="over-100k">Over $100K</option>
              </select>
            </div>

            <div>
              <select
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleInputChange}
                required
                aria-label="Primary goal"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              >
                <option value="">Primary Goal*</option>
                <option value="improve-roas">Improve ROAS</option>
                <option value="reduce-cpa">Reduce CPA</option>
                <option value="scale-revenue">Scale Revenue</option>
                <option value="fix-performance">Fix Poor Performance</option>
                <option value="launch-campaigns">Launch New Campaigns</option>
              </select>
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Processing...' : 'Claim Your Free Audit'}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to receive PPC insights via email. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </Card>
  );
} 