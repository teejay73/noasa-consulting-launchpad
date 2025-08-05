
import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import { Shield, Ruler, Brain, CheckCircle, Zap, Target, Users, Rocket, Building } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-b from-deepNavy to-gradientEnd font-inter text-white">
    <Header />
    
    {/* Add top padding to account for fixed header */}
    <main className="pt-16">
      {/* HERO SECTION */}
      <section id="home" className="w-full py-32 sm:py-40 bg-gradient-to-br from-deepNavy to-gradientEnd px-4 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-techBlue/5 via-transparent to-transparent"></div>
        
        <FadeInSection>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Main headline - Left aligned */}
            <h1 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8 leading-tight animate-hero-enter text-left">
              <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Product</span> Consulting for <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">Startups</span> and <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Growth-Stage</span> Companies
            </h1>
            
            {/* Subheadline - Left aligned, 70% max width */}
            <p className="text-lg md:text-xl text-techGray-light font-normal mb-12 max-w-[70%] leading-relaxed">
              Helping teams build smarter, scale faster, and align around what matters—with experienced leadership from day one at a fraction of a cost.
            </p>
            
            {/* CTA button */}
            <a
              href="https://calendly.com/teejayt73/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wider inline-flex items-center gap-3 group"
            >
              → Book a Discovery Call
              <span className="transition-transform duration-300 group-hover:translate-x-1"></span>
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-b from-gradientEnd to-deepNavy">
        <FadeInSection delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-grotesk font-semibold text-2xl md:text-3xl mb-16 tracking-tight text-white leading-relaxed max-w-4xl mx-auto">
              From strategy to execution, we embed alongside teams to accelerate product, operations, and go-to-market success.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* How We Work */}
              <div className="bg-cardBg rounded-xl p-8 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-techBlue-light" />
                  <h3 className="font-grotesk font-semibold text-xl text-white uppercase tracking-wide">How We Work</h3>
                </div>
                <ul className="text-techGray-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Embed directly into your team
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Collaborative, outcome-driven approaches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Provide clarity and forward momentum
                  </li>
                </ul>
              </div>
              
              {/* Who We Support */}
              <div className="bg-cardBg rounded-xl p-8 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-techBlue-light" />
                  <h3 className="font-grotesk font-semibold text-xl text-white uppercase tracking-wide">Who We Support</h3>
                </div>
                <ul className="text-techGray-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Founders and CEOs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Department leaders
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Early-stage to mid-growth companies
                  </li>
                </ul>
              </div>
              
              {/* How You Can Engage Us */}
              <div className="bg-cardBg rounded-xl p-8 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-techBlue-light" />
                  <h3 className="font-grotesk font-semibold text-xl text-white uppercase tracking-wide">How You Can Engage Us</h3>
                </div>
                <ul className="text-techGray-light space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Fractional CPO roles
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Head of Product positions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-techBlue-light mt-1 flex-shrink-0" />
                    Strategic consulting engagements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* PAST CLIENTS & EMPLOYERS SECTION */}
      <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-b from-gradientEnd to-lightGradientEnd">
        <FadeInSection delay={100}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl mb-16 tracking-tight text-white">
              Past Clients & Employers
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { name: "Real Defense", icon: Shield },
                { name: "StyleRow", icon: Ruler },
                { name: "BeClear", icon: Brain },
                { name: "McCourt Global", icon: Building },
                { name: "Resilia", icon: Rocket },
                { name: "TigerText", icon: Zap },
                { name: "AT&T Interactive", icon: Target },
                { name: "Evite", icon: Users }
              ].map((client, index) => {
                const IconComponent = client.icon;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-cardBg/50 border border-white/5 group-hover:border-techBlue-light/30 group-hover:shadow-[0_0_20px_rgba(86,204,242,0.2)] transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-techGray-light group-hover:text-techBlue-light transition-colors duration-300" />
                      <span className="text-sm text-techGray-light group-hover:text-white font-medium">
                        {client.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* HIGH IMPACT CAPABILITIES SECTION */}
      <section className="w-full py-20 px-4 md:px-0 bg-gradient-to-b from-lightGradientEnd to-deepNavy">
        <FadeInSection delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-grotesk font-bold text-3xl md:text-4xl mb-16 tracking-tight text-white">
              Where Noasa Consulting Makes a High Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Product Strategy & Vision",
                  description: "Defining clear product roadmaps, market positioning, and long-term strategic direction that aligns with business objectives."
                },
                {
                  title: "Team Leadership & Scaling",
                  description: "Building and leading high-performing product teams, establishing processes, and creating culture of innovation and execution."
                },
                {
                  title: "Go-to-Market Excellence",
                  description: "Orchestrating successful product launches, pricing strategies, and market entry approaches that drive adoption and growth."
                },
                {
                  title: "Operational Transformation",
                  description: "Implementing agile methodologies, optimizing workflows, and establishing metrics-driven decision making frameworks."
                },
                {
                  title: "Stakeholder Alignment",
                  description: "Creating clear communication channels, managing expectations, and ensuring all stakeholders are aligned on priorities and outcomes."
                },
                {
                  title: "Innovation & Growth",
                  description: "Identifying new opportunities, driving product innovation, and scaling systems to support rapid business growth."
                }
              ].map((capability, index) => (
                <div
                  key={index}
                  className="bg-cardBg rounded-xl p-8 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(47,128,237,0.3)] group"
                >
                  <h3 className="font-grotesk font-semibold text-xl md:text-2xl text-white mb-4 group-hover:text-techBlue-light transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-techGray-light text-lg leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full py-24 px-4 md:px-0 bg-deepNavy relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-techBlue/10 via-transparent to-transparent"></div>
        {/* Animated pulse divider */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-neonBlue to-transparent animate-glow"></div>
        
        <FadeInSection delay={320}>
          <div className="max-w-xl mx-auto text-center relative z-10">
            <h2 className="font-grotesk text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wide relative">
              Let's Talk
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-techBlue-light animate-underline-expand"></span>
            </h2>
            <div className="text-white mb-12 text-xl leading-relaxed italic">
              "If you're facing complexity, scale, or messy growth—we should talk."
            </div>
            <a
              href="https://calendly.com/teejayt73/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wider inline-flex items-center gap-3 group mb-8"
            >
              → Book a Discovery Call
              <span className="transition-transform duration-300 group-hover:translate-x-1"></span>
            </a>
            <div className="flex gap-6 justify-center text-sm">
              <a
                href="https://calendly.com/teejayt73/30min"
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
    <footer className="text-center py-8 text-footerText text-sm bg-deepNavy border-t border-white/10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-techBlue-light/30 to-transparent"></div>
      © 2025 Noasa Consulting. All rights reserved.
    </footer>
  </div>
);

export default Index;
