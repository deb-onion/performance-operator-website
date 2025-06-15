"use client";

import { useEffect } from "react";

interface GoogleCalendarProps {
  className?: string;
}

export function GoogleCalendar({ className = "" }: GoogleCalendarProps) {
  useEffect(() => {
    // Load Google Calendar scheduling script
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.head.appendChild(script);

    // Load CSS
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={className}>
      {/* Google Calendar Inline Embed */}
      <div className="bg-card rounded-lg border border-border/50 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-primary to-primary-hover text-white text-center">
          <h4 className="text-lg font-semibold mb-1">Book Your 30-Minute Strategy Call</h4>
          <p className="text-sm text-white/90">Select a time that works best for you</p>
        </div>
        
        <div className="bg-card">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/AcZssZ3eEiEwjtCQxY8Dg9UXKk3OzM_4pEUvgwAQE00=?gv=true" 
            style={{border: 0}} 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="Book Strategy Call - Performance Marketing Operator"
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Prefer to talk first? Email me directly at{" "}
          <a href="mailto:ads@onlydeb.com" className="text-primary hover:underline">
            ads@onlydeb.com
          </a>
        </p>
      </div>
    </div>
  );
} 