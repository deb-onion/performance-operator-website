"use client";

import React, { useState, useEffect } from 'react';
import { Card } from './Card';

const socialProofMessages = [
  {
    id: 1,
    message: "Black Voyage scaling ROAS from 1.69 to 4.26 with ongoing Google Ads optimization",
    time: "Currently managing",
    type: "success",
    icon: "🧳"
  },
  {
    id: 2,
    message: "Bloomstories achieved 5x sign-up growth with $100K+ budget scaling on multi-platform campaigns",
    time: "2023-2024 project",
    type: "achievement",
    icon: "🎧"
  },
  {
    id: 3,
    message: "Dagamma generated $2M+ seasonal revenue with global campaign optimization",
    time: "2022-2023 project",
    type: "growth",
    icon: "👶"
  },
  {
    id: 4,
    message: "Mandarin Duck achieved consistent 400% ROAS across multiple quarters in archery niche",
    time: "2019-2022 project",
    type: "optimization",
    icon: "🎯"
  },
  {
    id: 5,
    message: "Garage Doors LA scaled from 100 to 500+ daily leads while cutting CPA by 60%",
    time: "2019-2021 project",
    type: "revenue",
    icon: "🚪"
  },
  {
    id: 6,
    message: "Growthpep achieved 9.78 ROAS during lockdown with hybrid Google + Native strategy",
    time: "2020 lockdown project",
    type: "improvement",
    icon: "💎"
  }
];

export default function SocialProof() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible || !hasShown) return;

    // Cycle through messages every 8 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % socialProofMessages.length);
        setIsVisible(true);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible, hasShown]);

  // Auto-hide after showing message for 5 seconds
  useEffect(() => {
    if (!isVisible) return;

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, currentMessage]);

  const message = socialProofMessages[currentMessage];

  if (!hasShown) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 max-w-sm transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-full opacity-0 scale-95'
      }`}
    >
      <Card 
        variant="default" 
        className="p-4 bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl shadow-primary/10"
      >
        <div className="flex items-start space-x-3">
          <div className="text-2xl animate-pulse-soft">
            {message.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground leading-relaxed">
              {message.message}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {message.time}
            </p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 w-full bg-muted rounded-full h-1">
          <div 
            className="bg-primary h-1 rounded-full transition-all duration-75 ease-linear"
            style={{
              width: isVisible ? '0%' : '100%',
              animation: isVisible ? 'progress 5s linear' : 'none'
            }}
          />
        </div>
      </Card>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
} 