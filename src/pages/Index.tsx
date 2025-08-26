import React from "react";
import Header from "../components/Header";
import FadeInSection from "../components/FadeInSection";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import ClientLogo, { ClientName } from "../components/ClientLogo";
import { Shield, Ruler, Brain, CheckCircle, Zap, Target, Users, Rocket, Building } from "lucide-react";
const Index = () => <div className="min-h-screen bg-gradient-to-b from-deepNavy to-gradientEnd font-inter text-white">
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
              <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Fractional Product</span> <span className="text-techBlue-light">Consulting for</span> <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Startups</span> <span className="text-white">and</span> <span className="bg-gradient-to-r from-techBlue-light to-neonBlue bg-clip-text text-transparent">Growth-Stage</span> <span className="text-white">Companies</span>
            </h1>
            
            {/* Subheadline - Left aligned, 70% max width */}
            <p className="text-lg md:text-xl text-techGray-light font-normal mb-12 max-w-[70%] leading-relaxed">Helping teams build smarter, scale faster, and align around what matters, with experienced leadership from day one at a fraction of a cost.</p>
            
            {/* CTA button */}
            <a href="https://calendar.app.google/QmDsVr3br3PohCUF7" target="_blank" rel="noopener noreferrer" className="border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wider inline-flex items-center gap-3 group">
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
              Driving product, operations, and go-to-market success through embedded partnership from strategy to execution.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* How We Work */}
              <div className="bg-cardBg rounded-xl p-8 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-techBlue-light" />
                  <h3 className="font-grotesk font-semibold text-xl text-white uppercase tracking-wide">Working Approach</h3>
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
                  <h3 className="font-grotesk font-semibold text-xl text-white uppercase tracking-wide">Clients Served</h3>
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
                  <h3 className="font-grotesk font-semibold text-xl text-white uppercase tracking-wide">Engagement Models</h3>
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
              {[{
              name: "Real Defense" as ClientName,
              icon: Shield,
              hasLogo: true
            }, {
              name: "StyleRow" as ClientName,
              icon: Ruler,
              hasLogo: true
            }, {
              name: "BeClear" as ClientName,
              icon: Brain,
              hasLogo: true
            }, {
              name: "McCourt Global" as ClientName,
              icon: Building,
              hasLogo: true
            }, {
              name: "Resilia" as ClientName,
              icon: Rocket,
              hasLogo: true
            }, {
              name: "TigerText" as ClientName,
              icon: Zap,
              hasLogo: true
            }, {
              name: "AT&T Interactive" as ClientName,
              icon: Target,
              hasLogo: true
            }, {
              name: "Evite" as ClientName,
              icon: Users,
              hasLogo: true
            }].map((client, index) => {
              const IconComponent = client.icon;
              return <div key={index} className="group cursor-pointer transition-all duration-300 hover:scale-110">
                    <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white border border-gray-200 group-hover:border-techBlue-light/30 group-hover:shadow-[0_0_20px_rgba(86,204,242,0.2)] transition-all duration-300">
                      {client.hasLogo ? <ClientLogo name={client.name} /> : <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-techBlue-light transition-colors duration-300" />}
                    </div>
                  </div>;
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

      {/* GETTING STARTED SECTION */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-deepNavy to-gradientEnd">
        <FadeInSection delay={250}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl mb-4 tracking-tight text-white">
              Getting Started
            </h2>
            <p className="text-techGray-light mb-16 text-lg">
              Choose a clear, low-friction entry point
            </p>
            
            <div className="flex justify-center px-4">
              {/* 4-Week Sprint Card */}
              <div className="bg-cardBg rounded-xl p-8 border border-white/10 hover:border-techBlue-light/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(47,128,237,0.2)] group max-w-xl w-full">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-techBlue-light flex-shrink-0" />
                  <h3 className="font-grotesk font-semibold text-xl text-white text-center">4-Week Product Acceleration Sprint</h3>
                </div>
                <p className="text-techGray-light leading-relaxed text-center">
                  Diagnose, prioritize, and deliver one measurable win
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
            <a href="https://calendar.app.google/QmDsVr3br3PohCUF7" target="_blank" rel="noopener noreferrer" className="border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wider inline-flex items-center gap-3 group mb-8">
              → Book a Discovery Call
              <span className="transition-transform duration-300 group-hover:translate-x-1"></span>
            </a>
            
          </div>
        </FadeInSection>
      </section>
    </main>

    {/* Footer */}
    <footer className="text-center py-8 text-footerText text-sm bg-deepNavy border-t border-white/10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-techBlue-light/30 to-transparent"></div>
      © 2025 Noasa Consulting. All rights reserved.
    </footer>
  </div>;
export default Index;