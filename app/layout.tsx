import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { defaultMetadata, structuredData, defaultViewport } from "@/lib/seo";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en-US" 
      className={inter.variable} 
      data-theme="dark"
    >
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'} />
        <link rel="alternate" hrefLang="en-us" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'}?region=en-us`} />
        <link rel="alternate" hrefLang="en-gb" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'}?region=en-gb`} />
        <link rel="alternate" hrefLang="en-eu" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'}?region=en-eu`} />
        <link rel="alternate" hrefLang="en-ca" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'}?region=en-ca`} />
        <link rel="alternate" hrefLang="en-au" href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://onlydeb.com'}?region=en-au`} />
        
        {/* Geographic targeting meta tags */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7128,-74.0060" />
        <meta name="ICBM" content="40.7128,-74.0060" />
        
        {/* Additional international SEO meta tags */}
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <meta name="target_country" content="US" />
        <meta name="target_region" content="North America" />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(structuredData, null, 0)
          }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`bg-background text-foreground transition-colors duration-300 ${inter.className}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
