"use client";

import { Container } from "@/components/layout/Container";
import { GlassForm } from "@/components/ui/GlassForm";

export default function GlassFormDemoPage() {
  return (
    <main>
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-16 md:py-24">
        <Container>
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Glass Form Demo
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Experience the seamless glassmorphism design
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Glass Form Component
              </h2>
              <p className="text-lg text-gray-700">
                The glass effect creates a beautiful floating appearance.
              </p>
            </div>
            
            <GlassForm
              title="Get Started Today"
              subtitle="Ready to transform your marketing results? Let's discuss your goals."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Use the Glass Form
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Here's how you can integrate the glass form into your existing pages.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Basic Implementation
              </h3>
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm mb-6">
                <pre className="text-gray-800">
{`import { GlassForm } from '@/components/ui/GlassForm';

export default function YourPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <GlassForm 
        title="Your Custom Title"
        subtitle="Your custom subtitle"
        onSubmitSuccess={() => console.log('Success!')}
      />
    </div>
  );
}`}
                </pre>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Available Props
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">title (optional)</p>
                  <p className="text-gray-600">Custom title for the form. Default: "Let's Connect"</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">subtitle (optional)</p>
                  <p className="text-gray-600">Custom subtitle text.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">onSubmitSuccess (optional)</p>
                  <p className="text-gray-600">Callback function called after successful form submission</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">className (optional)</p>
                  <p className="text-gray-600">Additional CSS classes for custom styling</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 