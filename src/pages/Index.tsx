
import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import ClientHighlightCards from "../components/ClientHighlightCards";

const Index = () => (
  <div className="min-h-screen bg-deepNavy font-inter text-white">
    <Header />
    
    {/* Add top padding to account for fixed header */}
    <main className="pt-16">
      {/* HERO SECTION */}
      <section id="home" className="w-full py-32 sm:py-40 bg-deepNavy flex flex-col items-center px-4 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-techBlue/5 via-transparent to-transparent"></div>
        
        <FadeInSection>
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            {/* Main headline */}
            <h1 className="font-grotesk font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-tight animate-hero-enter">
              <span className="block text-white">FRACTIONAL</span>
              <span className="block gradient-text">PRODUCT</span>
              <span className="block text-white">EXECUTIVE</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-techGray-light font-normal mb-12 max-w-3xl leading-relaxed">
              Driving innovation and strategy for technology companies
            </p>
            
            {/* CTA button */}
            <a
              href="mailto:teejayt73@gmail.com"
              className="border border-techBlue hover:border-neonBlue text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:text-neonBlue uppercase tracking-wider inline-flex items-center gap-3 group"
            >
              GET IN TOUCH
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* CLIENT HIGHLIGHTS SECTION */}
      <section id="services" className="w-full py-20 px-4 md:px-0 bg-deepNavy">
        <FadeInSection delay={200}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center font-grotesk font-semibold text-3xl md:text-4xl mb-16 tracking-tight text-white">
              TRUSTED BY LEADING COMPANIES
            </h2>
            <ClientHighlightCards />
          </div>
        </FadeInSection>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full py-20 px-4 md:px-0 bg-techGray-dark/30">
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-grotesk font-semibold text-3xl md:text-4xl mb-12 tracking-tight text-white">
              STRATEGIC PRODUCT LEADERSHIP
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg leading-relaxed">
              {/* How We Work */}
              <div className="bg-techGray-dark/50 rounded-xl p-8 border border-white/10 hover:border-techBlue-light/30 transition-all duration-300">
                <h3 className="font-grotesk font-semibold text-xl text-techBlue-light mb-4 uppercase tracking-wide">How We Work</h3>
                <p className="text-techGray-light">
                  We embed directly into your team as fractional product executives, providing clarity, structure, and forward momentum through collaborative, outcome-driven approaches.
                </p>
              </div>
              
              {/* Who We Support */}
              <div className="bg-techGray-dark/50 rounded-xl p-8 border border-white/10 hover:border-techBlue-light/30 transition-all duration-300">
                <h3 className="font-grotesk font-semibold text-xl text-techBlue-light mb-4 uppercase tracking-wide">Who We Support</h3>
                <p className="text-techGray-light">
                  Founders, CEOs, and department leaders building, scaling, or transforming digital products. From early-stage chaos to mid-growth complexity.
                </p>
              </div>
              
              {/* Our Approach */}
              <div className="bg-techGray-dark/50 rounded-xl p-8 border border-white/10 hover:border-techBlue-light/30 transition-all duration-300">
                <h3 className="font-grotesk font-semibold text-xl text-techBlue-light mb-4 uppercase tracking-wide">Our Approach</h3>
                <p className="text-techGray-light">
                  Fractional leadership roles including CPO, Head of Product, or Product Lead to fill critical gaps without full-time overhead.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full py-24 px-4 md:px-0 bg-deepNavy relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-techBlue/10 via-transparent to-transparent"></div>
        
        <FadeInSection delay={320}>
          <div className="max-w-xl mx-auto text-center relative z-10">
            <h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wide">
              LET'S TALK
            </h2>
            <div className="text-techGray-light mb-12 text-xl leading-relaxed">
              Ready to accelerate your product strategy?<br />
              Let's discuss how we can drive innovation together.
            </div>
            <a
              href="mailto:teejayt73@gmail.com"
              className="border border-techBlue hover:border-neonBlue text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:text-neonBlue uppercase tracking-wider inline-flex items-center gap-3 group mb-8"
            >
              GET IN TOUCH
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <div className="flex gap-6 justify-center text-sm">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-techBlue-light hover:text-neonBlue font-medium transition-all duration-300 hover:underline uppercase tracking-wide"
              >
                Schedule Online
              </a>
              <span className="text-techGray-light">•</span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-techBlue-light hover:text-neonBlue font-medium transition-all duration-300 hover:underline uppercase tracking-wide"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </main>

    {/* Footer */}
    <footer className="text-center py-8 text-techGray-light text-xs bg-deepNavy border-t border-white/10">
      &copy; 2025 NOASA CONSULTING. ALL RIGHTS RESERVED.
    </footer>
  </div>
);

export default Index;
