import React, { useState } from 'react';
import { Code2, Brain, Cpu, Globe, Wrench, Megaphone } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "YOLOv8", level: 70 },
        { name: "SAM", level: 65 },
        { name: "LangChain", level: 75 },
        { name: "Prompt Engineering", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Vertex AI", level: 70 },
        { name: "Jupyter Notebook", level: 90 }
      ]
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Arduino", level: 90 },
        { name: "Microcontrollers", level: 85 },
        { name: "Circuit Design", level: 80 },
        { name: "Keil", level: 75 },
        { name: "ModelSim", level: 70 },
        { name: "VS4000", level: 65 }
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "from-green-600 to-emerald-600",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "SQL", level: 75 },
        { name: "AutoCAD", level: 80 },
        { name: "Proteus", level: 75 },
        { name: "EasyEDA", level: 70 },
        { name: "Multisim", level: 70 }
      ]
    },
    {
      icon: Megaphone,
      title: "Creative & Leadership",
      color: "from-indigo-600 to-purple-600",
      skills: [
        { name: "Public Speaking", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Media Production", level: 75 },
        { name: "Video Editing", level: 80 },
        { name: "Photography", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">My Expertise</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Technical <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400 scale-105'
                    : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <div className="grid gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-amber-400 text-sm">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
            <p className="text-gray-400">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
            <p className="text-gray-400">Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">3+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
            <p className="text-gray-400">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;