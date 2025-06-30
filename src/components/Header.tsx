
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Name */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Noasa Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/example-clients" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Example Clients
            </Link>
            <a
              href="mailto:hello@yourdomain.com"
              className="bg-accentBlue hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Book a Discovery Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/example-clients" 
                className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Example Clients
              </Link>
              <a
                href="mailto:hello@yourdomain.com"
                className="bg-accentBlue hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
