import { Container } from "@/components/layout/Container";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Privacy Policy",
  "Privacy policy for OnlyDeb performance marketing services. Learn how we collect, use, and protect your personal information.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
              <p className="mb-4">
                When you contact us or use our services, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business information</li>
                <li>Marketing goals and campaign requirements</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referral source and search terms</li>
                <li>Device information and screen resolution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide performance marketing services and consultation</li>
                <li>Respond to your inquiries and schedule strategy calls</li>
                <li>Send relevant marketing insights and case studies</li>
                <li>Improve our website and service offerings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party services (email providers, analytics tools) that help us operate our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website performance and user behavior</li>
                <li>Provide personalized content and recommendations</li>
                <li>Enable social media features and advertising</li>
              </ul>
              <p className="mb-4">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure hosting and data storage</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability and restriction of processing</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, contact us at <a href="mailto:ads@onlydeb.com" className="text-primary hover:underline">ads@onlydeb.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Services</h2>
              <p className="mb-4">
                Our website may contain links to third-party services with their own privacy policies:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>Resend:</strong> For email delivery and communication</li>
                <li><strong>reCAPTCHA:</strong> For spam protection and security</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and engagement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy periodically. We will notify you of significant changes by posting the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this privacy policy or our data practices, contact us:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:ads@onlydeb.com" className="text-primary hover:underline">ads@onlydeb.com</a></p>
                <p><strong>Website:</strong> <a href="https://onlydeb.com" className="text-primary hover:underline">onlydeb.com</a></p>
                <p><strong>Business:</strong> OnlyDeb Performance Marketing</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
