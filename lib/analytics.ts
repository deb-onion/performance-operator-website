// Analytics tracking utility for onlydeb website
// Enhanced with Google Ads Manager specific tracking
// Supports Google Analytics 4, Hotjar, Facebook Pixel, and custom events

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
    hj: (...args: unknown[]) => void;
  }
}

// Enhanced event types for Google Ads Manager tracking
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
  | 'download_click'
  | 'google_ads_manager_inquiry'
  | 'ppc_agency_comparison'
  | 'results_page_engagement'
  | 'google_ads_case_study_view'
  | 'ppc_expertise_interest'
  | 'usa_europe_market_interest'
  | 'google_ads_manager_blueprint_click'
  | 'animated_counter_view'
  | 'metric_card_interaction'
  | 'glass_form_interaction';

interface AnalyticsEventData {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

// Enhanced tracking with Google Ads Manager focus
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

// Enhanced lead magnet tracking with Google Ads Manager context
export const trackLeadMagnetSubmit = (formData: Record<string, unknown>) => {
  trackEvent('lead_magnet_submit', {
    event_category: 'google_ads_manager_conversion',
    event_label: String(formData.primaryGoal) || 'unknown',
    value: 500,
    custom_parameters: {
      monthly_spend: formData.monthlySpend,
      goal: formData.primaryGoal,
      service_interest: 'google_ads_manager',
      lead_source: 'lead_magnet'
    }
  });
  
  // Track specific Google Ads Manager interest
  trackEvent('google_ads_manager_inquiry', {
    event_category: 'ppc_agency_alternative',
    event_label: 'lead_magnet_conversion',
    value: 500
  });
};

// Enhanced carousel tracking with Google Ads Manager case studies
export const trackCarouselNavigation = (carouselType: string, slideIndex: number) => {
  trackEvent('carousel_navigation', {
    event_category: 'google_ads_manager_engagement',
    event_label: `${carouselType}_slide_${slideIndex}`,
    custom_parameters: {
      carousel_type: carouselType,
      slide_index: slideIndex,
      content_type: carouselType.includes('case') ? 'google_ads_case_study' : 'general'
    }
  });
  
  // Track specific Google Ads case study views
  if (carouselType.includes('case') || carouselType.includes('result')) {
    trackEvent('google_ads_case_study_view', {
      event_category: 'ppc_results_engagement',
      event_label: `slide_${slideIndex}`,
      value: 50
    });
  }
};

// Enhanced CTA tracking with Google Ads Manager context
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'google_ads_manager_conversion',
    event_label: `${ctaText}_${location}`,
    value: 100,
    custom_parameters: {
      cta_text: ctaText,
      page_location: location,
      service_type: ctaText.toLowerCase().includes('google ads') ? 'google_ads_manager' : 'ppc_agency'
    }
  });
  
  // Track Google Ads Manager blueprint clicks
  if (ctaText.toLowerCase().includes('blueprint') || ctaText.toLowerCase().includes('google ads manager')) {
    trackEvent('google_ads_manager_blueprint_click', {
      event_category: 'ppc_agency_alternative',
      event_label: location,
      value: 150
    });
  }
};

// New: Track animated counter interactions
export const trackAnimatedCounterView = (metric: string, value: number) => {
  trackEvent('animated_counter_view', {
    event_category: 'google_ads_manager_results',
    event_label: metric,
    value: 25,
    custom_parameters: {
      metric_name: metric,
      metric_value: value,
      results_type: 'performance_metric'
    }
  });
};

// New: Track metric card interactions
export const trackMetricCardInteraction = (metricTitle: string, metricValue: string) => {
  trackEvent('metric_card_interaction', {
    event_category: 'ppc_results_engagement',
    event_label: metricTitle,
    value: 30,
    custom_parameters: {
      metric_title: metricTitle,
      metric_value: metricValue,
      interaction_type: 'hover_or_click'
    }
  });
};

// New: Track results page engagement
export const trackResultsPageEngagement = (section: string, timeSpent: number) => {
  trackEvent('results_page_engagement', {
    event_category: 'google_ads_manager_results',
    event_label: section,
    value: Math.round(timeSpent / 1000), // Convert to seconds
    custom_parameters: {
      section_name: section,
      time_spent_seconds: Math.round(timeSpent / 1000),
      page_type: 'case_studies'
    }
  });
};

// New: Track PPC agency comparison interest
export const trackPPCAgencyComparison = (comparisonType: string) => {
  trackEvent('ppc_agency_comparison', {
    event_category: 'google_ads_manager_positioning',
    event_label: comparisonType,
    value: 75,
    custom_parameters: {
      comparison_type: comparisonType,
      alternative_sought: 'ppc_agency_alternative'
    }
  });
};

// New: Track USA/Europe market interest
export const trackMarketInterest = (market: 'USA' | 'Europe' | 'Both', source: string) => {
  trackEvent('usa_europe_market_interest', {
    event_category: 'geographic_targeting',
    event_label: `${market}_market_${source}`,
    value: 40,
    custom_parameters: {
      target_market: market,
      interest_source: source,
      service_type: 'google_ads_manager'
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

// Enhanced conversion tracking with Google Ads Manager focus
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'google_ads_manager_conversion',
    label: formName,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'click',
    category: 'ppc_agency_engagement',
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

// Enhanced conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  event({
    action: 'conversion',
    category: 'google_ads_manager_business',
    label: conversionType,
    value: value,
  });
};

export const trackCalendlyBooking = () => {
  trackConversion('calendly_booking', 1000);
  event({
    action: 'book_call',
    category: 'google_ads_manager_conversion',
    label: 'strategy_call',
  });
  
  // Track as Google Ads Manager inquiry
  trackEvent('google_ads_manager_inquiry', {
    event_category: 'high_value_conversion',
    event_label: 'calendly_booking',
    value: 1000
  });
};

export const trackEmailClick = () => {
  trackConversion('email_click', 100);
  event({
    action: 'email_click',
    category: 'google_ads_manager_conversion',
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
  // Also track as Google Ads Manager conversion
  trackHotjarEvent('google_ads_manager_form_submit');
};

export const trackHotjarCTAClick = (ctaText: string) => {
  trackHotjarEvent(`cta_click_${ctaText.replace(/\s+/g, '_').toLowerCase()}`);
  // Track Google Ads Manager CTAs specifically
  if (ctaText.toLowerCase().includes('google ads') || ctaText.toLowerCase().includes('ppc')) {
    trackHotjarEvent('google_ads_manager_cta_click');
  }
};

export const trackHotjarPageSection = (sectionName: string) => {
  trackHotjarEvent(`section_view_${sectionName}`);
}; 