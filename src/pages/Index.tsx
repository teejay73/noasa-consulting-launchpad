
import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import ClientLogoGrid from "../components/ClientLogoGrid";
import CapabilitiesGrid from "../components/CapabilitiesGrid";

const Index = () => (
  <div className="min-h-screen bg-[#fafbfc] font-inter text-gray-900">
    <Header />
    
    {/* Add top padding to account for fixed header */}
    <main className="pt-16">
      {/* HERO SECTION */}
      <section className="w-full py-24 sm:py-32 bg-[#fafbfc] flex flex-col items-center border-b border-gray-100 px-4">
        <FadeInSection>
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Main headline */}
            <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-tight text-gray-900">
              Product Consulting for Startups and Growth-Stage Companies
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 font-normal mb-10 max-w-3xl leading-relaxed">
              Helping teams build smarter, scale faster, and align around what matters—with experienced leadership from day one at a fraction of a cost.
            </p>
            
            {/* CTA button */}
            <a
              href="mailto:hello@yourdomain.com"
              className="bg-accentBlue hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-150 inline-flex items-center gap-2"
            >
              → Book a Discovery Call
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section className="w-full py-20 px-4 md:px-0">
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center font-semibold text-3xl md:text-4xl mb-12 tracking-tight text-gray-900">
              From strategy to execution, we embed alongside teams to accelerate product, operations, and go-to-market success.
            </h2>
            
            <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
              {/* How We Work */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">How We Work</h3>
                <p>
                  We plug directly into your team to provide clarity, structure, and forward momentum. Whether we're acting as your CPO, Head of Product, or Product Lead, our approach is highly collaborative and outcome-driven. We help sharpen roadmaps, align stakeholders, and deliver tangible results—fast.
                </p>
              </div>
              
              {/* Who We Support */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Who We Support</h3>
                <p>
                  We work with founders, CEOs, and department leaders who are building, scaling, or transforming digital products. Whether you're in early-stage chaos or mid-growth complexity, we bring calm, clarity, and experience to your team when it matters most.
                </p>
              </div>
              
              {/* How You Can Engage Us */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">How You Can Engage Us</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Ongoing Consulting</p>
                    <p className="text-gray-600">Trusted advisory and executional support to senior leadership and product teams.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Fractional Leadership</p>
                    <p className="text-gray-600">Embedded roles like CPO, Head of Product, or Product Lead to fill critical gaps without full-time overhead.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Fixed-Scope Projects</p>
                    <p className="text-gray-600">Clear deliverables on a defined timeline, from product audits to GTM strategy to MVP execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* PAST CLIENTS & EMPLOYERS */}
      <section className="w-full py-12 px-4 md:px-0 bg-gray-50 border-b border-t border-gray-100">
        <FadeInSection delay={200}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-semibold text-2xl md:text-3xl mb-8 tracking-tight text-gray-900">
              Past Clients & Employers
            </h2>
            <ClientLogoGrid />
          </div>
        </FadeInSection>
      </section>

      {/* HIGH IMPACT SECTION */}
      <section className="w-full py-20 px-4 md:px-0">
        <FadeInSection delay={240}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-semibold text-3xl md:text-4xl mb-12 tracking-tight text-gray-900">
              Where Noasa Consulting Makes a High Impact
            </h2>
            <CapabilitiesGrid />
          </div>
        </FadeInSection>
      </section>

      {/* CONTACT SECTION */}
      <section className="w-full py-24 px-4 md:px-0 bg-white">
        <FadeInSection delay={320}>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Let&apos;s Talk</h2>
            <div className="text-gray-700 mb-8 text-lg">
              If you're facing complexity, scale, or messy growth—we should talk.
            </div>
            <a
              href="mailto:hello@yourdomain.com"
              className="inline-block bg-accentBlue hover:bg-blue-800 text-white px-8 py-3 rounded-full text-base font-bold shadow transition-colors mb-6"
            >
              Book a Discovery Call
            </a>
            <div className="flex gap-4 justify-center text-sm">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accentBlue hover:text-blue-800 font-medium transition-colors"
              >
                Schedule Online
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accentBlue hover:text-blue-800 font-medium transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </main>

    {/* Footer */}
    <footer className="text-center py-8 text-gray-400 text-xs bg-transparent">
      &copy; 2025 Noasa Consulting. All rights reserved.
    </footer>
  </div>
);

export default Index;
