"use client";

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';

const faqs = [
  {
    id: 1,
    question: "What makes you different from traditional PPC agencies?",
    answer: "Unlike agencies with multiple layers and junior staff, you work directly with me - a senior PPC specialist with 8+ years of experience. This means faster implementation, better communication, and no diluted expertise. You get the same person who strategizes your campaigns and optimizes them daily."
  },
  {
    id: 2,
    question: "What kind of results can I expect from working with you?",
    answer: "While results vary by business, I've consistently delivered 300-400% ROAS across different industries. At Bloomstories, I achieved 5x monthly sign-up growth and 350% ROAS. At Dagamma, I maintained sub-$8 CPA while scaling to $300K+ monthly budgets. I focus on sustainable, profitable growth rather than vanity metrics."
  },
  {
    id: 3,
    question: "Which platforms do you specialize in?",
    answer: "I specialize in Google Ads (Search, Display, Shopping, YouTube) and Meta Ads (Facebook, Instagram). I also have experience with Apple Search Ads, Spotify Ads, and LinkedIn Ads. My expertise covers both B2B and B2C campaigns across various industries including SaaS, e-commerce, BFSI, and automotive."
  },
  {
    id: 4,
    question: "What's your minimum budget requirement?",
    answer: "I typically work with businesses spending at least $10K/month on paid advertising. This ensures there's enough data for meaningful optimization and justifies the level of strategic attention your campaigns deserve. For businesses ready to scale beyond $50K/month, I provide dedicated account management."
  },
  {
    id: 5,
    question: "How do you charge for your services?",
    answer: "I offer flexible pricing models: percentage of ad spend (typically 10-15%) or flat monthly retainer ($3K-$8K) depending on scope and complexity. Unlike agencies, there are no setup fees, contracts require just 30-day notice, and you own all account assets. Pricing reflects the value delivered, not agency overhead."
  },
  {
    id: 6,
    question: "How quickly can we start seeing improvements?",
    answer: "Initial optimizations begin within the first week, with meaningful performance improvements typically visible within 2-4 weeks. Major strategic pivots (like new campaign structures) may take 4-6 weeks to show full impact. I provide weekly reports so you can track progress and understand what's driving results."
  },
  {
    id: 7,
    question: "Do you work with businesses in my industry?",
    answer: "I've successfully managed campaigns across diverse industries: SaaS (Bloomstories), e-commerce (Dagamma), automotive, BFSI, education, and health/wellness. My strategic approach adapts to different business models, whether it's B2B lead generation, e-commerce sales, or subscription growth."
  },
  {
    id: 8,
    question: "What level of access and reporting do I get?",
    answer: "You get full transparency: shared access to all ad accounts, weekly performance reports with insights and recommendations, and direct communication with me (no account managers). I believe in educating clients about what's working and why, so you understand the value being delivered."
  }
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about working with a PPC specialist vs. traditional agencies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={faq.id} 
                variant="default" 
                className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  openIndex === index ? 'border-primary/50 shadow-lg shadow-primary/10' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-foreground pr-8 leading-relaxed">
                      {faq.question}
                    </h3>
                    <button
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300"
                      style={{
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                      aria-label={openIndex === index ? 'Collapse answer' : 'Expand answer'}
                    >
                      <svg 
                        className="w-4 h-4 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </button>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-border/50 mt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? Let's discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background bg-primary text-background hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 active:scale-95 h-11 px-6 text-base"
              >
                Schedule a Consultation
              </a>
              <a 
                href="mailto:ads@onlydeb.com"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border border-primary text-primary hover:bg-primary hover:text-background hover:shadow-lg hover:shadow-primary/25 h-11 px-6 text-base"
              >
                Email Direct
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 