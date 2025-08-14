import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <StarField />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;