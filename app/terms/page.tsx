import { Container } from "@/components/layout/Container";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Terms of Service",
  "Terms of service for OnlyDeb performance marketing services. Learn about our service terms, conditions, and policies.",
  "/terms"
);

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using OnlyDeb's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="mb-4">
                OnlyDeb provides performance marketing services including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Google Ads campaign management and optimization</li>
                <li>Meta Ads (Facebook & Instagram) campaign management</li>
                <li>Multi-platform advertising strategy and execution</li>
                <li>Performance analytics and reporting</li>
                <li>Marketing consultation and strategy development</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Service Terms and Conditions</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Engagement Requirements</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Minimum 3-month initial engagement for campaign optimization</li>
                <li>Minimum monthly ad spend of $12,500 for management services</li>
                <li>Management fees range from 15-20% of ad spend (minimum $2,500/month)</li>
                <li>30-day notice required for service termination</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">Client Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate business information and marketing goals</li>
                <li>Grant necessary access to advertising accounts and analytics</li>
                <li>Respond promptly to requests for information or approvals</li>
                <li>Maintain adequate advertising budgets for effective campaign management</li>
                <li>Comply with all platform policies and advertising guidelines</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Management fees are billed monthly in advance</li>
                <li>Payment is due within 15 days of invoice date</li>
                <li>Late payments may incur a 1.5% monthly service charge</li>
                <li>Client is responsible for all advertising spend directly to platforms</li>
                <li>No refunds for services already rendered</li>
                <li>Setup fees, if applicable, are non-refundable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Performance and Results</h2>
              <p className="mb-4">
                While we strive for optimal performance, we cannot guarantee specific results including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Specific return on ad spend (ROAS) or conversion rates</li>
                <li>Guaranteed lead volume or sales numbers</li>
                <li>Specific cost-per-acquisition (CPA) targets</li>
                <li>Platform approval for ads or accounts</li>
              </ul>
              <p className="mb-4">
                Performance depends on various factors including market conditions, competition, product quality, website conversion rates, and platform algorithm changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Client retains ownership of all advertising accounts and data</li>
                <li>OnlyDeb retains rights to methodologies, strategies, and processes</li>
                <li>Client grants permission to use campaign results as case studies (anonymized)</li>
                <li>All custom reports and analyses remain property of OnlyDeb</li>
                <li>Client may not reverse-engineer or replicate proprietary strategies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
              <p className="mb-4">
                Both parties agree to maintain confidentiality of:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Business strategies and proprietary information</li>
                <li>Campaign performance data and analytics</li>
                <li>Customer lists and business relationships</li>
                <li>Financial information and business metrics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                OnlyDeb's liability is limited to the amount of fees paid in the preceding 12 months. We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Lost profits or business opportunities</li>
                <li>Platform policy violations or account suspensions</li>
                <li>Third-party service interruptions or failures</li>
                <li>Market changes or competitive actions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate services with 30-day written notice. Immediate termination may occur for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Non-payment of fees after 30-day grace period</li>
                <li>Violation of platform policies or legal requirements</li>
                <li>Breach of confidentiality or service terms</li>
                <li>Fraudulent or unethical business practices</li>
              </ul>
              <p className="mb-4">
                Upon termination, client retains all account access and data. Outstanding fees remain due.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes will be resolved through:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Good faith negotiation between parties</li>
                <li>Mediation if direct negotiation fails</li>
                <li>Binding arbitration as final resort</li>
                <li>Governing law of the jurisdiction where OnlyDeb operates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Website Terms</h2>
              <p className="mb-4">
                Use of our website is subject to these additional terms:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Content is for informational purposes only</li>
                <li>No unauthorized copying or distribution of content</li>
                <li>We may modify website content without notice</li>
                <li>Links to third-party sites are provided for convenience only</li>
                <li>We are not responsible for third-party content or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="mb-4">
                For questions about these terms or our services, contact us:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:ads@onlydeb.com" className="text-primary hover:underline">ads@onlydeb.com</a></p>
                <p><strong>Website:</strong> <a href="https://onlydeb.com" className="text-primary hover:underline">onlydeb.com</a></p>
                <p><strong>Business:</strong> OnlyDeb Performance Marketing</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Severability</h2>
              <p className="mb-4">
                If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
