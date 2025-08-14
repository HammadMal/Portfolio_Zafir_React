import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "Zafir"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Changed to 3 seconds to give time for the animation
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated Hello */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl text-gray-300 mb-4"
        >
          Hello! 👋
        </motion.h3>
        
        {/* Main Title with Typing Animation */}
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            I am{' '}
          </motion.span>
          
          {/* Typing Animation for Dynamic Text */}
          <motion.span
            key={titles[titleIndex]} // Key changes to trigger re-animation
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent"
          >
            {titles[titleIndex].split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </motion.span>
        </div>
        
        {/* Subtitle with Fade-in Animation */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl mb-8 tracking-widest"
        >
          INNOVATOR | CREATOR
        </motion.p>
        
        {/* Buttons with Stagger Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a 
            href="/path-to-your-cv.pdf" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full font-semibold text-black overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-amber-500/50 rounded-full font-semibold text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300"
          >
            Let's Connect
          </motion.button>
        </motion.div>
        
        {/* Social Links with Stagger Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { Icon: Github, href: "https://github.com/MuhammadZafir" },
            { Icon: Linkedin, href: "https://linkedin.com/in/mzafirr" },
            { Icon: Twitter, href: "https://twitter.com" },
            { Icon: Instagram, href: "https://instagram.com/muhammadzafirr" },
            { Icon: Facebook, href: "https://facebook.com" }
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.href} 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/5 rounded-full hover:bg-amber-500/20 transition-all duration-300"
            >
              <social.Icon className="w-5 h-5 text-gray-400 hover:text-amber-400" />
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button 
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6 text-amber-400" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;