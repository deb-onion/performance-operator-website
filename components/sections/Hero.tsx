"use client";

import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  headline,
  subheadline,
  cta,
  ctaHref,
  secondaryCta,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2E4C] leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#4F4F4F] max-w-3xl mx-auto">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={ctaHref} size="lg">
              {cta}
            </Button>
            {secondaryCta && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary" size="lg">
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </Container>
      
      {/* Decorative bottom wave (optional) */}
      <div className="mt-16 md:mt-24 h-6 md:h-10 bg-[url('/images/wave.svg')] bg-no-repeat bg-cover"></div>
    </div>
  );
} 