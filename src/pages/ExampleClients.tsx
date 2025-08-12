
import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import WorkCard from "../components/WorkCard";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ExampleClients = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deepNavy to-gradientEnd font-inter text-white">
      <Header />
      
      {/* Add top padding to account for fixed header */}
      <main className="pt-16">
        {/* Back Navigation */}
        <div className="w-full py-6 px-4 md:px-0 bg-cardBg/30 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center text-techGray-light hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Page Header */}
        <section className="w-full py-16 px-4 md:px-0 bg-gradient-to-b from-deepNavy to-gradientEnd">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-grotesk font-bold text-4xl md:text-5xl tracking-tight mb-6 text-white">
                Client Success Stories
              </h1>
              <p className="text-xl text-techGray-light leading-relaxed max-w-3xl mx-auto">
                Discover how we've transformed businesses through strategic product leadership and execution excellence.
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* Client Case Studies */}
        <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-b from-gradientEnd to-lightGradientEnd">
          <FadeInSection delay={200}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <WorkCard
                  company="Real Defense"
                  subtitle="Product Strategy & Leadership for Growth-Stage Consumer SaaS"
                  bullets={[
                    "Partnered with this $50MM+ ARR company to drive multiple product initiatives across the customer care, BI, and eCommerce teams.",
                    "Delivered a new internal call center platform that reduced agent handle time by 20% and increased average order value by 17%.",
                    "Designed and launched a self-service customer dashboard for subscription and account management.",
                    "Introduced prioritization frameworks to align cross-functional teams and accelerate delivery velocity."
                  ]}
                />
                <WorkCard
                  company="StyleRow"
                  subtitle="End-to-End Product Ownership for New Market Expansion"
                  bullets={[
                    "Collaborated with the CEO and CRO of this $11MM+ Series A startup to expand into the real estate vertical.",
                    "Acted as Head of Product to define, build, and launch a new transaction management platform for agents.",
                    "Led product strategy, roadmap planning, and execution of the v1 release with a top-tier launch partner."
                  ]}
                />
                <WorkCard
                  company="BeClear"
                  subtitle="AI-Powered Platform Design for Executive Coaching Startup"
                  bullets={[
                    "Co-created the product foundation for this pre-seed B2B2C leadership development platform.",
                    "Led product architecture and feature design for a real-time, AI-driven coaching experience.",
                    "Provided strategic guidance on go-to-market positioning, business model, and investor readiness."
                  ]}
                  variant="beClear"
                  logoUrl="/lovable-uploads/77b3a80f-7b00-45a0-8f55-cf0e389001e4.png"
                />
                <WorkCard
                  company="McCourt Global (Amplica Labs)"
                  subtitle="Product and Operations Leadership for Web3 Innovation Group"
                  bullets={[
                    "Led product strategy and operations for a global digital transformation initiative backed by McCourt Global.",
                    "Built and managed a 25-person international team across product, engineering, and marketing.",
                    "Designed and launched blockchain-based fan engagement platforms with Olympique de Marseille and Monaco Grand Prix, achieving 20%+ conversion and 91% retention.",
                    "Secured board-level investment by presenting vision and commercial strategy for multiple Web3 applications."
                  ]}
                />
                <WorkCard
                  company="Resilia"
                  subtitle="Interim Product Leadership for Series A Readiness"
                  bullets={[
                    "Engaged by Mucker Capital to lead product through a critical funding transition.",
                    "Redesigned Resilia's enterprise nonprofit platform to support scalable impact reporting for grantmakers.",
                    "Translated business vision into a clear, actionable roadmap and helped recruit long-term product leadership."
                  ]}
                />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 px-4 md:px-0 bg-deepNavy">
          <FadeInSection delay={400}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-grotesk font-semibold text-3xl md:text-4xl mb-6 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-techGray-light mb-8 leading-relaxed">
                Let's discuss how we can help accelerate your product strategy and execution.
              </p>
              <a
                href="https://calendly.com/teejayt73/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wider"
              >
                → Book a Discovery Call
              </a>
            </div>
          </FadeInSection>
        </section>
      </main>
    </div>
  );
};

export default ExampleClients;
