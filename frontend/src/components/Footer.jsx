import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              © {currentYear} All Rights Reserved
            </p>
            <p className="text-gray mt-2">
              Made with <Heart className="inline w-3 h-3 text-red-500 animate-pulse" /> by Hammad Malik
            </p>
          </div>

          {/* Logo */}
          <div className="order-first md:order-none">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent hover:from-amber-400 hover:to-amber-600 transition-all duration-300 cursor-pointer">
              Zafir | Portfolio
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a 
              href="https://github.com/MuhammadZafir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mzafirr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
            </a>
            <a 
              href="https://instagram.com/muhammadzafirr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
            </a>
            <a 
              href="https://facebook.com/profile.php?id=100008858176609"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <a href="#about" className="text-gray-500 hover:text-amber-400 transition-colors">About</a>
              <a href="#services" className="text-gray-500 hover:text-amber-400 transition-colors">Services</a>
              <a href="#projects" className="text-gray-500 hover:text-amber-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-500 hover:text-amber-400 transition-colors">Contact</a>
            </div>
            
            <p className="text-gray">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-500/30 hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-amber-400 group-hover:text-white transition-colors" />
      </button>
    </footer>
  );
};

export default Footer;