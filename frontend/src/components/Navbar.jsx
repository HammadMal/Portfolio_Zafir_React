import React, { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-300">
              zafir.me
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Download CV Button - Desktop */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="hidden lg:block bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Download CV
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-amber-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-left py-2 border-b border-gray-800 hover:border-amber-400/50"
              >
                {link.label}
              </button>
            ))}
            <a 
              href="/path-to-your-cv.pdf" 
              target="_blank"
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold px-6 py-3 rounded-full text-center mt-4"
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;