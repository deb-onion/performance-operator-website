# Performance Marketing Operator Website

A professional brand website for a performance marketing specialist, built with Next.js and TailwindCSS.

## 🎯 Overview

This website serves as a comprehensive, enterprise-grade platform for a performance marketing specialist's personal brand, functioning as:
- **Professional Portfolio** - Showcasing expertise with interactive case study carousels
- **Client Credibility Hub** - Building trust through testimonials, social proof, and detailed metrics  
- **Lead Generation Platform** - Converting visitors with optimized lead magnets and qualification forms
- **User Experience Showcase** - Demonstrating technical proficiency through modern UX/UI

The site emphasizes the "operator vs agency" positioning with enhanced features:
- **🌙 Dual Theme System** - Professional dark/light modes for user preference
- **🎠 Interactive Elements** - Carousels, animations, and engaging user interactions
- **📊 Analytics-Driven** - Comprehensive tracking for conversion optimization
- **♿ Accessibility-First** - Inclusive design ensuring accessibility for all users
- **🎯 Conversion-Optimized** - Lead magnets, social proof, and strategic CTAs

Target audience: Brands looking to scale with paid ads through direct specialist expertise rather than traditional agency models.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS 4
- **Language**: TypeScript
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Cloudflare Pages
- **Analytics**: Google Analytics 4

## 📁 Project Structure

```
├── app/                 # Next.js app router pages
│   ├── about/          # About page
│   ├── contact/        # Contact form page
│   ├── results/        # Case studies and results
│   ├── services/       # Services offered
│   └── work-with-me/   # CTA and booking page
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, Container (with theme toggle)
│   ├── sections/       # Page sections (Hero, Testimonials, FAQ)
│   └── ui/            # Enhanced UI components (Buttons, Cards, Carousel, Theme Toggle, Social Proof, Lead Magnets)
├── lib/                # Utilities and configurations
│   ├── seo.ts         # SEO metadata configuration
│   ├── analytics.ts   # Analytics tracking
│   └── utils/         # Validation and error handling
├── docs/               # Project documentation
└── public/            # Static assets
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd performance-operator-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

- **Home** (`/`) - Enhanced hero, stats carousel, case studies, testimonials, lead magnet, FAQ
- **About** (`/about`) - Personal story, experience, operator vs agency comparison
- **Services** (`/services`) - Service offerings, process, pricing information
- **Results** (`/results`) - Detailed case studies, metrics, client testimonials
- **Work With Me** (`/work-with-me`) - Booking process, FAQ, collaboration details
- **Contact** (`/contact`) - Contact form with validation, information

## 🎛️ Advanced Components

### **🌙 Theme System**
- **Dual themes**: Professional dark mode + clean light mode
- **Instant switching**: Smooth transitions without page refresh
- **User preference**: Automatically saves theme choice
- **CSS variables**: Theme-aware color system throughout

### **🎠 Carousel System**
- **Auto-play functionality** with configurable intervals
- **Touch/swipe support** for mobile devices
- **Keyboard navigation** for accessibility
- **Multiple variants**: Default, elevated, minimal styles
- **Progress indicators**: Dots and progress bars

### **💬 Social Proof & Testimonials**
- **Client testimonials** with before/after metrics
- **Real-time notifications** of achievements and results
- **Star ratings** and client information display
- **Trust indicators** with key statistics

### **🎯 Lead Generation**
- **Multi-step lead qualification** forms
- **Success state management** with follow-up CTAs
- **Field validation** and error handling
- **Analytics integration** for conversion tracking

### **📊 Analytics & Tracking**
- **Custom event tracking** for all user interactions
- **Conversion funnel** monitoring
- **A/B testing ready** infrastructure
- **Performance metrics** and user behavior insights

## 🎨 Key Features

### **🆕 Latest Enhancements (v2.0)**
- **🌙 Dark/Light Theme System** - Instant theme switching with user preference storage
- **🎠 Advanced Carousel Components** - Auto-playing, touch-friendly, fully accessible carousels
- **💬 Client Testimonials Carousel** - 5 detailed testimonials with metrics and auto-rotation
- **❓ SEO-Optimized FAQ Section** - Expandable FAQ with structured data for rich snippets
- **🔔 Social Proof Notifications** - Real-time social proof popups building credibility
- **🎯 Lead Magnet System** - Professional lead capture forms with multi-step qualification
- **📊 Enhanced Analytics** - Comprehensive event tracking for all user interactions
- **♿ Accessibility First** - Full keyboard navigation, screen reader support, ARIA labels

### **Core Features**
- **Responsive Design** - Mobile-first approach with enhanced mobile experience
- **SEO Optimized** - Meta tags, sitemap, structured data, FAQ schema markup
- **Performance Focused** - Optimized for Core Web Vitals with lazy loading
- **Form Validation** - Advanced client-side validation with success states
- **Analytics Ready** - Google Analytics 4 with custom event tracking
- **Error Handling** - Comprehensive error logging and user feedback
- **Type Safety** - Full TypeScript implementation with strict typing

## 🚀 Deployment

### Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Dashboard > Pages
   - Connect your GitHub repository

2. **Build Settings**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   ```

3. **Environment Variables**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NODE_VERSION=18
   ```

See `docs/deployment.md` for detailed deployment instructions.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics (enhanced with new optimizations)
- **Core Web Vitals**: Optimized for LCP, FID, CLS with lazy loading carousels
- **SEO**: Enhanced structured data, FAQ schema, meta tags, comprehensive sitemap
- **Accessibility**: WCAG 2.1 AA+ compliant with full keyboard navigation and screen reader support
- **Theme Performance**: Instant theme switching with CSS variables (no re-render)
- **Interactive Elements**: Optimized carousel performance with hardware acceleration
- **Analytics Efficiency**: Lightweight tracking with batched event processing

## 🔧 Configuration

### SEO
Update `lib/seo.ts` with your:
- Site URL
- Social media handles
- Verification codes

### Analytics
Enhanced analytics tracking with custom events:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Theme System
Theme preferences are automatically saved to browser localStorage. Default theme can be configured in `components/ui/ThemeToggle.tsx`.

### Lead Magnet Forms
Configure form submission and validation in `components/ui/LeadMagnet.tsx`. Supports multiple offer types:
- Free PPC Audit
- Strategy Consultation  
- PPC Playbook Download

### Contact Form
Enhanced contact form with validation in `app/contact/page.tsx`

### Carousel Configuration
Customize carousel behavior in each implementation:
- Auto-play intervals
- Transition effects
- Navigation styles
- Accessibility settings

## 📚 Documentation

- **[🛠️ Technical Guide](TECHNICAL-GUIDE.md)** - **UPDATED!** Complete guide including all new features: dark themes, carousels, lead magnets, analytics
- [Product Requirements](docs/prd.md)
- [Technical Specifications](docs/tech-spec.md)
- [Design Guidelines](docs/design-guidelines.md)
- [Content Guide](docs/content-guide.md)
- [Deployment Guide](docs/deployment.md)
- [Error Handling](docs/error-handling.md)

### **📖 New Feature Guides**

#### **Theme System Usage**
```typescript
// Theme-aware styling
<div className="bg-background text-foreground">
<Button variant="primary">Theme-aware button</Button>
```

#### **Carousel Implementation**
```typescript
<Carousel
  items={slides}
  autoPlay={true}
  autoPlayInterval={6000}
  variant="elevated"
  showDots={true}
/>
```

#### **Lead Magnet Integration**
```typescript
<LeadMagnet 
  title="Custom Lead Magnet"
  offerType="audit"
  className="my-8"
/>
```

#### **Analytics Tracking**
```typescript
import { trackEvent, trackLeadMagnetSubmit } from '@/lib/analytics';

// Track custom events
trackEvent('button_click', { location: 'hero' });
trackLeadMagnetSubmit(formData);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please refer to the documentation or create an issue. 