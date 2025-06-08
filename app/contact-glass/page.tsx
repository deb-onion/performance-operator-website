"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassForm } from "@/components/ui/GlassForm";

const contactMethods = [
  {
    title: "Email",
    description: "Best for detailed questions or proposals",
    contact: "ads@onlydeb.com",
    href: "mailto:ads@onlydeb.com"
  },
  {
    title: "Strategy Call",
    description: "30-minute call to discuss your goals",
    contact: "Book directly",
    href: "/work-with-me/"
  },
  {
    title: "LinkedIn",
    description: "Connect for industry updates and insights",
    contact: "@performanceoperator",
    href: "#"
  }
];

export default function ContactGlassPage() {
  return (
    <main>
      <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2E4C] leading-tight">
              Let's Connect
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#4F4F4F]">
              Ready to discuss your marketing goals? I respond to all inquiries within 24 hours.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                  {method.title}
                </h3>
                <p className="text-[#4F4F4F] mb-6">
                  {method.description}
                </p>
                <p className="text-lg font-semibold text-[#2D9CDB] mb-6">
                  {method.contact}
                </p>
                <Button 
                  href={method.href} 
                  variant="secondary" 
                  className="w-full"
                >
                  {method.title === "Strategy Call" ? "Book Call" : "Contact"}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C] mb-6">
                Send Me a Message
              </h2>
              <p className="text-lg text-[#4F4F4F] mb-8">
                Tell me about your brand and I'll tell you how to scale it. The more details you provide, the better I can help.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Response Time</h4>
                  <p className="text-[#4F4F4F]">I personally respond to all inquiries within 24 hours, usually much faster.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">What to Include</h4>
                  <ul className="text-[#4F4F4F] space-y-1">
                    <li>• Your current monthly revenue and ad spend</li>
                    <li>• Primary marketing challenges you're facing</li>
                    <li>• Goals for the next 6-12 months</li>
                    <li>• Timeline for getting started</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1A1A1A] mb-2">Next Steps</h4>
                  <p className="text-[#4F4F4F]">
                    After reviewing your message, I'll send a detailed response with initial thoughts and next steps. 
                    If it looks like a good fit, we'll schedule a strategy call to dive deeper.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <GlassForm
                title="Get Started Today"
                subtitle="Ready to scale your business? Let's discuss your goals and create a winning strategy."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E4C] mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-[#4F4F4F] mb-8 max-w-2xl mx-auto">
              Skip the inbox and book a strategy call directly. We'll discuss your business and see if we're a good fit.
            </p>
            <Button href="/work-with-me/" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
} 