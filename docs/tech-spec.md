# Technical Specification

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context API (for theme, etc.)

### Backend/Serverless
- **API Routes**: Next.js API routes
- **Form Handling**: React Hook Form with validation
- **Email Integration**: Nodemailer or SendGrid

### Deployment
- **Hosting**: Cloudflare Pages or Vercel
- **CDN**: Cloudflare or Vercel Edge Network
- **Domain**: Custom domain with SSL

### Integrations
- **Calendar**: Calendly or TidyCal embed
- **Analytics**: Google Analytics 4
- **SEO**: Next.js built-in SEO capabilities

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── results/            # Results/Case Studies page
│   ├── work-with-me/       # Work With Me page
│   ├── contact/            # Contact page
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── ui/                 # Basic UI components
│   │   ├── Button.tsx      
│   │   ├── Card.tsx        
│   │   └── ...             
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      
│   │   ├── Footer.tsx      
│   │   └── ...             
│   └── sections/           # Page sections
│       ├── Hero.tsx         
│       ├── CaseStudy.tsx    
│       └── ...              
├── lib/                    # Utility functions
│   ├── constants.ts        # Site constants
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   ├── images/             
│   ├── fonts/              
│   └── icons/              
├── styles/                 # Global styles
│   └── globals.css         # Global CSS with Tailwind
└── next.config.js          # Next.js configuration
```

## Component Architecture

### Core Components

#### Layout Components
- **Header**: Navigation with responsive mobile menu
- **Footer**: Site links, social media, and copyright
- **Container**: Wrapper for consistent width constraints

#### UI Components
- **Button**: Primary, secondary, and tertiary styles
- **Card**: For service offerings and case studies
- **Tag**: For highlighting metrics or categories
- **Input**: Form fields with validation states
- **IconBox**: Icon with text for feature highlights

#### Section Components
- **Hero**: Full-width hero section with headline and CTA
- **FeatureGrid**: Grid layout for service features
- **Testimonial**: Client quote with attribution
- **CaseStudy**: Case study card or detailed view
- **CTASection**: Call-to-action section with background
- **MetricDisplay**: For displaying performance metrics

### Page Components

Each page will be composed of section components:

```tsx
// Example Home Page Structure
export default function Home() {
  return (
    <>
      <Hero 
        headline="Brands don't need agencies. They need operators." 
        subheadline="I'm a performance marketing operator helping brands cut wasted ad spend and scale with precision." 
        cta="Let's Scale Together"
        ctaHref="/work-with-me"
      />
      <ValueProposition />
      <PerformanceSnapshot />
      <FeaturedCaseStudy />
      <CTASection />
    </>
  )
}
```

## Responsive Design Specifications

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

### Mobile Optimizations
- Collapsible navigation menu
- Stacked layouts instead of multi-column
- Reduced padding and margins
- Sticky CTAs for improved conversion
- Optimized font sizes for readability

## Performance Targets

- **Lighthouse Score**: 90+ on all categories
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Page Weight**: < 1MB for initial load
- **Time to Interactive**: < a.4s

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Sufficient color contrast (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators for interactive elements

## State Management

- **Theme Preference**: Dark/light mode toggle with system preference detection
- **Form State**: Managed with React Hook Form
- **Navigation State**: Mobile menu open/closed state

## API Integration

### Contact Form
```typescript
// Example API route for contact form
export async function POST(request: Request) {
  const data = await request.json()
  
  // Validate form data
  const { name, email, message } = data
  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  try {
    // Send email using Nodemailer or similar
    await sendEmail({
      to: 'your@email.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })
    
    return Response.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
```

## Analytics Implementation

- **Page Views**: Track all page views
- **Events**: Track key user interactions:
  - CTA clicks
  - Form submissions
  - Calendar booking starts/completions
  - Case study views
- **Conversion Goals**: Set up goal tracking for form submissions and calendar bookings
- **UTM Parameters**: Support for campaign tracking

## SEO Implementation

- **Meta Tags**: Dynamic meta titles and descriptions
- **Open Graph**: Social sharing metadata
- **Structured Data**: Schema.org markup for:
  - Person
  - Service
  - Organization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Properly configured robots.txt

## Testing Strategy

- **Unit Testing**: Jest for component and utility functions
- **Integration Testing**: React Testing Library for component interactions
- **E2E Testing**: Cypress for critical user flows
- **Browser Testing**: Cross-browser compatibility for latest versions of Chrome, Firefox, Safari, and Edge
- **Device Testing**: Responsive testing on mobile, tablet, and desktop

## Deployment Process

1. **Development**: Local development environment
2. **Staging**: Preview deployments for testing
3. **Production**: Production deployment with CI/CD
4. **Monitoring**: Performance and error tracking

## Maintenance Plan

- **Regular Updates**: Framework and dependency updates
- **Performance Monitoring**: Regular performance audits
- **Content Updates**: Easy content management process
- **Backup Strategy**: Regular backups of content and code
- **Security Updates**: Prompt security patches as needed 