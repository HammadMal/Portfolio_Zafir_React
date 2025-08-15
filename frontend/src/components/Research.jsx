import React, { useState } from 'react';
import { BookOpen, FileText, Calendar, Users, Award, ExternalLink, Download, Quote, TrendingUp, Shield } from 'lucide-react';

const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState(0);

  const researchPapers = [
    {
      title: "Enhancing Secrecy Capacity Using Reconfigurable Intelligent Surfaces in Line-of-Sight (LoS) Scenarios for Beyond 5G Networks",
      journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      year: "2024",
      authors: ["Muhammad Zafir", "Co-Author 1", "Co-Author 2"],
      abstract: "This research explores the application of Reconfigurable Intelligent Surfaces (RIS) to enhance secrecy capacity in Line-of-Sight scenarios for Beyond 5G networks. We propose novel methods to optimize secure communication channels using intelligent surface reflection patterns.",
      keywords: ["RIS", "5G Networks", "Secrecy Capacity", "Wireless Security", "LoS Communication"],
      doi: "10.22214/ijraset.2024.xxxxx",
      link: "https://www.ijraset.com/best-journal/enhancing-secrecy-capacity-using-reconfigurable-intelligent-surfaces-in-line-of-sight-los-scenarios-for-beyond-5g-networks",
      citations: "5",
      impactFactor: "7.8",
      category: "Wireless Communications",
      icon: Shield,
      highlights: [
        "Novel RIS optimization algorithm",
        "30% improvement in secrecy capacity",
        "Real-world implementation feasibility"
      ]
    },
    {
      title: "Research Dataset: Advanced Signal Processing for Next-Generation Networks",
      journal: "Zenodo Research Repository",
      year: "2024",
      authors: ["Muhammad Zafir", "Research Team"],
      abstract: "Comprehensive dataset and research findings on advanced signal processing techniques for next-generation wireless networks. This repository includes experimental data, simulation results, and implementation code for reproducible research.",
      keywords: ["Signal Processing", "Dataset", "Next-Gen Networks", "Open Science"],
      doi: "10.5281/zenodo.15529850",
      link: "https://zenodo.org/records/15529850",
      citations: "2",
      downloads: "150+",
      category: "Research Data",
      icon: TrendingUp,
      highlights: [
        "Open-source dataset",
        "Reproducible research",
        "Community contribution"
      ]
    }
  ];

  const stats = [
    { label: "Publications", value: "2", icon: FileText },
    { label: "Citations", value: "7", icon: Quote },
    { label: "Research Areas", value: "3", icon: BookOpen },
    { label: "Collaborations", value: "5+", icon: Users }
  ];

  return (
    <section id="research" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Academic Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Research <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Contributing to the advancement of wireless communications and signal processing through innovative research
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300 text-center group">
                <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Research Papers Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {researchPapers.map((paper, idx) => {
            const Icon = paper.icon;
            return (
              <div 
                key={idx}
                onClick={() => setSelectedResearch(idx)}
                className={`group cursor-pointer bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  selectedResearch === idx ? 'border-amber-500' : 'border-gray-800 hover:border-amber-500/30'
                }`}
              >
                {/* Paper Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {paper.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {paper.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {paper.journal}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Abstract Preview */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {paper.abstract}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.keywords.slice(0, 3).map((keyword, keyIdx) => (
                    <span key={keyIdx} className="text-xs px-2 py-1 bg-black/30 text-amber-400/70 rounded-full">
                      {keyword}
                    </span>
                  ))}
                  {paper.keywords.length > 3 && (
                    <span className="text-xs px-2 py-1 text-gray-500">
                      +{paper.keywords.length - 3} more
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-4 text-sm">
                    {paper.citations && (
                      <span className="text-gray-400">
                        <Quote className="w-4 h-4 inline mr-1" />
                        {paper.citations} citations
                      </span>
                    )}
                    {paper.impactFactor && (
                      <span className="text-gray-400">
                        IF: {paper.impactFactor}
                      </span>
                    )}
                    {paper.downloads && (
                      <span className="text-gray-400">
                        <Download className="w-4 h-4 inline mr-1" />
                        {paper.downloads}
                      </span>
                    )}
                  </div>
                  <ExternalLink className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Research Details */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-amber-400" />
            <h3 className="text-2xl font-bold text-white">Research Highlights</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Details */}
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-3">
                {researchPapers[selectedResearch].title}
              </h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Authors</p>
                  <p className="text-white">{researchPapers[selectedResearch].authors.join(", ")}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">DOI</p>
                  <p className="text-amber-400 font-mono text-sm">{researchPapers[selectedResearch].doi}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="text-white">{researchPapers[selectedResearch].category}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights & Actions */}
            <div>
              <h5 className="text-white font-semibold mb-3">Key Contributions</h5>
              <ul className="space-y-2 mb-6">
                {researchPapers[selectedResearch].highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <a 
                  href={researchPapers[selectedResearch].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full font-semibold text-black hover:scale-105 transition-transform"
                >
                  <FileText className="w-5 h-5" />
                  Read Paper
                </a>
                <button className="flex items-center gap-2 px-6 py-3 border border-amber-500/50 rounded-full text-amber-400 hover:bg-amber-500/10 transition-colors">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Research Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Wireless Communications", "5G/6G Networks", "Signal Processing", "Machine Learning", "Network Security", "IoT", "RIS Technology"].map((interest, idx) => (
              <span key={idx} className="px-4 py-2 bg-gradient-to-br from-amber-600/10 to-amber-500/5 border border-amber-500/20 text-amber-400 rounded-full hover:bg-amber-500/20 transition-colors cursor-pointer">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;