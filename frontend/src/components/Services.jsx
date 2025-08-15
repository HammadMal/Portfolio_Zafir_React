import React from 'react';
import { Brain, Cpu, Code, ArrowRight } from 'lucide-react';



const Services = () => {
  function click () {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }


  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "I design and build machine learning models for real world tasks like image classification, segmentation, and AI assistants from prototypes to production systems.",
      gradient: "from-purple-600 to-pink-600",
      features: ["Machine Learning", "Computer Vision", "NLP", "Deep Learning"]
    },
    {
      icon: Cpu,
      title: "Embedded Evolution",
      description: "Creating smart systems from concept to reality using microcontrollers and sensors ideal for academic projects, prototypes, and IoT solutions.",
      gradient: "from-blue-600 to-cyan-600",
      features: ["Arduino", "IoT", "Circuit Design", "Sensors"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern responsive web interfaces with clean code using HTML, CSS, and JavaScript frameworks.",
      gradient: "from-green-600 to-emerald-600",
      features: ["React", "Responsive Design", "Modern UI", "Clean Code"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">What I Offer</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full border border-gray-700 group-hover:border-amber-500/30 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                {/* <button className="flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button> */}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Looking for something specific? Let's discuss your project!
          </p>
          <button onClick={click} className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full font-semibold text-black hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;