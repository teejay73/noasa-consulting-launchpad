
import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import WorkCard from "../components/WorkCard";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ExampleClients = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] font-inter text-gray-900">
      <Header />
      
      {/* Add top padding to account for fixed header */}
      <main className="pt-20">
        {/* Back Navigation */}
        <section className="w-full py-8 px-4 md:px-0">
          <div className="max-w-5xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </section>

        {/* Page Header */}
        <section className="w-full py-8 px-4 md:px-0">
          <FadeInSection>
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="font-inter font-bold text-4xl md:text-5xl tracking-tight mb-6 text-gray-900">
                Example Client Work
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from strategic partnerships with startups and growth-stage companies across various industries and stages.
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* Client Case Studies */}
        <section className="w-full py-16 px-4 md:px-0">
          <FadeInSection delay={100}>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <WorkCard
                  title="Customer Operations & BI – $45MM ARR SaaS Company"
                  description="Led development of internal tools to reduce agent handling time and increase revenue. Improved team workflow through restructured prioritization and roadmap systems."
                />
                <WorkCard
                  title="MVP Build – Early-Stage Real Estate Tech Startup"
                  description="Scoped, defined, and delivered a new PM tool for real estate agents in partnership with the founding team. From concept to v1 launch with live customer deployment."
                />
                <WorkCard
                  title="AI Leadership Platform – Pre-Seed Startup"
                  description="Provided strategic guidance and product architecture design for a B2B2C platform focused on professional development and behavioral AI."
                />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 px-4 md:px-0 bg-white">
          <FadeInSection delay={200}>
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Let's explore how we can help accelerate your growth and align your team around what matters most.
              </p>
              <a
                href="mailto:hello@yourdomain.com"
                className="inline-block bg-accentBlue hover:bg-blue-800 text-white px-8 py-3 rounded-full text-base font-bold shadow transition-colors"
              >
                Book a Discovery Call
              </a>
            </div>
          </FadeInSection>
        </section>
      </main>
    </div>
  );
};

export default ExampleClients;
