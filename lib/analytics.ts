// Analytics tracking utility for onlydeb website
// Supports Google Analytics 4, Hotjar, Facebook Pixel, and custom events

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
    hj: (...args: any[]) => void;
  }
}

// Event types for better type safety
export type AnalyticsEvent = 
  | 'page_view'
  | 'lead_magnet_view'
  | 'lead_magnet_submit'
  | 'carousel_navigation'
  | 'theme_toggle'
  | 'faq_interaction'
  | 'social_proof_click'
  | 'cta_click'
  | 'testimonial_view'
  | 'case_study_view'
  | 'email_click'
  | 'phone_click'
  | 'download_click';

interface AnalyticsEventData {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Track events with multiple analytics platforms
export const trackEvent = (
  event: AnalyticsEvent, 
  data: AnalyticsEventData = {}
) => {
  const eventData = {
    event_category: data.event_category || 'engagement',
    event_label: data.event_label || '',
    value: data.value || 0,
    ...data.custom_parameters
  };

  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, eventData);
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', { event, data: eventData });
  }
};

// Specific tracking functions
export const trackLeadMagnetSubmit = (formData: any) => {
  trackEvent('lead_magnet_submit', {
    event_category: 'conversion',
    event_label: formData.primaryGoal || 'unknown',
    value: 500,
    custom_parameters: {
      monthly_spend: formData.monthlySpend,
      goal: formData.primaryGoal
    }
  });
};

export const trackCarouselNavigation = (carouselType: string, slideIndex: number) => {
  trackEvent('carousel_navigation', {
    event_category: 'engagement',
    event_label: `${carouselType}_slide_${slideIndex}`,
    custom_parameters: {
      carousel_type: carouselType,
      slide_index: slideIndex
    }
  });
};

export const trackThemeToggle = (newTheme: string) => {
  trackEvent('theme_toggle', {
    event_category: 'ui_interaction',
    event_label: newTheme,
    custom_parameters: {
      new_theme: newTheme,
      previous_theme: newTheme === 'dark' ? 'light' : 'dark'
    }
  });
};

export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: `${ctaText}_${location}`,
    value: 100,
    custom_parameters: {
      cta_text: ctaText,
      page_location: location
    }
  });
};

// Google Analytics 4 configuration
export const GA_TRACKING_ID = 'G-QVK20BPH9M';

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

// Hotjar tracking functions
export const HOTJAR_ID = 6428703;

export const trackHotjarEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && window.hj) {
    window.hj('event', eventName);
  }
};

export const trackHotjarFormSubmit = (formName: string) => {
  trackHotjarEvent(`${formName}_submit`);
};

export const trackHotjarCTAClick = (ctaText: string) => {
  trackHotjarEvent(`cta_click_${ctaText.replace(/\s+/g, '_').toLowerCase()}`);
};

export const trackHotjarPageSection = (sectionName: string) => {
  trackHotjarEvent(`section_view_${sectionName}`);
}; 