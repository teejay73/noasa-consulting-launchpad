
import React from "react";
import FadeInSection from "../components/FadeInSection";
import WorkCard from "../components/WorkCard";
import ClientLogoGrid from "../components/ClientLogoGrid";

// Anchored scroll: simple smooth scrolling
const scrollToAnchor = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const HERO_BG =
  "bg-gradient-to-b from-gray-50 via-white to-sky-50";

const CTA_EMAIL = "hello@yourdomain.com";

const Index = () => (
  <main className="font-sans bg-background text-gray-900 min-h-screen">
    {/* HERO SECTION */}
    <section
      className={`w-full ${HERO_BG} border-b border-gray-100 py-20 px-6 md:px-0`}
    >
      <FadeInSection>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
            Product & Strategy Consulting for Startups and Growth-Stage Companies
          </h1>
          <p className="text-lg leading-snug md:text-xl text-gray-600 mb-8">
            Helping teams build smarter, scale faster, and align around what matters—with experienced leadership from day one.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => scrollToAnchor("contact")}
            >
              Let&apos;s Talk
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors font-medium"
              onClick={() => scrollToAnchor("work")}
            >
              Work
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors font-medium"
              onClick={() => scrollToAnchor("services")}
            >
              Services
            </button>
          </div>
        </div>
      </FadeInSection>
    </section>

    {/* OVERVIEW */}
    <section className="w-full py-14 px-6 md:px-0">
      <FadeInSection delay={100}>
        <div className="max-w-2xl mx-auto text-center text-gray-700 text-lg md:text-xl">
          Strategic support across product, operations, and go-to-market.
          <br className="hidden md:block" />
          Engagements are designed to plug into existing teams, bring clarity to roadmaps, and drive tangible results—whether launching a new product, accelerating GTM, or leveling up internal processes.
          <br />
          <br />
          Built for founders, CEOs, and department leads who need outcomes, not overhead.
        </div>
      </FadeInSection>
    </section>

    {/* CLIENT WORK */}
    <section id="work" className="w-full py-16 px-6 md:px-0 bg-gray-50 border-b border-t border-gray-100">
      <FadeInSection delay={200}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-10 tracking-tight text-gray-900">
            Selected Client Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <section id="services" className="w-full py-16 px-6 md:px-0">
      <FadeInSection delay={240}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-semibold text-2xl md:text-3xl mb-7 tracking-tight text-gray-900">
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
              <span key={i} className="bg-gray-100 px-5 py-3 rounded-md text-base text-gray-800 shadow-sm border border-gray-200">
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
    <section className="w-full py-8 px-6 md:px-0 bg-gray-50">
      <FadeInSection delay={260}>
        <ClientLogoGrid />
      </FadeInSection>
    </section>

    {/* CONTACT SECTION */}
    <section id="contact" className="w-full py-16 px-6 md:px-0 bg-white">
      <FadeInSection delay={320}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Let&apos;s Talk</h2>
          <div className="text-gray-700 mb-6">
            For inquiries or project discussions:
          </div>
          <a
            href={`mailto:${CTA_EMAIL}`}
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg text-base font-medium shadow-sm transition-colors focus:ring-2 focus:ring-blue-400"
          >
            Email: {CTA_EMAIL}
          </a>
          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-5 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-5 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>

    {/* FOOTER minimalist */}
    <footer className="text-center py-8 text-gray-400 text-xs bg-transparent">
      &copy; {new Date().getFullYear()} Noasa Consulting. All rights reserved.
    </footer>
  </main>
);

export default Index;
