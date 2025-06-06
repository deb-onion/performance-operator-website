// Google Analytics 4 configuration
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom tracking events for performance marketing
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName} - ${location}`,
  });
};

export const trackPageScroll = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'outbound_link',
    label: url,
  });
};

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  event({
    action: 'conversion',
    category: 'business',
    label: conversionType,
    value: value,
  });
};

export const trackCalendlyBooking = () => {
  trackConversion('calendly_booking');
  event({
    action: 'book_call',
    category: 'conversion',
    label: 'strategy_call',
  });
};

export const trackEmailClick = () => {
  trackConversion('email_click');
  event({
    action: 'email_click',
    category: 'conversion',
    label: 'contact_email',
  });
}; 