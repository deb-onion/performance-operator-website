# Performance Marketing Operator Website

A professional brand website for a performance marketing specialist, built with Next.js and TailwindCSS.

## 🎯 Overview

This website serves as a complete framework for a performance marketing specialist's personal brand, functioning as:
- **Professional Portfolio** - Showcasing expertise and experience
- **Client Credibility Hub** - Building trust through results and testimonials  
- **Lead Generation Platform** - Converting visitors into qualified prospects

The site emphasizes the "operator vs agency" positioning, targeting brands looking to scale with paid ads through direct specialist expertise rather than traditional agency models.

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
│   ├── layout/         # Header, Footer, Container
│   ├── sections/       # Page sections (Hero, etc.)
│   └── ui/            # Basic UI components
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

- **Home** (`/`) - Hero, value proposition, results preview
- **About** (`/about`) - Personal story, experience, operator vs agency
- **Services** (`/services`) - Service offerings, process, pricing
- **Results** (`/results`) - Case studies, metrics, testimonials
- **Work With Me** (`/work-with-me`) - Booking, FAQ, process
- **Contact** (`/contact`) - Contact form, information

## 🎨 Key Features

- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemap, structured data
- **Performance Focused** - Optimized for Core Web Vitals
- **Form Validation** - Client and server-side validation
- **Analytics Ready** - Google Analytics 4 integration
- **Error Handling** - Comprehensive error logging
- **Type Safety** - Full TypeScript implementation

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

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **SEO**: Structured data, meta tags, sitemap
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Configuration

### SEO
Update `lib/seo.ts` with your:
- Site URL
- Social media handles
- Verification codes

### Analytics
Add your Google Analytics ID to environment variables:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Contact Form
Configure form submission endpoint in `app/contact/page.tsx`

## 📚 Documentation

- [Product Requirements](docs/prd.md)
- [Technical Specifications](docs/tech-spec.md)
- [Design Guidelines](docs/design-guidelines.md)
- [Content Guide](docs/content-guide.md)
- [Deployment Guide](docs/deployment.md)
- [Error Handling](docs/error-handling.md)

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