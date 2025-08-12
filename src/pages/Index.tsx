
import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
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
              <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Product</span> <span className="text-techBlue-light">Consulting for</span> <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Startups</span> <span className="text-white">and</span> <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Growth-Stage</span> <span className="text-white">Companies</span>
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
                { name: "Real Defense", icon: Shield, hasLogo: true },
                { name: "StyleRow", icon: Ruler, hasLogo: true },
                { name: "BeClear", icon: Brain, hasLogo: true },
                { name: "McCourt Global", icon: Building, hasLogo: true },
                { name: "Resilia", icon: Rocket, hasLogo: true },
                { name: "TigerText", icon: Zap, hasLogo: false },
                { name: "AT&T Interactive", icon: Target, hasLogo: true },
                { name: "Evite", icon: Users, hasLogo: true }
              ].map((client, index) => {
                const IconComponent = client.icon;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white border border-gray-200 group-hover:border-techBlue-light/30 group-hover:shadow-[0_0_20px_rgba(86,204,242,0.2)] transition-all duration-300">
                      {client.hasLogo ? (
                        client.name === "BeClear" ? (
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/77b3a80f-7b00-45a0-8f55-cf0e389001e4.png" 
                              alt="BeClear" 
                              className="h-16 w-auto"
                            />
                          </div>
                        ) : client.name === "Real Defense" ? (
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/f65f9ab9-718c-48b6-a2cf-d9f3adcc99da.png" 
                              alt="Real Defense" 
                              className="h-10 w-auto scale-[2.1]"
                            />
                          </div>
                        ) : client.name === "StyleRow" ? (
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/b8b28767-6fcf-4f73-9936-6bb9e8e68d70.png" 
                              alt="StyleRow" 
                              className="h-10 w-auto"
                            />
                          </div>
                        ) : client.name === "AT&T Interactive" ? (
                          <div className="w-20 h-8 flex items-center justify-center">
                            <div className="flex items-center gap-1">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0078A0] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00A8CC] to-[#0078A0]"></div>
                                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                                <div className="absolute inset-[3px] bg-gradient-to-br from-[#00A8CC] to-[#0078A0] rounded-full"></div>
                                <div className="absolute inset-[4px] bg-white rounded-full"></div>
                                <div className="absolute inset-[5px] bg-gradient-to-br from-[#00A8CC] to-[#0078A0] rounded-full"></div>
                              </div>
                              <span className="text-black font-bold text-sm">AT&T</span>
                            </div>
                          </div>
                        ) : client.name === "McCourt Global" ? (
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/9c690c92-d62f-4d6e-b01e-70d4e13bb9ad.png" 
                              alt="McCourt Global" 
                              className="h-10 w-auto"
                            />
                          </div>
                        ) : client.name === "Resilia" ? (
                          <div className="w-16 h-8 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/9e13c6a3-da6c-48ae-8eeb-3661309174f8.png" 
                              alt="Resilia" 
                              className="h-6 w-auto"
                            />
                          </div>
                        ) : client.name === "Evite" ? (
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/7d3bdd8b-649d-438f-a757-5cc7761d53d2.png" 
                              alt="Evite" 
                              className="h-12 w-auto"
                            />
                          </div>
                        ) : (
                           <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-techBlue-light transition-colors duration-300" />
                        )
                      ) : (
                        <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-techBlue-light transition-colors duration-300" />
                      )}
                       {client.name !== "Evite" && client.name !== "McCourt Global" && client.name !== "BeClear" && client.name !== "Real Defense" && client.name !== "StyleRow" && (
                         <span className="text-sm text-gray-700 group-hover:text-black font-medium">
                           {client.name}
                         </span>
                       )}
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
            
            <CapabilitiesGrid />
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
