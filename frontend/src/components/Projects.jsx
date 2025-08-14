import React, { useState } from 'react';
import { Github, ExternalLink, Code, Brain, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Generative AI Research Assistant",
      category: "AI/ML",
      icon: Brain,
      description: "An intelligent research assistant powered by generative AI to help streamline academic research and knowledge discovery.",
      image: "/project1.png",
      technologies: ["Python", "LangChain", "GPT-4", "Streamlit", "Vector DB"],
      github: "https://www.kaggle.com/code/artconnoisseur/google-capstone-project",
      live: "#",
      features: ["Smart document analysis", "Contextual understanding", "Research synthesis"]
    },
    {
      title: "Brain Tumor Segmentation",
      category: "Medical AI",
      icon: Brain,
      description: "Advanced deep learning system for accurate brain tumor detection and segmentation in medical imaging.",
      image: "/project2.png",
      technologies: ["TensorFlow", "OpenCV", "U-Net", "Python", "Medical Imaging"],
      github: "https://github.com/MuhammadZafir/BRAIN-TUMOR-SEGMENTATION-",
      live: "#",
      features: ["95% accuracy", "Real-time processing", "Medical grade precision"]
    },
    {
      title: "Stationary Shop Management System",
      category: "Software",
      icon: Code,
      description: "Comprehensive inventory and sales management system for retail operations with real-time tracking.",
      image: "/project3.png",
      technologies: ["Python", "SQL", "Tkinter", "Database Design"],
      github: "https://github.com/MuhammadZafir/Stationary-Shop-Management-System",
      live: "#",
      features: ["Inventory tracking", "Sales analytics", "User management"]
    },
    {
      title: "3D AutoCAD Drone",
      category: "Design",
      icon: Cpu,
      description: "Detailed 3D modeling and design of a functional drone using AutoCAD with aerodynamic optimization.",
      image: "/project4.png",
      technologies: ["AutoCAD", "3D Modeling", "Mechanical Design", "Simulation"],
      github: "https://github.com/MuhammadZafir/3D-AUTOCAD-DRONE",
      live: "#",
      features: ["Precise modeling", "Aerodynamic design", "Component assembly"]
    },
    {
      title: "Biometric Unlocking System",
      category: "IoT",
      icon: Cpu,
      description: "Secure access control system using biometric authentication with Arduino and fingerprint sensors.",
      image: "/project5.png",
      technologies: ["Arduino", "C++", "Sensors", "IoT", "Security"],
      github: "https://github.com/MuhammadZafir/BIOMETRIC-DOOR-UNLOCKING-SYSTEM",
      live: "#",
      features: ["Fingerprint auth", "Secure access", "Real-time monitoring"]
    },
    {
      title: "AC Voltage Sensing",
      category: "Embedded",
      icon: Cpu,
      description: "Real-time AC voltage monitoring and analysis system with safety features and data logging.",
      image: "/project6.png",
      technologies: ["Arduino", "Sensors", "Signal Processing", "Data Logging"],
      github: "https://github.com/MuhammadZafir/AC_Voltage_Sensing",
      live: "#",
      features: ["Real-time monitoring", "Safety alerts", "Data visualization"]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        {/* Project Showcase */}
        <div className="relative">
          {/* Main Project Display */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-amber-600/20 to-amber-500/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="relative z-10 p-12">
                  {React.createElement(projects[currentProject].icon, {
                    className: "w-32 h-32 text-amber-400 mx-auto"
                  })}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="mb-4">
                  <span className="text-amber-400 text-sm font-medium">{projects[currentProject].category}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {projects[currentProject].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentProject].technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={projects[currentProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <button className="flex items-center gap-2 px-6 py-3 border border-amber-500/50 hover:bg-amber-500/10 rounded-full text-amber-400 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevProject}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Project Dots */}
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProject(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentProject === idx 
                      ? 'w-8 bg-amber-400' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextProject}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Project Grid Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {projects.slice(0, 3).map((project, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentProject(idx)}
              className="group cursor-pointer bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {React.createElement(project.icon, {
                  className: "w-10 h-10 text-amber-400"
                })}
              </div>
              <h4 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;