
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deepNavy' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <img 
              src="/lovable-uploads/63da416f-5f87-484a-bc89-78c11df01d79.png" 
              alt="Noasa Consulting" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/example-clients" 
              className="text-white hover:text-techBlue-light font-medium transition-all duration-300 relative group"
            >
              Example Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techBlue-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="https://calendly.com/teejayt73/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wide"
            >
              → Book a Discovery Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-techBlue-light transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-deepNavy backdrop-blur-sm border-b border-white/10 px-4 py-6 space-y-4 animate-slide-in-right">
            <Link
              to="/example-clients"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-techBlue-light font-medium transition-all duration-300 py-2"
            >
              Example Clients
            </Link>
            <a
              href="https://calendly.com/teejayt73/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block border border-techBlue hover:border-neonBlue hover:bg-neonBlue hover:text-deepNavy text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] uppercase tracking-wide text-center mt-4"
            >
              → Book a Discovery Call
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
