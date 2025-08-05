
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <WorkCard
                  title="Real Defense - Customer Care Platform"
                  description="Led the development of a comprehensive customer care platform, resulting in 40% reduction in support ticket resolution time and improved customer satisfaction scores."
                />
                <WorkCard
                  title="StyleRow - Project Management Suite"
                  description="Architected and launched a new project management solution that streamlined workflows for creative teams, leading to 60% improvement in project delivery times."
                />
                <WorkCard
                  title="BeClear - AI Leadership Platform"
                  description="Spearheaded the product strategy for an AI-powered leadership development platform, successfully launching to market with 200+ enterprise customers in first year."
                />
                <WorkCard
                  title="McCourt Global - Digital Transformation"
                  description="Guided digital product strategy across multiple business units, establishing unified product development processes and increasing team velocity by 45%."
                />
                <WorkCard
                  title="Resilia - Nonprofit Tech Platform"
                  description="Redesigned core product experience for nonprofit organizations, resulting in 3x user engagement and significant improvements in grant application success rates."
                />
                <WorkCard
                  title="TigerText - Healthcare Communication"
                  description="Enhanced secure messaging platform for healthcare providers, achieving HIPAA compliance while improving user experience and reducing onboarding time by 50%."
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
