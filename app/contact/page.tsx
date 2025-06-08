"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useState } from "react";
import { logError } from "@/lib/utils/errorLogger";
import { validateContactForm, sanitizeContactForm, type ContactFormData, type ValidationError } from "@/lib/utils/validation";
import { trackFormSubmission } from "@/lib/analytics";

const contactMethods = [
  {
    title: "Email",
    description: "Best for detailed questions or proposals",
    contact: "ads@onlydeb.com",
    href: "mailto:ads@onlydeb.com"
  },
  {
    title: "Strategy Call",
    description: "30-minute call to discuss your goals",
    contact: "Book directly",
    href: "/work-with-me"
  },
  {
    title: "LinkedIn",
    description: "Connect for industry updates and insights",
    contact: "@performanceoperator",
    href: "#"
  }
];

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      // In a real implementation, this would send to your API endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submission:', sanitizedData);
      trackFormSubmission('contact_form');
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      logError(error as Error, { 
        context: 'ContactForm', 
        metadata: { formData: { ...sanitizedData, message: '[redacted]' } } 
      });
      setErrors([{ field: 'general', message: 'Failed to send message. Please try again.' }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: string) => {
    return errors.find(error => error.field === fieldName)?.message;
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Let's Connect
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              Ready to discuss your marketing goals? I respond to all inquiries within 24 hours.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                  {method.title}
                </h3>
                <p className="text-[#4F4F4F] mb-6">
                  {method.description}
                </p>
                <p className="text-lg font-semibold text-[#2D9CDB] mb-6">
                  {method.contact}
                </p>
                <Button 
                  href={method.href} 
                  variant="secondary" 
                  className="w-full"
                >
                  {method.title === "Strategy Call" ? "Book Call" : "Contact"}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C] mb-6">
                Send Me a Message
              </h2>
              <p className="text-lg text-[#4F4F4F] mb-8">
                Tell me about your brand and I'll tell you how to scale it. The more details you provide, the better I can help.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Response Time</h4>
                  <p className="text-[#4F4F4F]">I personally respond to all inquiries within 24 hours, usually much faster.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">What to Include</h4>
                  <ul className="text-[#4F4F4F] space-y-1">
                    <li>• Your current monthly revenue and ad spend</li>
                    <li>• Primary marketing challenges you're facing</li>
                    <li>• Goals for the next 6-12 months</li>
                    <li>• Timeline for getting started</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Next Steps</h4>
                  <p className="text-[#4F4F4F]">
                    After reviewing your message, I'll send a detailed response with initial thoughts and next steps. 
                    If it looks like a good fit, we'll schedule a strategy call to dive deeper.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F2E4C] mb-4">Message Sent!</h3>
                    <p className="text-[#4F4F4F] mb-6">
                      Thanks for reaching out. I'll review your message and respond within 24 hours with next steps.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="secondary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errors.find(e => e.field === 'general') && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                        {getFieldError('general')}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#4F4F4F] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent ${
                            getFieldError('name') ? 'border-red-300' : 'border-[#E5E5E5]'
                          }`}
                          placeholder="Your name"
                        />
                        {getFieldError('name') && (
                          <p className="text-red-600 text-sm mt-1">{getFieldError('name')}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#4F4F4F] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent ${
                            getFieldError('email') ? 'border-red-300' : 'border-[#E5E5E5]'
                          }`}
                          placeholder="your@email.com"
                        />
                        {getFieldError('email') && (
                          <p className="text-red-600 text-sm mt-1">{getFieldError('email')}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#4F4F4F] mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-[#4F4F4F] mb-2">
                          Monthly Ad Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-15k">$5K - $15K</option>
                          <option value="15k-30k">$15K - $30K</option>
                          <option value="30k-50k">$30K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k+">$100K+</option>
                        </select>
                      </div>
                    </div>

                                          <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#4F4F4F] mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent ${
                            getFieldError('message') ? 'border-red-300' : 'border-[#E5E5E5]'
                          }`}
                          placeholder="Tell me about your business, current marketing challenges, and goals..."
                        />
                        {getFieldError('message') && (
                          <p className="text-red-600 text-sm mt-1">{getFieldError('message')}</p>
                        )}
                      </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-[#828282] text-center">
                      By submitting this form, you agree to receive email responses about your inquiry.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C] mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-[#4F4F4F] mb-8 max-w-2xl mx-auto">
              Skip the inbox and book a strategy call directly. We'll discuss your business and see if we're a good fit.
            </p>
            <Button href="/work-with-me" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
} 