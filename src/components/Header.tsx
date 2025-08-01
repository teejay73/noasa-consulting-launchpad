
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deepNavy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-xl font-grotesk font-bold text-white tracking-wide hover:text-techBlue-light transition-colors duration-300">
              NOASA CONSULTING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-techGray-light hover:text-white font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techBlue-light group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="#about"
              className="text-techGray-light hover:text-white font-medium transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techBlue-light group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="text-techGray-light hover:text-white font-medium transition-all duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techBlue-light group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-techGray-light hover:text-white font-medium transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-techBlue-light group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="mailto:teejayt73@gmail.com"
              className="border border-techBlue hover:border-neonBlue text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:text-neonBlue uppercase tracking-wide"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-techGray-light hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-techGray-light hover:text-white font-medium px-2 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-techGray-light hover:text-white font-medium px-2 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-techGray-light hover:text-white font-medium px-2 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-techGray-light hover:text-white font-medium px-2 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="mailto:teejayt73@gmail.com"
                className="border border-techBlue hover:border-neonBlue text-white px-6 py-2 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:text-neonBlue uppercase tracking-wide mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
