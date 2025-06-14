
import React from "react";
import FadeInSection from "../components/FadeInSection";
import WorkCard from "../components/WorkCard";
import ClientLogoGrid from "../components/ClientLogoGrid";

const CTA_EMAIL = "hello@yourdomain.com";

const Index = () => (
  <main className="min-h-screen bg-[#fafbfc] font-inter text-gray-900 flex flex-col">
    {/* HERO SECTION */}
    <section className="w-full py-24 sm:py-32 bg-[#fafbfc] flex flex-col items-center border-b border-gray-100 px-4">
      <FadeInSection>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Announcement badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium shadow-sm">
            <span role="img" aria-label="wave">👋</span>
            Experienced Product & Strategy Leadership
          </span>
          {/* Main headline */}
          <h1 className="font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5 leading-tight">
            Product & Strategy Consulting&nbsp;for Startups and Growth-Stage Companies.<br />
            <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold">
              <span className="text-black">Build. Scale.&nbsp;</span>
              <span className="text-accentYellow">Faster.</span>
            </span>
          </h1>
          {/* Subheadline / summary */}
          <div className="text-lg md:text-xl text-gray-600 font-normal mb-10 max-w-2xl">
            Helping teams build smarter, scale faster, and align around what matters — with experienced leadership from day one.
          </div>
          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-5 w-full mb-3">
            <a
              href={`mailto:${CTA_EMAIL}`}
              className="bg-accentBlue hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full text-base shadow-md transition-colors duration-150"
            >
              Book a Call
            </a>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-7 py-3 rounded-full text-base shadow transition-colors duration-150"
              onClick={() => {
                const about = document.getElementById("overview");
                about && about.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </FadeInSection>
    </section>

    {/* OVERVIEW */}
    <section id="overview" className="w-full py-14 px-4 md:px-0">
      <FadeInSection delay={100}>
        <div className="max-w-2xl mx-auto text-center text-gray-700 text-lg md:text-xl">
          Strategic support across product, operations, and go-to-market.<br className="hidden md:block" />
          Engagements are designed to plug into existing teams, bring clarity to roadmaps, and drive tangible results—whether launching a new product, accelerating GTM, or leveling up internal processes.<br /><br />
          Built for founders, CEOs, and department leads who need outcomes, not overhead.
        </div>
      </FadeInSection>
    </section>

    {/* CLIENT WORK */}
    <section id="work" className="w-full py-16 px-4 md:px-0 bg-gray-50 border-b border-t border-gray-100">
      <FadeInSection delay={200}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-semibold text-3xl md:text-4xl mb-10 tracking-tight text-gray-900">
            Selected Client Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkCard
              title="Customer Operations & BI – $45MM ARR SaaS Company"
              description="Developed internal tools to reduce agent handling time and increase revenue. Improved team workflow through restructured prioritization and roadmap systems."
            />
            <WorkCard
              title="MVP Build – Early-Stage Real Estate Tech Startup"
              description="Scoped, defined, and delivered a new PM tool for real estate agents. From concept to v1 launch with live customer deployment."
            />
            <WorkCard
              title="AI Leadership Platform – Pre-Seed Startup"
              description="Provided strategic guidance and product architecture design for a B2B2C platform focused on professional development and behavioral AI."
            />
          </div>
        </div>
      </FadeInSection>
    </section>

    {/* CAPABILITIES / SERVICES */}
    <section id="services" className="w-full py-16 px-4 md:px-0">
      <FadeInSection delay={240}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-semibold text-3xl md:text-4xl mb-7 tracking-tight text-gray-900">
            Consulting Capabilities
          </h2>
          <div className="flex flex-wrap justify-center gap-5 md:gap-7 mb-7">
            {[
              "Fractional Head of Product / Product Strategy",
              "Roadmap Planning & Prioritization",
              "MVP Scoping & Delivery",
              "Ops & Executional Support",
              "Cross-Functional Team Alignment",
              "Go-To-Market Acceleration",
            ].map((cap, i) => (
              <span key={i} className="bg-gray-100 px-5 py-3 rounded-full text-base text-gray-800 shadow border border-gray-200 font-medium">
                {cap}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-600 md:text-lg">
            Available for ongoing consulting, fractional leadership, or fixed-scope projects.
          </p>
        </div>
      </FadeInSection>
    </section>

    {/* CLIENT LOGO GRID */}
    <section className="w-full py-8 px-4 md:px-0 bg-gray-50">
      <FadeInSection delay={260}>
        <ClientLogoGrid />
      </FadeInSection>
    </section>

    {/* CONTACT SECTION */}
    <section id="contact" className="w-full py-24 px-4 md:px-0 bg-white flex flex-col items-center">
      <FadeInSection delay={320}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Let&apos;s Talk</h2>
          <div className="text-gray-700 mb-6 text-lg">
            For inquiries or project discussions:
          </div>
          <a
            href={`mailto:${CTA_EMAIL}`}
            className="inline-block bg-accentBlue hover:bg-blue-800 text-white px-8 py-3 rounded-full text-base font-bold shadow transition-colors"
          >
            Email: {CTA_EMAIL}
          </a>
          <div className="mt-7 flex gap-4 justify-center">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-6 py-2 bg-accentBlue text-white rounded-full font-medium shadow hover:bg-blue-900 transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-6 py-2 bg-gray-200 text-gray-800 rounded-full font-medium shadow hover:bg-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>

    {/* Minimalist Footer */}
    <footer className="text-center py-8 text-gray-400 text-xs bg-transparent">
      &copy; {new Date().getFullYear()} Noasa Consulting. All rights reserved.
    </footer>
  </main>
);

export default Index;
